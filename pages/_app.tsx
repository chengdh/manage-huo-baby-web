import { LayoutTree } from '@chengdh/next-layout';
import "antd/dist/antd.css";
import { AppProps } from 'next/app';
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from 'react';
import { AuthConfig } from "react-use-auth";
// import { Authing } from "../app/providers/Authing";
import { appId } from "../app/constants/constants";
// import dynamic from 'next/dynamic';
// import('../app/providers/Authing').then(mod => {
//   Authing = mod.Authing;
//   console.log(Authing);
// })

// const Authing = dynamic(() => import('../app/providers/Authing').then(mod => mod.Authing),
//   { ssr: false }
// );
const HmbApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  const [authReady, setAuthReady] = useState(null);
  useEffect(() => {
    // You need to restrict it at some point
    // This is just dummy code and should be replaced by actual
    if (!authReady) {
      importAuthProvider();
    }
  }, []);
  const importAuthProvider = async () => {
    const auth = (await import('../app/providers/Authing'));
    console.log(auth.default);
    setAuthReady(auth.default);
  }

  const router = useRouter();
  if (authReady)
    return (
      <AuthConfig
        authProvider={authReady}
        navigate={url => router.push(url)}
        params={{
          appId: appId
        }}
      >
        <LayoutTree
          Component={Component}
          pageProps={pageProps} />

      </AuthConfig>
    )
  else
    return (<>loading</>)

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