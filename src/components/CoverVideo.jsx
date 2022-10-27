import { motion } from 'framer-motion'

import styled from 'styled-components';
import logo from '../assets/logo.svg'
import video from '../assets/video4.mp4'

export default function CoverVideo() {
  return (
    <VideoContainer>
        <Darkoverlay/>
       <Title variants={container} initial="hidden" animate="show">
          <img
            data-scroll data-scroll-delay='0.13' 
            data-scroll-speed='4'
            src={logo}
            width="600px"
            height="600px"
            id="logo"
            alt="logo"
          />
        </Title>
        <Video 
          autoPlay 
          muted 
          loop 
          src={video}
        />
    </VideoContainer>
  )
}

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
`

const Video = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`

const Darkoverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${props => props.theme.bodyRgba};
`

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 925px) {
    > img {
      padding: 50px;
    }
  }
`

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition : {
      duration: 2,
      ease: 'easeInOut'
    }
  }
}