import React, { Component } from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as Mountain1 } from './images/Mountain1.svg'
import { ReactComponent as Mountain2 } from './images/Mountain2.svg'
import { ReactComponent as Mountain3 } from './images/Mountain3.svg'
import { ReactComponent as Mountain4 } from './images/Mountain4.svg'

const BackgroundComponent = styled.div`
  position: absolute;
`

const ParallaxLayer = styled.div<{
  inputColor: string
  top: number
}>`
  position: fixed;
  width: 100%;
  top: ${props => props.top}px;

  & > svg {
    width: 100vw;
    height: auto;

    polygon {
      fill: ${props => props.inputColor};
    }
  }
`

class Background extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.backgroundScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.backgroundScroll)
  }

  backgroundScroll = () => {
    var top = window.pageYOffset

    var layers = document.getElementsByClassName('parallax')
    var layer: Element, speed: string | null, yPos: number
    for (var i = 0; i < layers.length; i++) {
      layer = layers[i]
      speed = layer.getAttribute('data-speed')
      yPos = -((top * parseInt(speed || '0')) / 100)
      layer.setAttribute(
        'style',
        'transform: translate3d(0px, ' + yPos + 'px, 0px)'
      )
    }
  }

  render() {
    return (
      <BackgroundComponent>
        <ParallaxLayer
          className="parallax"
          data-speed={15}
          inputColor="hsla(0, 0%, 15%, 1.0)"
          top={150}
        >
          <Mountain4 />
        </ParallaxLayer>
        <ParallaxLayer
          className="parallax"
          data-speed={20}
          inputColor="hsla(0, 0%, 20%, 1.0)"
          top={150}
        >
          <Mountain3 />
        </ParallaxLayer>
        <ParallaxLayer
          className="parallax"
          data-speed={32}
          inputColor="hsla(0, 0%, 28%, 1.0)"
          top={220}
        >
          <Mountain2 />
        </ParallaxLayer>
        <ParallaxLayer
          className="parallax"
          data-speed={48}
          inputColor="hsla(0, 0%, 40%, 1.0)"
          top={500}
        >
          <Mountain1 />
        </ParallaxLayer>
      </BackgroundComponent>
    )
  }
}

export default Background
