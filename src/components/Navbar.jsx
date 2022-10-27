import { useEffect, useState } from 'react';
import { RiMenu5Fill, RiCloseFill } from 'react-icons/ri';

import styled from 'styled-components';
import logo from '../assets/logo.svg'

export default function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);
  const onToggle = () => setToggle(!toggle);
  
  const [links] = useState([
    {
      title: "O Escritório",
      url: "office",
    },
    {
      title: "Equipe",
      url: "team",
    },
    {
      title: "Publicações",
      url: "posts",
    },
    {
      title: "Contato",
      url: "contact",
    },
  ]);

  useEffect(() => {
    const getSentinel = () => document.getElementById('sentinel');
    const observer = new IntersectionObserver((entries) => {
      if (entries.some(entry => entry.isIntersecting)) {
          setIsScrolled(true)
      } else {
        setIsScrolled(false)
        setToggle(false)
      }
    });
    observer.observe(getSentinel());
    return () => observer.disconnect();
  })

  return (
    <nav className={`navbar ${isScrolled ? 'fixed' : ''}`}>
      <Anchor href="#header">
        <img
          src={logo}
          width="155px"
          height="62px"
        />
      </Anchor>
      <MenuIcon onClick={onToggle}>
        {toggle ? 
          <RiCloseFill/> :  
          <RiMenu5Fill/>
        }
      </MenuIcon>
      <ul className={`navMenu ${toggle ? 'active' : ''}`}>
        {links.map((link) => (
          <NavLinks key={link.title}>
            <Anchor href={link.url}>
              {link.title}
            </Anchor>
          </NavLinks>
        ))}
      </ul>
    </nav>
  )
}

const NavLinks = styled.li`
  color: black;
  border-radius: 5px;
  text-decoration: none;
  padding: 0.5rem 1rem;
  &:hover {
    background: black;
    color: white;
    transition: all 0.2s ease-out;
    cursor: pointer;
  }
  @media screen and (max-width: 925px){
    border-radius: 0px;
    text-align: center;
    padding: 1rem;
    width: 100%;
    display: table;
  }
`

const Anchor = styled.a`
  text-transform: uppercase;
`

const MenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 925px) {
    display: block;
  }
  > svg {
    color: black;
    font-size: 2rem;
    width: 1.5rem;
    text-align: center;
    cursor: pointer;
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.2s;
  }
  @keyframes fadeInOpacity {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
  }
`