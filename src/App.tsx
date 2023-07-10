import { ThemeProvider } from 'styled-components'
import { GlobalStyles, defaultTheme } from './styles'
import { Transactions } from './pages'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Transactions />
    </ThemeProvider>
  )
}

export default App
