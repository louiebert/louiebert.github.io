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
          inputColor="hsla(0, 0%, 15%, 1.0)"
          backgroundImageUrl="./images/Mountain1.svg"
        />
        {/*         
        <ParallaxLayer
          className="parallax"
          inputColor="hsla(0, 0%, 20%, 1.0)"
          style={{ transform: `translate3d(0px, ${this.calcYPos(20)}px, 0px)` }}
        >
          <Mountain3 />
        </ParallaxLayer>
        <ParallaxLayer
          className="parallax"
          inputColor="hsla(0, 0%, 28%, 1.0)"
          style={{ transform: `translate3d(0px, ${this.calcYPos(32)}px, 0px)` }}
        >
          <Mountain2 />
        </ParallaxLayer>
        <ParallaxLayer
          className="parallax"
          inputColor="hsla(0, 0%, 40%, 1.0)"
          style={{ transform: `translate3d(0px, ${this.calcYPos(48)}px, 0px)` }}
        >
          <Mountain1 />
        </ParallaxLayer> 
        */}

        {this.props.children}
      </BackgroundComponent>
    )
  }
}

const BackgroundComponent = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 2px;
`

const ParallaxLayer = styled.div<{
  inputColor: string
  backgroundImageUrl: string
}>`
  position: relative;

  & ::after {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    transform: translateZ(-1px) scale(1.5px);
    background-size: 100%;
    z-index: -1;

    background-image: url(${props => props.backgroundImageUrl});
  }

  & > svg {
    width: 100vw;

    polygon {
      fill: ${props => props.inputColor};
    }
  }
`

export default Background
