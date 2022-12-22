import { SessionProvider } from "next-auth/react"
import '../styles/globals.scss'
import { AppProps } from 'next/app';

function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
