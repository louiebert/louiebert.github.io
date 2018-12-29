import React, { Component } from 'react'
import styled, { keyframes, createGlobalStyle } from 'styled-components/macro'
import Background from './Background'

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

class App extends Component {
  render() {
    return (
      <AppComponent>
        <GlobalStyle />
        <Background />
      </AppComponent>
    )
  }
}

export default App
