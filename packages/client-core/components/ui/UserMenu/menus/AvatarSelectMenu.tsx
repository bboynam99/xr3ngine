import React from 'react';
import * as THREE from 'three';
import { ArrowBack, CloudUpload, SystemUpdateAlt, Help } from '@material-ui/icons';
import IconLeftClick from '../../Icons/IconLeftClick';
import { getLoader, loadExtentions } from '@xr3ngine/engine/src/assets/functions/LoadGLTF';
import { FBXLoader } from '@xr3ngine/engine/src/assets/loaders/fbx/FBXLoader';
import { getOrbitControls } from '@xr3ngine/engine/src/input/functions/loadOrbitControl';
import { Views } from '../util';
//@ts-ignore
import styles from '../style.module.scss';
import { AVATAR_FILE_ALLOWED_EXTENSIONS, MAX_AVATAR_FILE_SIZE, MIN_AVATAR_FILE_SIZE, MAX_ALLOWED_TRIANGLES, THUMBNAIL_HEIGHT, THUMBNAIL_WIDTH } from '@xr3ngine/engine/src/common/constants/AvatarConstants';


interface Props {
    changeActiveMenu: Function;
	uploadAvatarModel: Function;
}

interface State {
    selectedFile: any;
    // imgFile: any;
	error: string;
	obj: any;
}

export default class AvatarSelectMenu extends React.Component<Props, State> {
	constructor(props) {
		super(props);

		this.state = {
			selectedFile: null,
			// imgFile: null,
			error: '',
			obj: null,
		};
	}

