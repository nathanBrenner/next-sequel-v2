import { GraphqlProvider } from '../graphql/client'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <GraphqlProvider>
      <Component {...pageProps} />
    </GraphqlProvider>
  )
}

export default MyApp
