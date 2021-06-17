import { Capacitor, Plugins } from '@capacitor/core';
import "webxr-native";
import React, { useEffect, useRef, useState } from 'react';
import {
    AxesHelper,
    BoxGeometry, CameraHelper, Color,
    GridHelper, Group,
    Mesh,
    MeshBasicMaterial, OrthographicCamera,
    PerspectiveCamera,
    Quaternion,
    Scene,
    Vector3,
    WebGLRenderer
} from 'three';
import VideocamIcon from '@material-ui/icons/Videocam';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import FlipCameraIosIcon from '@material-ui/icons/FlipCameraIos';
import Player from 'volumetric/src/decoder/Player';
// @ts-ignore
import PlayerWorker from 'volumetric/src/decoder/workerFunction.ts?worker';

//@ts-ignore
import styles from './WebXRPlugin.module.scss';
import { connect } from 'react-redux';
import { updateNewFeedPageState, updateWebXRState } from '../../reducers/popupsState/service';
import { bindActionCreators, Dispatch } from 'redux';
import { selectPopupsState } from '../../reducers/popupsState/selector';
import { selectArMediaState } from "../../reducers/arMedia/selector";
import { getArMediaItem } from "../../reducers/arMedia/service";
import ZoomGestureHandler from "../../../zoom-gesture-handler";
import HintOne from "../WebXrHints/HintOne";
import HintTwo from "../WebXrHints/HintTwo";

const mapStateToProps = (state: any): any => {
    return {
        popupsState: selectPopupsState(state),
        arMediaState: selectArMediaState(state)
    };
  };

  const mapDispatchToProps = (dispatch: Dispatch): any => ({
    updateNewFeedPageState: bindActionCreators(updateNewFeedPageState, dispatch),
    updateWebXRState: bindActionCreators(updateWebXRState, dispatch),
    getArMediaItem: bindActionCreators(getArMediaItem, dispatch),
});

interface Props{
    popupsState?: any;
    arMediaState?: any;
    updateNewFeedPageState?: typeof updateNewFeedPageState;
    updateWebXRState?: typeof updateWebXRState;
    setContentHidden?: any;
    webxrRecorderActivity?: any;
    getArMediaItem?:typeof getArMediaItem;
    feedHintsOnborded?: any;
    setFeedHintsOnborded?: any;
  }

const { isNative } = Capacitor;

enum RecordingStates {
    OFF = "off",
    ON = "on",
    STARTING = "starting",
    ENDING = "ending"
}

const correctionQuaternionZ = new Quaternion().setFromAxisAngle(new Vector3(0,0,1), Math.PI/2);

const _DEBUG = false;
const DEBUG_MINI_VIEWPORT_SIZE = 100;
let statusXR = false;
const screenHeigth = Math.floor(document.body.clientHeight/2)*2;
const screenWidth = Math.floor(document.body.clientWidth/2)*2;