	componentDidMount() {
		const container = document.getElementById('stage');
		const bounds = container.getBoundingClientRect();

		this.camera = new THREE.PerspectiveCamera(45, bounds.width / bounds.height, 0.25, 20);
		this.camera.position.set(0, 1.25, 1.25);

		this.scene = new THREE.Scene();

		const backLight = new THREE.DirectionalLight(0xfafaff, 1);
		backLight.position.set(1,3,-1);
		backLight.target.position.set(0, 1.5, 0);
		const frontLight = new THREE.DirectionalLight(0xfafaff, 0.7);
		frontLight.position.set(-1,3,1);
		frontLight.target.position.set(0, 1.5, 0);
		const hemi = new THREE.HemisphereLight(0xeeeeff, 0xebbf2c, 1);
		this.scene.add(backLight);
		this.scene.add(backLight.target);
		this.scene.add(frontLight);
		this.scene.add(frontLight.target);
		this.scene.add(hemi);

		this.renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true, alpha: true });
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(bounds.width, bounds.height);
		this.renderer.outputEncoding = THREE.sRGBEncoding;
		this.renderer.domElement.id = 'avatarCanvas';
		container.appendChild(this.renderer.domElement);

		const controls = getOrbitControls(this.camera, this.renderer.domElement);
		(controls as any).addEventListener('change', this.renderScene); // use if there is no animation loop
		controls.minDistance = 0.1;
		controls.maxDistance = 10;
		controls.target.set(0, 1.25, 0);
		controls.update();

		window.addEventListener('resize', this.onWindowResize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.onWindowResize);
	}

	camera = null;
	scene = null;
	renderer = null;
	fileSelected = false;
	maxBB = new THREE.Vector3(2,2,2);

	onWindowResize = () => {
	    const container = document.getElementById('stage');
	    const bounds = container.getBoundingClientRect();
	    this.camera.aspect = bounds.width / bounds.height;
	    this.camera.updateProjectionMatrix();

	    this.renderer.setSize(bounds.width, bounds.height);

	    this.renderScene();
	}

	renderScene = () => {
	    this.renderer.render(this.scene, this.camera);
	}

	handleBrowse = () => {
	    document.getElementById('avatarSelect').click();
	}

	handleAvatarChange = (e) => {
		if (e.target.files[0].size < MIN_AVATAR_FILE_SIZE || e.target.files[0].size > MAX_AVATAR_FILE_SIZE) {
			this.setState({ error: 'Avatar file size must be between ' + (MIN_AVATAR_FILE_SIZE / 1048576) + ' MB and ' + (MAX_AVATAR_FILE_SIZE / 1048576) + ' MB'});
			return;
		}

	    this.scene.children = this.scene.children.filter(c => c.name !== 'avatar');
	    const file = e.target.files[ 0 ];
	    const reader = new FileReader();
		reader.onload = fileData => {
			try {
				if (/\.(?:gltf|glb|vrm)/.test(file.name)) {
					const loader = getLoader();
					loader.parse(fileData.target.result, '', gltf => {
						gltf.scene.name = 'avatar';
						loadExtentions(gltf);
						this.scene.add( gltf.scene );
						this.renderScene();
						const error = this.validate(gltf.scene);
						this.setState({ error, obj: gltf.scene });
					});
				} else {
					const loader = new FBXLoader();
					const scene = loader.parse(fileData.target.result, file.name);
					scene.name = 'avatar';
					this.scene.add( scene );
					this.renderScene();
					const error = this.validate(scene);
					this.setState({ error, obj: scene });
				}
			} catch (error) {
				console.error(error);
				this.setState({ error: 'Select valid 3d avatar file.'});
			}
		};

		try {
			reader.readAsArrayBuffer( file );
			this.fileSelected = true;
			this.setState({ selectedFile: e.target.files[0] });
		} catch (error) {
			console.error(e);
			this.setState({ error: 'Select valid 3d avatar file.'});
		}
	}

	validate = (scene) => {
		const objBoundingBox = new THREE.Box3().setFromObject(scene);
		if (this.renderer.info.render.triangles > MAX_ALLOWED_TRIANGLES) return 'Object contains greater than ' + MAX_ALLOWED_TRIANGLES + ' faces.';

		if (this.renderer.info.render.triangles <= 0) return 'Object is empty.';

		const size = new THREE.Vector3().subVectors(this.maxBB, objBoundingBox.getSize(new THREE.Vector3()));
		if (size.x <= 0 || size.y <= 0 || size.z <= 0) return 'Object is out of bound.';

		let bone = false;
		let skinnedMesh = false;
		scene.traverse(o => {
			if (o.type.toLowerCase() === 'bone') bone = true;
			if (o.type.toLowerCase() === 'skinnedmesh') skinnedMesh = true;
		});

		if (!bone || !skinnedMesh) return 'Obejct does not contain any bones or skin';

		return '';
	}

	openAvatarMenu = (e) => {
		e.preventDefault();
		this.props.changeActiveMenu(Views.Avatar);
	}

	uploadAvatar = () => {
		const error = this.validate(this.state.obj);
		if (error) {
			this.setState({ error });
			return;
		}

	    const canvas = document.createElement('canvas');
	    canvas.width = THUMBNAIL_WIDTH,
	    canvas.height = THUMBNAIL_HEIGHT;
	    const newContext = canvas.getContext('2d');
	    newContext.drawImage(this.renderer.domElement, 0, 0);

	    canvas.toBlob(blob => {
			this.props.uploadAvatarModel(this.state.selectedFile, blob);
	    });
	}

	render() {
		return (
			<div className={styles.avatarUploadPanel}>
            	<div className={styles.avatarHeaderBlock}>
            		<button type="button" className={styles.iconBlock} onClick={this.openAvatarMenu}>
						<ArrowBack />
					</button>
	                <h2>Upload Avatar</h2>
	            </div>
                <div id="stage" className={styles.stage} style={{width: THUMBNAIL_WIDTH + 'px', height: THUMBNAIL_HEIGHT + 'px'}}>
                	<div className={styles.legendContainer}>
                		<Help />
                		<div className={styles.legend}>
                			<div><IconLeftClick /> - <span>Rotate</span></div>
                			<div><span className={styles.shiftKey}>Shift</span> + <IconLeftClick /> - <span>Pan</span></div>
                		</div>
                	</div>
                </div>
                <div className={styles.avatarSelectLabel + ' ' + (this.state.error ? styles.avatarSelectError : '')}>
					{this.state.error
						? this.state.error
						: this.fileSelected ? this.state.selectedFile.name : 'Select Avatar...'}
				</div>
            	<input type="file" id="avatarSelect" accept={AVATAR_FILE_ALLOWED_EXTENSIONS} hidden onChange={this.handleAvatarChange} />
            	<div className={styles.controlContainer}>
	                <button type="button" className={styles.browseBtn} onClick={this.handleBrowse}>Browse <SystemUpdateAlt /></button>
	                <button type="button" className={styles.uploadBtn} onClick={this.uploadAvatar} disabled={!this.fileSelected || !!this.state.error}>Upload <CloudUpload /></button>
	            </div>
		    </div>
		);
	}
}