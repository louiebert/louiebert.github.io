import React, { Component } from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as Mountain1 } from './images/Mountain1.svg'
import { ReactComponent as Mountain2 } from './images/Mountain2.svg'
import { ReactComponent as Mountain3 } from './images/Mountain3.svg'
import { ReactComponent as Mountain4 } from './images/Mountain4.svg'

type State = {
  yOffset: number
}

class Background extends Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      yOffset: 0
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.backgroundScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.backgroundScroll)
  }

  backgroundScroll = () => {
    this.setState({ yOffset: window.pageYOffset })
  }

  calcYPos = (speed: number) => {
    return -((this.state.yOffset * speed) / 100)
  }

  render() {
    return (
      <BackgroundComponent>
        <ParallaxLayer
          className="parallax"
          inputColor="hsla(0, 0%, 15%, 1.0)"
          top={150}
          style={{ transform: `translate3d(0px, ${this.calcYPos(15)}px, 0px)` }}
        >
          <Mountain4 />
        </ParallaxLayer>
        <ParallaxLayer
          className="parallax"
          inputColor="hsla(0, 0%, 20%, 1.0)"
          top={150}
          style={{ transform: `translate3d(0px, ${this.calcYPos(20)}px, 0px)` }}
        >
          <Mountain3 />
        </ParallaxLayer>
        <ParallaxLayer
          className="parallax"
          inputColor="hsla(0, 0%, 28%, 1.0)"
          top={220}
          style={{ transform: `translate3d(0px, ${this.calcYPos(32)}px, 0px)` }}
        >
          <Mountain2 />
        </ParallaxLayer>
        <ParallaxLayer
          className="parallax"
          inputColor="hsla(0, 0%, 40%, 1.0)"
          top={500}
          style={{ transform: `translate3d(0px, ${this.calcYPos(48)}px, 0px)` }}
        >
          <Mountain1 />
        </ParallaxLayer>
      </BackgroundComponent>
    )
  }
}

const BackgroundComponent = styled.div`
  position: absolute;
`

const ParallaxLayer = styled.div<{
  inputColor: string
  top: number
}>`
  position: fixed;
  top: ${props => props.top}px;

  & > svg {
    width: 100vw;

    polygon {
      fill: ${props => props.inputColor};
    }
  }
`

export default Background
