import { SessionProvider } from "next-auth/react"
import '../styles/globals.scss'
import { AppProps } from 'next/app';
import { CategoryProvider } from "../lib/contexts/CategoryContext";

function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <SessionProvider
      session={session}
      refetchInterval={30 * 60}
    >
      <CategoryProvider initialCategories={pageProps.initialCategories}>
        <Component {...pageProps} />
      </CategoryProvider>
    </SessionProvider>
  )
}

export default MyApp
