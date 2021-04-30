/**
 * @author Tanya Vykliuk <tanya.vykliuk@gmail.com>
 */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AppBar, Box,  Button,  Card,  CardMedia,  Tab, Tabs, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


// @ts-ignore
import styles from './ArMedia.module.scss';

import { selectCreatorsState } from '../../reducers/creator/selector';
import { createArMedia, getArMedia } from '../../reducers/arMedia/service';
import { selectAdMediaState } from '../../reducers/arMedia/selector';
import { updateArMediaState } from '../../reducers/popupsState/service';

const mapStateToProps = (state: any): any => {
    return {
      creatorsState: selectCreatorsState(state),
      arMediaState: selectAdMediaState(state),
    };
  };

  const mapDispatchToProps = (dispatch: Dispatch): any => ({
    createArMedia: bindActionCreators(createArMedia, dispatch),
    getArMedia: bindActionCreators(getArMedia, dispatch),
    updateArMediaState: bindActionCreators(updateArMediaState, dispatch),
});
  interface Props{
    projects?:any[];
    view?:any;
    creatorsState?: any;
    arMediaState?: any;
    createArMedia?: typeof createArMedia; 
    getArMedia?:typeof getArMedia; 
    updateArMediaState?:typeof updateArMediaState; 
  }

const ArMedia = ({getArMedia, arMediaState, updateArMediaState}:Props) => {
  const [type, setType] = React.useState('clip');
  useEffect(()=> {getArMedia()}, []);
  const arMediaList = arMediaState.get('fetching') === false && arMediaState?.get('list') ? arMediaState.get('list') : null;

    return <section className={styles.arMediaContainer}>
      <Button variant="text" className={styles.backButton} onClick={()=>updateArMediaState(false)}><ArrowBackIosIcon />Back</Button>
      <section className={styles.switcher}>
        <Button variant={type === 'clip' ? 'contained' : 'text'} color='secondary' className={styles.switchButton+(type === 'clip' ? ' '+styles.active : '')} 
            onClick={()=>setType('clip')}>Clips</Button>
        <Button variant={type === 'background' ? 'contained' : 'text'} color='secondary' className={styles.switchButton+(type === 'background' ? ' '+styles.active : '')} 
            onClick={()=>setType('background')}>Backgrounds</Button>
      </section>
      <section className={styles.flexContainer}>
        {arMediaList?.map((item, itemIndex)=>{
          return item.ar_type === type && 
            <CardMedia 
             key={itemIndex}
            className={styles.previewImage}
            image={item.previewUrl}
            />          
        })}
      </section>
    </section>;
};

export default connect(mapStateToProps, mapDispatchToProps)(ArMedia);