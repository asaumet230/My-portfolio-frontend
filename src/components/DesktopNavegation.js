import React from 'react'
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react'

const NavList = styled.ul`

    // First Destopk:
    display: flex;
    flex-direction: row;
    
    li {
        margin-right: 2rem;

        &:last-of-type {
            margin-right: 0;
        }
    }

    // Mobile:

    @media (max-width: 768px){
      
        display: none;

    }
`;

const NavLink = styled(Link)`

    text-decoration: none;
    color: #fff ;
    font-weight: 300;
    font-size: 1.8rem;
    padding: 0.5rem;

    &:hover {

        font-weight: bold;
        transition: all 0.3s ease-in-out;

    }

    &.section-active {
        color: #fff;
        font-weight: bold;
        border-bottom: 2px solid #fff;
      
    }
`;

const DesktopNavegation = () => {

    return ( 
      <nav css= {
          css`
           @media (max-width: 768px){
             display: none;
           }
          `
      }>
        <NavList>
            <li> <NavLink to='/' activeClassName="section-active">About Me</NavLink> </li>
            <li> <NavLink to='/blog' activeClassName="section-active">Blog</NavLink> </li>
            <li> <NavLink to='/contact-page' activeClassName="section-active">Contact Me</NavLink> </li>
        </NavList>  
      </nav>
     );
}
 
export default DesktopNavegation;