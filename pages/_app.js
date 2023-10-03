
import GlobalStyle from "../src/theme/GlobalStyle";
import App from 'next/app'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
    return(
        <>
       
       <Head>
           {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
           <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-2QZDPX3BLK');
                        `
                    }}
                />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin={true.toString()}/>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
       </Head>
        <GlobalStyle/>
        <Component {...pageProps} />
        </>
    ) 
  }
  MyApp.getInitialProps = async (context) => {
    const ctx = await App.getInitialProps(context)
   
    return { ...ctx, example: 'data' }
  }