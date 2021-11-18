import React from 'react'
import Header from './Header'
import { ThemeProvider } from '@material-ui/styles';
import theme from './Theme'
import Games from './components/Games/Games';

const App = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Games />
      </ThemeProvider>
    </>
  )
}

export default App
