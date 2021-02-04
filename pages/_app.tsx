import "antd/dist/antd.css";
import App, { AppProps } from 'next/app';
import React from 'react';
import DefaultLayout from "../app/components/layouts/Default/DefaultLayout";
import { LayoutTree } from '@chengdh/next-layout';


const HmbApp: React.FC<AppProps> = ({ Component, pageProps }) => ( 
  <LayoutTree
      Component={ Component }
      pageProps={ pageProps } />
);

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default HmbApp