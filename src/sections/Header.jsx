
import styled from 'styled-components';
import CoverVideo from '../components/CoverVideo';

export default function Header() {
  return (
    <Section id="header">
        <CoverVideo/>
    </Section>
  )
}
 
const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`