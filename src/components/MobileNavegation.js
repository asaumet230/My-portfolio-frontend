import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';


const NavListMobile = styled.ul`
    @media (min-width: 768px){
        display: none;
    }

    li {
        padding: 1rem;
        text-align: center;
    }
`;

const NavLinkMobile = styled(Link)`

    text-decoration: none;
    color: #fff ;
    font-weight: 300;
    font-size: 1.8rem;
    padding: 0.5rem;

    &.section-active {
        color: #fff;
        font-weight: bold;
        border-bottom: 2px solid #fff;
    }
`;



const MobileNavegation = () => {
    return (  
        <nav>
            <NavListMobile>
                <li> <NavLinkMobile to='/' activeClassName="section-active">About Me</NavLinkMobile> </li>
                <li> <NavLinkMobile to='/blog' activeClassName="section-active">Blog</NavLinkMobile> </li>
                <li> <NavLinkMobile to='/contact-page' activeClassName="section-active">Contact Me</NavLinkMobile> </li>
            </NavListMobile>
        </nav>
    );
}
 
export default MobileNavegation;