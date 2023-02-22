import '../styles/globals.scss'
import { Fira_Sans } from '@next/font/google';


const fira = Fira_Sans({
  weight: '700',
  subsets: ['cyrillic'],
})

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <main className={fira.className}>
        {getLayout(<Component {...pageProps} />)}
      </main>
    </>
  )
}
