import { SessionProvider } from "next-auth/react"
import '../styles/globals.scss'
import "swiper/css/bundle";
import { AppProps } from 'next/app';
import { CategoryProvider } from "../lib/contexts/CategoryContext";
import { register } from 'swiper/element/bundle';

register();

function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <CategoryProvider initialCategories={pageProps.initialCategories}>
        <Component {...pageProps} />
      </CategoryProvider>
    </SessionProvider>
  )
}

export default MyApp
