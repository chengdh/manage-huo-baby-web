import React from 'react'
import "../styles/antd.less"
import MyLayout from '../layouts/MyLayout'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <h2>this is a test</h2>
      <MyLayout>
        <Component {...pageProps} />
      </MyLayout>
    </div>)
}

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

export default MyApp