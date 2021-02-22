import { LayoutTree } from '@chengdh/next-layout';
import "antd/dist/antd.css";
import { AppProps } from 'next/app';
import { useRouter } from "next/dist/client/router";
import React from 'react';
import { AuthConfig } from "react-use-auth";
import { appId } from "../app/constants/constants";
import Authing from "../app/providers/Authing";
const HmbApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  const router = useRouter();
  return (
    <AuthConfig
      authProvider={Authing as any}
      navigate={url => router.push(url)}
      params={{ appId }}
    >
      <LayoutTree
        Component={Component}
        pageProps={pageProps} />
    </AuthConfig>
  )
};

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