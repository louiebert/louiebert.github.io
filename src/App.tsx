import React, { Component } from 'react'
import styled, { keyframes, createGlobalStyle } from 'styled-components/macro'
import logo from './logo.svg'
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

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
`

const AppComponent = styled.div`
  text-align: center;
`

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const AppLogo = styled.img`
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 40vmin;
`

const AppLink = styled.a`
  color: #61dafb;
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
