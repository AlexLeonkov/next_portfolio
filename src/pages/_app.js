import "../styles/globals.css";
import "antd/dist/antd.css";
import Head from "next/head";






function MyApp({ Component, pageProps }) {
 

  return (
    <>
    <Head>

    <style>
  @import url('https://fonts.googleapis.com/css2?family=Baskervville&display=swap');
</style>
<Component {...pageProps}  />

    </Head>
    </>
    );
}

export default MyApp;
