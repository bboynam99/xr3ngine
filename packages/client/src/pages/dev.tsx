import DebugScene from '../components/Scene/debug';
import Loading from '../components/Scene/loading';
import Layout from '../components/Layout/Layout';
import React from 'react';
import { useTranslation } from 'react-i18next';
// Hack to get around a bug in Vite/rollup:  https://github.com/vitejs/vite/issues/2139
import nossr from "react-no-ssr";
const NoSSR = nossr.default ? nossr.default : nossr;

const LocationPage = () => {
  const { t } = useTranslation();
  return (
    <Layout pageTitle={t('dev.pageTitle')}>
      <NoSSR onSSR={<Loading />}>
      <DebugScene locationName="test"/>
      </NoSSR>
    </Layout>
  );
};

export default LocationPage;