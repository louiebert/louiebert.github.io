import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components/macro'
import Background from './Background'

class App extends Component {
  render() {
    return (
      <AppComponent>
        <GlobalStyle />
        <Background>{/* actual app code will go here */}</Background>
      </AppComponent>
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

const AppComponent = styled.div`
  position: relative;
  text-align: center;
  /* TODO: remove */
  height: 200vh;
`

export default App
