import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Prompt } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
   
  <SessionProvider session={session}>
    <main className={prompt.className}>
    <Component {...pageProps} />
    </main>
  </SessionProvider>
  ) 
}
