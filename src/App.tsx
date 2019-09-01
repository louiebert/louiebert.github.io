import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components/macro'
import Background from './Background'

class App extends Component {
  render() {
    return (
      <Background>
        <GlobalStyle />
        {/* actual app code will go here */}
      </Background>
    )
  }
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default App
