import Layout from '../components/layout/layout'
import NoticationProvider from '../store/notification_context.js'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NoticationProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NoticationProvider>
  ) 
}

export default MyApp
