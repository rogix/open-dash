import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'

import { GlobalStyle } from '../styles/globalStyle'
import { theme } from '../styles/theme'

import { client } from 'src/apollo/client'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  )
}

export default App
