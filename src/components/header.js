import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { StaticImage } from "gatsby-plugin-image";

// Components
import DesktopNavegation from './DesktopNavegation';
import MobileNavegation from './MobileNavegation';
 
const HeaderMenu = styled.nav`

    // Firts Desktop:
    position: fixed;
    width: 100%;
    background-color: #2B4071;
    padding: 1rem 5rem;
    box-shadow: 1px 2px 2px 1px #70707029;
    z-index: 99;

    @media (max-width: 768px){
      padding: 1rem 4rem 1rem 2rem;
    }


`;

const IconMobileMenu = styled.i`
    
    font-size: 2.8rem;
    color: #fff;

    &:hover {
        cursor: pointer;
    }

    @media (min-width: 768px){
      display: none;
    }
`
const LogoDiv = styled(Link)`

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-decoration: none;

    h1 {
        color: #fff;
        font-size: 3.5rem;
        margin-left: 0.5rem;
    }

    span {
        font-weight: 300;
    }

    @media (max-width: 768px){
       h1 {
        font-size: 3rem;
       }
    }
`


const Header = () => {

    const [ mobileMenu, stateMobileMenu ] = useState(false);

    return ( 
        <HeaderMenu>
            <div css={
                css`
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                `
            }>
                <LogoDiv to={'/'}>

                    <StaticImage
                        src="../images/andres-saumet-web-developer.png" 
                        alt="Andres-Saumet-web-developer"
                        width={65}
                        height={65}
                    />

                    <h1> ANDRES<span>SAUMET</span> </h1>

                </LogoDiv>
                

                <IconMobileMenu 
        
                    className="fas fa-bars" 
                    onClick={()=> stateMobileMenu( !mobileMenu )}
                ></IconMobileMenu>

                <DesktopNavegation/>
            </div>
              { mobileMenu ? ( <div className="animate__animated animate__fadeIn"> <MobileNavegation/> </div> ) : null }
        </HeaderMenu>
     );
}
 
export default Header;