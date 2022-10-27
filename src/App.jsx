import { useRef } from 'react'
import { ThemeProvider } from 'styled-components'
import { dark } from './styles/Themes'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { AnimatePresence } from 'framer-motion'

import ScrollTriggerProxy from './components/ScrollTriggerProxy.js'
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Header from './sections/Header';
import Office from './sections/Office';
import Team from './sections/Team';

import './styles/globals.css'
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function Home() {
  const containerRef = useRef(null)
  
  return (
    <>
      <ThemeProvider theme={dark}>
      <Navbar/>
        <LocomotiveScrollProvider
          options={
            {
              smooth: true,
              getDirection: true,
            }
          }
          watch={
            []
          }
          containerRef={containerRef}
          >
          <ScrollTriggerProxy/>
          <AnimatePresence>
            <Main className="App" data-scroll-container ref={containerRef}>
              <Header/>
              <Sentinel id="sentinel">
                <Office/>
                <Team/>
                {/* ESCRITÓRIO */}
                {/* EQUIPE */}
                {/* PUBLICAÇõES */}
                {/* CONTATO */}
                {/* FOOTER */}
              </Sentinel>
            </Main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  )
}

const Main = styled.main`
  background: ${props => props.theme.body};
`
const Sentinel = styled.div``