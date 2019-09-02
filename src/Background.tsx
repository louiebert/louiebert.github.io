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
        <ParallaxRect
          inputColor="hsla(0, 0%, 85%, 1.0)"
          translateZ={7}
          marginTop={-100}
          height={70}
        />
        <ParallaxLayer
          inputColor="hsla(0, 0%, 40%, 1.0)"
          translateZ={9}
          marginTop={6}
        >
          <Mountain1 />
        </ParallaxLayer>
        <ParallaxLayer
          inputColor="hsla(0, 0%, 28%, 1.0)"
          translateZ={7}
          marginTop={26}
          smallMarginTop={23}
        >
          <Mountain2 />
        </ParallaxLayer>
        <ParallaxLayer
          inputColor="hsla(0, 0%, 100%, 1.0)"
          translateZ={6}
          marginTop={28}
          smallMarginTop={21}
          height={25}
        >
          <Signature />
        </ParallaxLayer>
        <ParallaxLayer
          inputColor="hsla(0, 0%, 20%, 1.0)"
          translateZ={4}
          marginTop={43}
        >
          <Mountain3 />
        </ParallaxLayer>
        <ParallaxLayer
          inputColor="hsla(0, 0%, 15%, 1.0)"
          translateZ={2}
          marginTop={55}
          height={150}
          smallMarginTop={44}
        >
          <Mountain4 />
        </ParallaxLayer>

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
  smallMarginTop?: number
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

    @media (max-aspect-ratio: 13/10) {
      margin-top: ${props =>
        props.smallMarginTop ? props.smallMarginTop : props.marginTop}vmin;
    }

    polygon,
    path {
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

  height: ${props => props.height}vmin;
  background-color: ${props => props.inputColor};

  transform: translateZ(-${props => props.translateZ}px)
    scale(${props => 1 + props.translateZ / PERSPECTIVE});
  z-index: -1;
`

const PageContent = styled.div`
  height: 10000px;
`

export default Background
