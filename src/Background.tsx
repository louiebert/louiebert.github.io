import React, { Component } from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as Mountain1 } from './images/Mountain1.svg'
import { ReactComponent as Mountain2 } from './images/Mountain2.svg'
import { ReactComponent as Mountain3 } from './images/Mountain3.svg'
import { ReactComponent as Mountain4 } from './images/Mountain4.svg'
import { ReactComponent as Signature } from './images/Signature.svg'
class Background extends Component {
  render() {
    return (
      <BackgroundComponent>
        <ParallaxLayer
          inputColor="hsla(0, 0%, 40%, 1.0)"
          translateZ={10}
          marginTop={10}
        >
          <Mountain1 />
        </ParallaxLayer>
        <ParallaxLayer
          inputColor="hsla(0, 0%, 28%, 1.0)"
          translateZ={7}
          marginTop={25}
        >
          <Mountain2 />
        </ParallaxLayer>
        <ParallaxLayer
          inputColor="hsla(0, 0%, 20%, 1.0)"
          translateZ={5}
          marginTop={32}
          height={25}
        >
          <Signature />
        </ParallaxLayer>
        <ParallaxLayer
          inputColor="hsla(0, 0%, 20%, 1.0)"
          translateZ={4}
          marginTop={42}
        >
          <Mountain3 />
        </ParallaxLayer>
        <ParallaxLayer
          inputColor="hsla(0, 0%, 15%, 1.0)"
          translateZ={2}
          marginTop={62}
        >
          <Mountain4 />
        </ParallaxLayer>
        <ParallaxRect
          inputColor="hsla(0, 0%, 15%, 1.0)"
          translateZ={2}
          marginTop={452}
          height={400}
        />

        <PageContent />
        {this.props.children}
      </BackgroundComponent>
    )
  }
}

const PERSPECTIVE = 1

const BackgroundComponent = styled.div`
  height: 100vmin;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: ${PERSPECTIVE}px;
`

const ParallaxLayer = styled.div<{
  inputColor: string
  translateZ: number
  marginTop: number
  height?: number
}>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  transform: translateZ(-${props => props.translateZ}px)
    scale(${props => 1 + props.translateZ / PERSPECTIVE});
  z-index: -1;

  & > svg {
    margin-top: ${props => props.marginTop}vmin;
    height: ${props => (props.height ? props.height : 50)}vw;
    width: 100vw;
    polygon {
      fill: ${props => props.inputColor};
    }
  }
`
const ParallaxRect = styled.div<{
  inputColor: string
  translateZ: number
  marginTop: number
  height: number
}>`
  position: absolute;
  top: ${props => props.marginTop}vmin;
  right: 0;
  left: 0;

  height: 100%;
  background-color: ${props => props.inputColor};

  transform: translateZ(-${props => props.translateZ}px)
    scale(${props => 1 + props.translateZ / PERSPECTIVE});
  z-index: -1;
`

const PageContent = styled.div`
  height: 6000px;
`

export default Background
