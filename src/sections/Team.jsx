import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiFillTrophy } from 'react-icons/ai' 
import { ImHammer2 } from 'react-icons/im'
import { RiArticleFill } from 'react-icons/ri'  
import team1 from '../assets/team1.webp'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Team() {
    const [swiper, setSwiper] = useState(null);
 
    const ref = useRef(null);
   
    const goNext = () => {
      if (ref.current !== null && ref.current.swiper !== null) {
        swiper.slideNext();
      }
    };
   
    const goPrev = () => {
      if (ref.current !== null && ref.current.swiper !== null) {
        swiper.slidePrev();
      }
    };
    
  return (
    <Section id="team">
        <Title data-scroll data-scroll-speed="-1">
            Equipe
        </Title>
        <Display>
            <Left>
                <p>
                    The brand new collection is currently being developed in USA. We create our products using best quality material, including the use of some of the pure fabrics to make our products. All products are made using the best materials, from the finest cotton to the finest fabrics.
                    <br/>
                    <br/>
                    We have lots of different clothing options like shoes, jackets and dresses. Not only clothes but we also provide unique Jewellery as well. It is great for us to carry our new clothes all around the country and look different.
                </p>
            </Left>
            <Right>
                <Swiper       
                    modules={[Navigation, A11y]}
                    slidesPerView={1}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>  
                        <Card>
                            <Additional>
                                <UserCard>
                                    <Avatar>
                                        <img src={team1} />
                                    </Avatar>
                                </UserCard>
                                <UserCardMoreInfo>
                                    <h1>Felipe Souza</h1>
                                        <Coords>
                                            <span>Group Name</span>
                                            <span>Joined January 2019</span>
                                        </Coords>
                                        <Coords>
                                            <span>Position/Role</span>
                                            <span>City, Country</span>
                                        </Coords>
                                        <Stats>
                                            <div>
                                                <StatsTitle>Prêmios</StatsTitle>
                                                <AiFillTrophy/>
                                                <Value>2</Value>
                                            </div>
                                            <div>
                                                <StatsTitle>Casos</StatsTitle>
                                                <ImHammer2/>
                                                <Value>27</Value>
                                            </div>
                                            <div>
                                                <StatsTitle>Artigos</StatsTitle>
                                                <RiArticleFill/> 
                                                <Value>123</Value>
                                            </div>
                                        </Stats>
                                </UserCardMoreInfo>
                            </Additional>
                            <General>
                                <h1>Felipe Souza</h1>
                                <p>Pós-graduando em Ciências Criminais pela Universidade de São Paulo (USP). Graduado em Ciências Jurídicas e Sociais pela Universidade Católica de Santos (UNISANTOS). Secretário da Comissão de Direito Penal da OAB, Subseção de Santos/SP, durante triênio de 2019/2021. Realizou estágios em escritórios de Advocacia especializados na seara Criminal, como Eduardo Elias & Advogados Associados, Feller e Pacífico Advogados e Ponzetto Advogados Associados. Realizou estágios em órgãos públicos, como o Núcleo Especial Criminal (NECRIM) da Polícia Civil de São Paulo, na 3ª Vara da Justiça Federal da Subseção Judiciária de Santos e na 1ª Vara Criminal da Comarca de Praia Grande/SP. Durante a graduação, exerceu atividades extracurriculares, consagrando-se bicampeão da liga de Tribunal do Júri simulado, promovido pelo tradicional Centro Acadêmico Alexandre de Gusmão, da Faculdade de Direito da Universidade Católica de Santos, assim como Vice-campeão da Batalha Universitária de Direito Penal e Processo Penal promovida pela Associação Nacional da Advocacia Criminal (ANACRIM-SP).</p>
                            </General>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                </Swiper>
            </Right>
        </Display>

    </Section>
  )
}
 
const Section = styled.section`
    min-height: 100vh;
    height: auto;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
`

const Display = styled.section`
    width: 100%;
    display: flex ;
    align-items: center;
    @media screen and (max-width: 1355px) {
        display: inline-block;
    }
`

const Title = styled.h1`
    font-size: ${props => props.theme.fontxxxl};
    font-family: 'Roboto';
    font-weight: 500;
    color: ${props => props.theme.body};
    text-shadow: 1px 1px 1px ${props => props.theme.body};
    position: absolute;
    left: 90px;
    top: 5rem;
    z-index: 11;
`

const Left = styled.h1`
    width: 50%;
    background-color: ${props => props.theme.textWhite};
    color: ${props => props.theme.body};
    min-height: 100vh;
    z-index: 5;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        font-size: ${props => props.theme.fontmd};
        font-weight: 300;
        width: 80%;
        margin: 2px auto;
    }
    @media screen and (max-width: 1355px) {
        width: 100%;
        height: auto;
    }
`

const Right = styled.div`
    min-height: 100vh;
    background-color: ${props => props.theme.grey};
    width: 50%;
    display: flex;
    align-items: center;
    @media screen and (max-width: 1355px) {
        width: 100%;
    }
`

const Additional = styled.div `
  position: absolute;
  width: 250px;
  height: 100%;
  background: linear-gradient(#dE685E, #EE786E);
  transition: width 0.4s;
  overflow: hidden;
  z-index: 2;
`

const Card = styled.div `
    width: 750px;
    height: 450px;
    background-color: #fff;
    background: linear-gradient(#f8f8f8, #fff);
    box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    margin: 1.5rem auto;
    
    h1 {
        text-align: center;
    }
    &:hover ${Additional}{
        width: 100%;
        border-radius: 0 5px 5px 0;
    }
`

const UserCard = styled.div `
  width: 100%;
  height: 100%;
  position: relative;
  float: left;
  &::after{
    content: "";
    display: block;
    position: absolute;
    top: 10%;
    right: -2px;
    height: 80%;
    border-left: 2px solid rgba(0,0,0,0.025);
  }
`

const Avatar = styled.div `
    width: 100%;
    overflow: hidden;

    img {

        margin-left: -230px;

    }
`

const UserCardMoreInfo = styled.div `
  width: 800px;
  float: left;
  position: absolute;
  left: 150px;
  height: 100%;
  h1 {
    color: #fff;
    margin-bottom: 0;
  }
`

const Coords = styled.div `
    margin: 0 1rem;
    color: #fff;
    font-size: 1rem;

    span {
        float: right;
    }
`

const Stats = styled.div `
  font-size: 2rem;
  display: flex;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  top: auto;
  color: #fff;

  div {
    flex: 1;
    text-align: center;
  }
`

const StatsTitle = styled.div `
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
`

const Value = styled.div `
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.5rem;
`

const General = styled.div `
  width: 500px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  box-sizing: border-box;
  padding: 1rem;
  padding-top: 0;
`
