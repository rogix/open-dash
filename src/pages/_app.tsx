import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { SessionProvider } from 'next-auth/react'
import { GlobalStyle } from '../styles/globalStyle'
import { theme } from '../styles/theme'
import { Analytics } from '@vercel/analytics/react';

import { client } from 'src/apollo/client'
import type { AppProps } from 'next/app'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
            <Analytics />
          </ApolloProvider>
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}

export default App
