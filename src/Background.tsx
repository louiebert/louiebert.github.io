import React, { Component } from 'react'
import styled from 'styled-components/macro'

const SPEEDSTART = 5
const SPEEDDIFF = 20

const BackgroundComponent = styled.div`
  position: relative;
  z-index: 10;
  height: 200vh;
`

const ParallaxLayer = styled.div<{
  inputColor: string
  top: number
}>`
  position: fixed;
  background-color: ${props => props.inputColor};
  width: 100%;
  padding: 100vh 0;
  top: ${props => props.top}px;
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
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <ParallaxLayer
              className="parallax"
              data-speed={`${SPEEDSTART + index * SPEEDDIFF}`}
              inputColor="hsla(0, 0%, 0%, 0.3)"
              top={100 + 200 * index}
            />
          ))}
      </BackgroundComponent>
    )
  }
}

export default Background
