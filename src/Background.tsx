import React, { Component } from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as Mountain1 } from './images/Mountain1.svg'
import { ReactComponent as Mountain2 } from './images/Mountain2.svg'
import { ReactComponent as Mountain3 } from './images/Mountain3.svg'
import { ReactComponent as Mountain4 } from './images/Mountain4.svg'
class Background extends Component {
  render() {
    return (
      <BackgroundComponent>
        <ParallaxLayer
          inputColor="hsla(0, 0%, 15%, 1.0)"
          translateZ={10}
          marginTop={10}
        >
          <Mountain1 />
        </ParallaxLayer>
        <ParallaxLayer
          inputColor="hsla(0, 0%, 20%, 1.0)"
          translateZ={7}
          marginTop={25}
        >
          <Mountain2 />
        </ParallaxLayer>
        <ParallaxLayer
          inputColor="hsla(0, 0%, 28%, 1.0)"
          translateZ={3}
          marginTop={35}
        >
          <Mountain3 />
        </ParallaxLayer>
        <ParallaxLayer
          inputColor="hsla(0, 0%, 40%, 1.0)"
          translateZ={1}
          marginTop={60}
        >
          <Mountain4 />
        </ParallaxLayer>

        <PageContent />
        {this.props.children}
      </BackgroundComponent>
    )
  }
}

const perspective = 1

const BackgroundComponent = styled.div`
  height: 100vmin;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: ${perspective}px;
`

const ParallaxLayer = styled.div<{
  inputColor: string
  translateZ: number
  marginTop?: number
}>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: none;
  justify-content: center;

  transform: translateZ(-${props => props.translateZ}px)
    scale(${props => 1 + props.translateZ / perspective});
  z-index: -1;

  & > svg {
    margin-top: ${props => props.marginTop}vmin;
    height: 50vw;
    width: 100vw;
    polygon {
      fill: ${props => props.inputColor};
    }
  }
`

const PageContent = styled.div`
  height: 6000px;
`

export default Background
