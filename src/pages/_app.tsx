import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../styles/globalStyle'
import { theme } from '../styles/theme'

import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
