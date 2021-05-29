
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import AppHeader from "@xrengine/client-core/src/socialmedia/components/Header";
import FeedMenu from "@xrengine/client-core/src/socialmedia/components/FeedMenu";
import AppFooter from "@xrengine/client-core/src/socialmedia/components/Footer";
import { selectCreatorsState } from "@xrengine/client-core/src/socialmedia/reducers/creator/selector";
// import {Stories} from '@xrengine/client-core/src/socialmedia/components/Stories';
import { selectAuthState } from "@xrengine/client-core/src/user/reducers/auth/selector";
import { selectWebXrNativeState } from "@xrengine/client-core/src/socialmedia/reducers/webxr_native/selector";

import { User } from "@xrengine/common/src/interfaces/User";
import { doLoginAuto } from "@xrengine/client-core/src/user/reducers/auth/service";
import { createCreator } from "@xrengine/client-core/src/socialmedia/reducers/creator/service";
import { getWebXrNative, changeWebXrNative } from "@xrengine/client-core/src/socialmedia/reducers/webxr_native/service";

import CreatorPopup from "@xrengine/client-core/src/socialmedia/components/popups/CreatorPopup";
import FeedPopup from "@xrengine/client-core/src/socialmedia/components/popups/FeedPopup";
import CreatorFormPopup from "@xrengine/client-core/src/socialmedia/components/popups/CreatorFormPopup";
import ArMediaPopup from "@xrengine/client-core/src/socialmedia/components/popups/ArMediaPopup";
import FeedFormPopup from "@xrengine/client-core/src/socialmedia/components/popups/FeedFormPopup";
import SharedFormPopup from "@xrengine/client-core/src/socialmedia/components/popups/SharedFormPopup";
import Onboard from "@xrengine/client-core/src/socialmedia/components/OnBoard";
import WebXRStart from "@xrengine/client-core/src/socialmedia/components/popups/WebXR";
import FeedOnboarding from "@xrengine/client-core/src/socialmedia/components/FeedOnboarding";
// @ts-ignore
import styles from './index.module.scss';

import image from '/static/images/image.jpg';
import mockupIPhone from '/static/images/mockupIPhone.jpg';
import Splash from '@xrengine/client-core/src/socialmedia/components/Splash';

const mapStateToProps = (state: any): any => {
  return {
    auth: selectAuthState(state),
    creatorsState: selectCreatorsState(state),
    webxrnativeState: selectWebXrNativeState(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch): any => ({
  doLoginAuto: bindActionCreators(doLoginAuto, dispatch),
  createCreator: bindActionCreators(createCreator, dispatch),
  getWebXrNative: bindActionCreators(getWebXrNative, dispatch),
  changeWebXrNative: bindActionCreators(changeWebXrNative, dispatch),
});

const  Home = ({ createCreator,  doLoginAuto, auth, creatorsState, webxrnativeState, changeWebXrNative, getWebXrNative }) => {
  /*hided for now*/

  useEffect(()=>{
    if(auth){
      // const user = auth.get('authUser')?.identityProvider.type === 'guest' ? auth.get('user') as User : auth.get('authUser')?.identityProvider as User;
      //   const userId = user ? user.id : null;
      //   if(userId){}
          createCreator();
    }
  },[auth]);

  useEffect(() => {
    doLoginAuto(true);
    getWebXrNative();
  }, []);

  const [onborded, setOnborded] = useState(true);
  const [feedOnborded, setFeedOnborded] = useState(true);

  const currentCreator = creatorsState.get('currentCreator');
  const currentTime = new Date(Date.now()).toISOString();

  useEffect(() => {
    if( !!currentCreator && !!currentCreator.createdAt ) {
       currentTime.slice(0, -5) === currentCreator.createdAt.slice(0, -5) && setOnborded(false);
    }
  }, [currentCreator]);

  const webxrRecorderActivity = webxrnativeState.get('webxrnative');

  const changeOnboarding = () => {
    setOnborded(true);
    setFeedOnborded(false);
  };

  if(!currentCreator || currentCreator === null) return <Splash />



  if(!onborded) return <Onboard setOnborded={changeOnboarding} image={image} mockupIPhone={mockupIPhone} />;



  return (<>
    {!feedOnborded && <FeedOnboarding setFeedOnborded={setFeedOnborded} />}
    <div className={webxrRecorderActivity ? styles.hideContent+' '+styles.viewport : styles.viewport}>
        <AppHeader logo="/assets/logoBlack.png" />
        {/* <Stories stories={stories} /> */}
        <FeedMenu />
        <AppFooter />
        <CreatorPopup />
        <FeedPopup />
        <CreatorFormPopup />
        <ArMediaPopup />
        <WebXRStart setContentHidden={changeWebXrNative} />
        <FeedFormPopup />
        <SharedFormPopup />
    </div>
  </>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
