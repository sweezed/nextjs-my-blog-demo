import Head from 'next/head'
import Layout from '../components/layout/layout'
import NoticationProvider from '../store/notification_context.js'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NoticationProvider>
      <Layout>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NoticationProvider>
  ) 
}

export default MyApp
