
import styled from 'styled-components';

import imgOffice1 from '../assets/imgoffice1.webp'
import imgOffice2 from '../assets/imgoffice2.webp'
import imgOffice3 from '../assets/imgoffice3.webp'

export default function Office() {
  return (
    <Section id="office">
        <Title data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal">
            Escritório 
        </Title>
        <Display id="display">
        <Left>
            Lorem ipsum dolor sit amet consectetur.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum pharetra nunc, in tincidunt ipsum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tortor velit.
            <br/>
            <br/>

            Lorem ipsum dolor sit amet consectetur.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum pharetra nunc, in tincidunt ipsum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tortor velit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tortor velit.
            <br/>
            <br/>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum pharetra nunc, in tincidunt ipsum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tortor velit.
        </Left>
        <Rigth>
            <img
                src={imgOffice1}
                alt="foto escritório"
                className='big-img'
            />
            <img
                data-scroll
                data-scroll-speed="3"
                src={imgOffice2}
                alt="foto escritório fachada"
                className="small-img-1"
            />
            <img
                data-scroll
                data-scroll-speed="-2"
                src={imgOffice3}
                alt="foto escritório fachada"
                className="small-img-2"
            />
        </Rigth>
        </Display>
    </Section>
  )
}

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  margin: 0px auto;
  padding-bottom: 200px;
`

const Display = styled.section`
    width: 100%;
    display: flex ;
    align-items: center;
    padding: 0 60px 0 60px;
    @media screen and (max-width: 1355px) {
        display: inline-block;
    }
`

const Title = styled.h1`
    font-size: ${props => props.theme.fontBig};
    color: ${props => props.theme.textWhite};
    font-family: 'Roboto';
    font-weight: 500;
    position: absolute;
    left: 4%;
    z-index: 5;
    top: -200px;
    @media screen and (max-width: 1355px) {
        left: 10%;
    }
    @media screen and (max-width: 832px) {
        font-size: ${props => props.theme.maxHeight}; 
        left: 20%;  
        top: 0px;
    }
`

const Left = styled.div`
    width: 70%;
    font-size: ${props => props.theme.fontlg};
    color: ${props => props.theme.textWhite};
    font-weight: 300;
    margin-right: 200px;
    @media screen and (max-width: 1355px) {
        width: 100%;
        text-align: center;
        margin: 200px auto 100px;
    }
`

const Rigth = styled.div`
    width: 40%;
    position: relative;
    img {
        width: 100%;
        height: auto;
        border-radius: 0 0 5px 5px; 
        box-shadow:
           0 0 10px ${props => props.theme.textWhite},
           inset 0 0 10px ${props => props.theme.textWhite},
           0 0 2px ${props => props.theme.textWhite},
           inset 0 0 10px ${props => props.theme.textWhite},
           0 0 10px ${props => props.theme.textWhite},
           inset 0 0 10px ${props => props.theme.textWhite};
    }
    .big-img {
        width: 550px;
        @media screen and (max-width: 1355px) {
            margin: 0 0 20px;
        }
        @media screen and (max-width: 832px) {
            width: 290px;
        }
    }
    .small-img-1 {
        width: 250px;
        position: absolute;
        right: 75%;
        bottom: 40%;
        @media screen and (max-width: 832px) {
            width: 190px;
        }
    }
    .small-img-2 {
        width: 350px;
        position: absolute;
        left: 40%;
        bottom: 40%;
        @media screen and (max-width: 1355px) {
            left: 60%;
        }
        @media screen and (max-width: 832px) {
            width: 190px;
            left: 80%;
        }
    }
    @media screen and (max-width: 1355px) {
        margin: auto;
        padding: 0px;
    }
`