import Head from 'next/head'

import Header from './header'
import Footer from './footer'

export default function Layout ({ children }) {
  return (
    <div>

      <Head>
        <title>Future Web Tools</title>
        <meta name='description' content='Nextjs + Web3, ERC20 and Smart Contract starter template and more for EVM developers.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />

        <div className='app-body-container'>
          <div className='app-body-content'>
            {children}
          </div>
        </div>

        <Footer />
      </main>

      <style jsx>{`
        .app-body-container {
          margin: 3rem 0;
          padding: 0rem;
          width: 100%;

          display: flex;
          justify-content: center;
          align-items: center;
        }
        .app-body-content {
          max-width: 700px;
          width: 80%;
        }
        @media only screen and (min-width: 600px) {
          .app-body-container {
            padding: 2rem;
          }
        }
      `}</style>

    </div>
  )
}