export const WebXRPlugin = ({
                                popupsState, arMediaState,
                                getArMediaItem, updateNewFeedPageState,
                                updateWebXRState, setContentHidden,
                                webxrRecorderActivity, feedHintsOnborded,
                                setFeedHintsOnborded
                            }:Props) => {
    const canvasRef = React.useRef();
    const [initializationResponse, setInitializationResponse] = useState("");
    const [cameraStartedState, setCameraStartedState] = useState("");
    const [cameraPoseState, setCameraPoseState] = useState("");
    const [anchorPoseState, setAnchorPoseState] = useState("");
    const [intrinsicsState, setCameraIntrinsicsState] = useState("");
    const [savedFilePath, setSavedFilePath] = useState("");
    const [hintOne, hintOneShow] = useState(false);
    const [hintTwo, hintTwoShow] = useState(false);
//     const [horizontalOrientation, setHorizontalOrientation] = useState(false);
    const [mediaItem, _setMediaItem] = useState(null);
    const [recordingState, _setRecordingState] = useState(RecordingStates.OFF);
    const playerRef = useRef<Player|null>(null);
    const anchorRef = useRef<Group|null>(null);
    const zoomHandlerRef = useRef<ZoomGestureHandler|null>(null);

    const recordingStateRef = React.useRef(recordingState);
    const setRecordingState = data => {
        recordingStateRef.current = data;
        _setRecordingState(data);
    };

    const mediaItemRef = React.useRef(mediaItem);
    const setMediaItem = data => {
        mediaItemRef.current = data;
        _setMediaItem(data);
    };
    const closeBtnAction = React.useRef(false);


    let renderer: WebGLRenderer, scene: Scene, camera: PerspectiveCamera;
    const debugCamera: {
        userCameraHelper: CameraHelper,
        overview: PerspectiveCamera,
        xz: OrthographicCamera
        xy: OrthographicCamera
        zy: OrthographicCamera
    } = {
        userCameraHelper: null,
        overview: null,
        xz: null,
        xy: null,
        zy: null
    };

    const showContent = () => {
        if(!webxrRecorderActivity){
            setContentHidden();
        }
    };

    function onBackButton(){
        console.log('onBackButton recordingState:', recordingStateRef.current);
        closeBtnAction.current = true;
        finishRecord();
        // exit this popup
        updateWebXRState(false, null);

        showContent();
    }

    useEffect(()=>{
        console.log('recordingState USE EFFECT:', recordingState);
    }, [recordingState]);

    useEffect(() => {
        // console.log('WebXRComponent MOUNTED');
        document.addEventListener("backbutton", onBackButton);

        if (!zoomHandlerRef.current) {
            zoomHandlerRef.current = new ZoomGestureHandler(canvasRef.current, (scale) => {
                if (anchorRef.current) {
                    anchorRef.current.scale.multiplyScalar(scale);
                }
            });
        }

        if (!feedHintsOnborded){
            hintOneShow(true);
        }

        return () => {
            // console.log('WebXRComponent UNMOUNT');
            document.removeEventListener("backbutton", onBackButton);

            if (playerRef.current) {
                console.log('WebXRComponent - dispose player');
                playerRef.current.dispose();
                playerRef.current = null;
            }
            if (zoomHandlerRef.current) {
                console.log('WebXRComponent - dispose zoom handler');
                zoomHandlerRef.current.dispose();
                zoomHandlerRef.current = null;
            }

            console.log('WebXRComponent - stop plugin');
            // @ts-ignore
            Plugins.XRPlugin.stop({});
            window.screen.orientation.unlock();

            // setContentHidden();
            // console.log('WebXRComponent - UNMOUNT END');
        };
    }, []);

    const raf = () => {
        requestAnimationFrame(raf);
        playerRef.current?.handleRender(() => {

        });

        renderer.render(scene, camera);

        if (_DEBUG) {
            const clearColor = new Color();
            renderer.getClearColor(clearColor);
            const clearAlpha = renderer.getClearAlpha();

            debugCamera.userCameraHelper.visible = true;

            renderer.setScissorTest(true);
            renderer.setClearColor(0xa0a0a0, 1);

            renderer.setViewport(10, 10 * 2 + DEBUG_MINI_VIEWPORT_SIZE, DEBUG_MINI_VIEWPORT_SIZE, DEBUG_MINI_VIEWPORT_SIZE);
            renderer.setScissor(10, 10 * 2 + DEBUG_MINI_VIEWPORT_SIZE, DEBUG_MINI_VIEWPORT_SIZE, DEBUG_MINI_VIEWPORT_SIZE);
            renderer.render(scene, debugCamera.overview);

            [debugCamera.xz, debugCamera.xy, debugCamera.zy].forEach((cam, index) => {
                const left = 10 + (DEBUG_MINI_VIEWPORT_SIZE + 10) * index;
                renderer.setViewport(left, 10, DEBUG_MINI_VIEWPORT_SIZE, DEBUG_MINI_VIEWPORT_SIZE);
                renderer.setScissor(left, 10, DEBUG_MINI_VIEWPORT_SIZE, DEBUG_MINI_VIEWPORT_SIZE);
                renderer.render(scene, cam);
            });

            // reset changes
            debugCamera.userCameraHelper.visible = false;
            renderer.setClearColor(clearColor, clearAlpha);
            renderer.setScissorTest(false);
            renderer.setViewport(0, 0, window.innerWidth, window.innerHeight);
        }
    };

    const arMediaFetching = arMediaState.get('fetchingItem');
    const itemId = popupsState.get('itemId');
    useEffect(()=> {
        if (!getArMediaItem) {
            return;
        }
        getArMediaItem(itemId);
    }, [getArMediaItem,itemId]);
    useEffect(()=> {
        if(!arMediaFetching){
            setMediaItem(arMediaState.get('item'));
        }
    }, [arMediaFetching, arMediaState, itemId]);

    const mediaItemId = mediaItem?.id;
    useEffect(() => {
        if (!mediaItemId) {
            console.log('Media item is not here yet', itemId, arMediaState?.get('fetchingItem'));
            return;
        }

        (async function () {
            scene = new Scene();

            if (_DEBUG) {
                debugCamera.xz = new OrthographicCamera(2, -2, 2, -2, 0.001, 100);
                debugCamera.xz.position.y = 10;
                debugCamera.xz.rotateX(-Math.PI / 2);

                debugCamera.xy = new OrthographicCamera(2, -2, 2, -2, 0.001, 100);
                debugCamera.xy.position.z = 10;

                debugCamera.zy = new OrthographicCamera(2, -2, 2, -2, 0.001, 100);
                debugCamera.zy.position.x = 10;
                debugCamera.zy.rotateY(Math.PI / 2);
            }

//             const geometry = new BoxGeometry(.1, .1, .1);
//             const materialX = new MeshBasicMaterial({ color: 0xff0000 });
//             const materialY = new MeshBasicMaterial({ color: 0x00ff00 });
//             const materialZ = new MeshBasicMaterial({ color: 0x0000ff });
//             const materialC = new MeshBasicMaterial({ color: 0xffffff });
            anchorRef.current = new Group();
            const anchor = anchorRef.current;
            anchor.visible = false;
//             anchor.add(new AxesHelper(0.3));
//             const anchorC = new Mesh(geometry, materialC);
//             anchor.add(anchorC);
//             const anchorX = new Mesh(geometry, materialX);
//             anchorX.position.x = 0.3;
//             anchor.add(anchorX);
//             const anchorY = new Mesh(geometry, materialY);
//             anchorY.position.y = 0.3;
//             anchor.add(anchorY);
//             const anchorZ = new Mesh(geometry, materialZ);
//             anchorZ.position.z = 0.3;
//             anchor.add(anchorZ);
//
//             scene.add(new AxesHelper(0.2));

            camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.001, 100);

            if (_DEBUG) {
                debugCamera.overview = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.001, 100);
                debugCamera.overview.position.set(3, 3, 3);
                debugCamera.overview.lookAt(new Vector3());
            }
            scene.background = null;
            renderer = new WebGLRenderer({ alpha: true, canvas:canvasRef.current });
            renderer.setSize(window.innerWidth, window.innerHeight);
            //document.body.appendChild(renderer.domElement);
            renderer.domElement.style.position = "fixed";
            renderer.domElement.style.width = "100vw";
            renderer.domElement.style.height = "100vh";
            renderer.domElement.style.zIndex = "-1";

            renderer.domElement.style.top = "0";
            renderer.domElement.style.left = "0";
            renderer.domElement.style.margin = "0";
            renderer.domElement.style.padding = "0";
            scene.add(camera);

            if (_DEBUG) {
                debugCamera.userCameraHelper = new CameraHelper(camera);
                scene.add(debugCamera.userCameraHelper);
            }

            scene.add(anchor);
            anchor.position.set(0, 0, 0);

            // scene.add(new AxesHelper(2));
            // const gh = new GridHelper(2);
            // scene.add(gh);

            if (!playerRef.current) { // setup player if not exists
                // sr1.url as manifestUrl, sr2.url as previewUrl, sr3.url as dracosisUrl, sr4.url as audioUrl
                playerRef.current = new Player({
                    scene: anchor,
                    renderer,
                    worker: new PlayerWorker(),
                    meshFilePath: mediaItem.dracosisUrl,
                    videoFilePath: mediaItem.audioUrl,
                    manifestFilePath: mediaItem.manifestUrl,
                    onMeshBuffering: (progress) => {
                        console.warn('BUFFERING!!', progress);
                        // setBufferingProgress(Math.round(progress * 100));
                        // setIsBuffering(true);
                    },
                    onFrameShow: () => {
                        // setIsBuffering(false);
                    }
                    // video: document.getElementById("video")
                });
                //const video = playerRef.current.video as HTMLMediaElement;
                //video.muted = true;
            }

            requestAnimationFrame(raf);

            const { XRPlugin } = Plugins;

            await XRPlugin.initialize({}).then(response => {
                setInitializationResponse(response.status);
                setContentHidden();
            }).catch(error => console.log(error.message));

            if(statusXR === false) {
                // @ts-ignore
                XRPlugin.addListener('poseDataReceived', (data: any) => {

                    const {
                        cameraPositionX,
                        cameraPositionY,
                        cameraPositionZ,
                        cameraRotationX,
                        cameraRotationY,
                        cameraRotationZ,
                        cameraRotationW,
                    } = data;

                    // TODO:
                    // Set camera position and rotation
                    // Enable cube and move to position/rotation if placed is true
                    setCameraPoseState(JSON.stringify({
                        cameraPositionX,
                        cameraPositionY,
                        cameraPositionZ,
                        cameraRotationX,
                        cameraRotationY,
                        cameraRotationZ,
                        cameraRotationW
                    }));

                    camera.quaternion
                      .set(cameraRotationX, cameraRotationY, cameraRotationZ, cameraRotationW)
                      .multiply(correctionQuaternionZ);
                    camera.position.set(cameraPositionX, cameraPositionY, cameraPositionZ);

                    camera.updateProjectionMatrix();

                    if (_DEBUG) {// sync cams
                        debugCamera.overview?.lookAt(camera.position);
                        if (debugCamera.xz) {
                            debugCamera.xz.position.x = camera.position.x;
                            debugCamera.xz.position.z = camera.position.z;
                        }
                        if (debugCamera.xy) {
                            debugCamera.xy.position.x = camera.position.x;
                            debugCamera.xy.position.y = camera.position.y;
                        }
                        if (debugCamera.zy) {
                            debugCamera.zy.position.z = camera.position.z;
                            debugCamera.zy.position.y = camera.position.y;
                        }
                    }// sync cams


                    if (data.placed) {
                        const {
                            anchorPositionX,
                            anchorPositionY,
                            anchorPositionZ,
                            anchorRotationX,
                            anchorRotationY,
                            anchorRotationZ,
                            anchorRotationW
                        } = data;

                        setAnchorPoseState(JSON.stringify({
                            anchorPositionX,
                            anchorPositionY,
                            anchorPositionZ,
                            anchorRotationX,
                            anchorRotationY,
                            anchorRotationZ,
                            anchorRotationW
                        }));

                        anchor.quaternion
                          .set(anchorRotationX, anchorRotationY, anchorRotationZ, anchorRotationW);
                        anchor.position.set(anchorPositionX, anchorPositionY, anchorPositionZ);

                        if (!feedHintsOnborded)
                        {
                            setTimeout(()=> {
                                hintTwoShow(true);
                                setFeedHintsOnborded(true);
                            },1000);
                        }

                        if (!anchor.visible) {
                            console.log('SET ANCHOR VISIBLE!');
                            console.log('player = ', playerRef.current);
                            anchor.visible = true;
                        }
                        // TODO: add volumetric isPlaying property
                        // if (playerRef.current) {
                            // console.log('player play!', data);
                            // playerRef.current.mesh.visible = true;
                            // if ((playerRef.current.video as HTMLMediaElement).paused) {
                            //     playerRef.current.play();
                            // }
                        // }
                    }

                });

                // @ts-ignore
                XRPlugin.addListener('cameraIntrinsicsReceived', (data: any) => {

                    setCameraIntrinsicsState(JSON.stringify({
                        fX: data.fX,
                        fY: data.fY,
                        cX: data.cX,
                        cY: data.cy,
                        x: data.x,
                        y: data.y
                    }));

                    // TODO: checkout focal length
                    // camera.setFocalLength(data.fY/10);
                    // camera.setFocalLength(50);

                    // TODO:
                    // Set camera position and rotation
                    // Enable cube and move to position/rotation if placed is true
                });
                statusXR = true;
            }

            try {
                await window.screen.orientation.lock('portrait');
            } catch (e) {
                console.error('failed to lock orientation');
            }
            XRPlugin.start({}).then(() => {
                setCameraStartedState(isNative ? "Camera started on native" : "Camera started on web");
            }).catch(error => console.log(error.message));
        })();
    }, [mediaItemId]);

    let finishRecord = () => {
        console.log('finishRecord recordingState:', recordingState);
        if (recordingStateRef.current === RecordingStates.ON) {
            console.log('finishRecord');
            console.log('mediaItemRef.current.audioId', mediaItemRef.current);
            console.log('closeBtnAction', closeBtnAction);

            // @ts-ignore
            Plugins.XRPlugin.stopRecording({audioId: mediaItemRef.current.audioId}).
              // @ts-ignore
              then(({ result, filePath }) => {
                  console.log("END RECORDING, result IS", result);
                  console.log("filePath IS", filePath);
                  getArMediaItem(null);
                  setSavedFilePath("file://" + filePath);
                  if(!closeBtnAction.current){
                      const videoPath = Capacitor.convertFileSrc(filePath);
                      updateNewFeedPageState(true, videoPath);
                  }
                  setRecordingState(RecordingStates.OFF);
                  updateWebXRState(false, null);

                  // if (playerRef.current) {
                  //     const video = playerRef.current.video as HTMLMediaElement;
                  //     video.muted = true;
                  // }
                  // setContentHidden();
              }).catch(error => alert(error.message));
        }else{
            return console.log('Record state is OFF');
        }

    };

    const startRecord = () => {
        if (!window.confirm("Double click to finish the record.")) {
            return;
        }
        setRecordingState(RecordingStates.STARTING);
        //TODO: check why there are errors
        // @ts-ignore
        Plugins.XRPlugin.startRecording({
            isAudio: true,
            width: screenWidth,
            height: screenHeigth,
            bitRate: 6000000,
            dpi: 100,
            filePath: "/test.mp4"
        }).then(({ status }) => {
            console.log("RECORDING, STATUS IS", status);
            if (playerRef.current) {
                // const video = playerRef.current.video as HTMLMediaElement;
                // video.muted = false;
                console.log('Player.play()!');
                playerRef.current.play();
            }
            setRecordingState(RecordingStates.ON);
        }).catch(error => {
            alert(error.message);
            setRecordingState(RecordingStates.OFF);
        });
    };

    const toggleRecording = () => {
        if (recordingState === RecordingStates.OFF) {
            startRecord();
        }
        else if (recordingState === RecordingStates.ON) {
            finishRecord();
        }
    };

    const handleTap = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (recordingState !== RecordingStates.OFF)
        {
            return;
        }
        const params = {
            x: e.clientX * window.devicePixelRatio,
            y: e.clientY * window.devicePixelRatio
        };

        // @ts-ignore
        Plugins.XRPlugin.handleTap(params);
    };

    const playVideo = () => {
        // @ts-ignore
        Plugins.XRPlugin.playVideo();
    };

    const pauseVideo = () => {
        // @ts-ignore
        Plugins.XRPlugin.pauseVideo();
    };


    const clearAnchors = () => {
        // @ts-ignore
        Plugins.XRPlugin.clearAnchors();
    };

    const stopRecord = () => {
        // @ts-ignore
        Plugins.XRPlugin.stop({});
    };

    // useEffect(() => {
    //     setSecondState("Initialized and effected");
    // }, [initializationResponse]);

    return (<>
        {/* <div className="plugintest">
            <div className="plugintestReadout">
                <p>IR:{initializationResponse}</p>
                <p>CSS:{cameraStartedState}</p>
                <p>IS:{intrinsicsState}</p>
                <p>CPS:{cameraPoseState}</p>
                <p>APS:{anchorPoseState}</p>
            </div>
        </div> */}
         {hintOne ? <HintOne hintOneShow={hintOneShow} /> : ''}
         {hintTwo ? <HintTwo hintTwoShow={hintTwoShow} /> : ''}
         <div className="plugintestControls">
            <div className={recordingState === RecordingStates.OFF ? '' : styles.hideButtons}>
              <section className={styles.waterMarkWrapper}>
                  <section className={styles.waterMark}>
                      <section className={styles.subContainer} />
                    </section>
                </section>
                <button type="button" className={styles.flipCamera} onClick={() => {}}><FlipCameraIosIcon /></button>
{/*                 <button type="button" className={styles.changeOrientation} onClick={() => {setHorizontalOrientation(!horizontalOrientation);}}><FlipCameraIosIcon /></button> */}
                <section className={recordingState === RecordingStates.OFF ? styles.startButtonWrapper : styles.stopButtonWrapper}>
                    {/*{recordingState === RecordingStates.OFF ? "Record" : "Stop Recording"}*/}
                    <button type="button" className={recordingState === RecordingStates.OFF ? styles.startButton : styles.stopButton} onClick={() => toggleRecording()}>
                        <VideocamIcon />
                    </button>
                </section>
              {/* <button type="button" style={{ padding: "1em" }} onClick={() => handleTap()}>Place AR</button> */}
              {/* <button type="button" style={{ padding: "1em" }} onClick={() => clearAnchors()}>clearAnchors</button> */}
              {/* <button type="button" style={{ padding: "1em" }} onClick={() => playVideo()}>playVideo</button> */}
              {/* <button type="button" style={{ padding: "1em" }} onClick={() => pauseVideo()}>pauseVideo</button> */}
              {/*
                <section className={styles.closeButtonWrapper}>
                    <button type="button" className={styles.closeButton} onClick={() => stopRecord()}><ChevronLeftIcon />Slide to cancel</button>
                </section>
              */}
            </div>
          </div>
          <canvas
              ref={canvasRef}
              className={styles.arcCanvas}
              id={'arcCanvas'}
              onClick={(e) => handleTap(e)}
              onDoubleClick={finishRecord}
          />
    </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps) (WebXRPlugin);
