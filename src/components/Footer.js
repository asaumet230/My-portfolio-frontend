import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';


import SocialNetworks from './SocialNetworks';


const Title = styled.h4`
    font-weight: 300;
    span {
        font-weight: bold;
    }
`;

const FooterPortfolio = styled.footer`

    // Desktop:
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #E6E9EB;
    padding: 2rem 5rem;
    color: #434242;

    // Mobile:
    @media (max-width: 768px){
        flex-direction: column;
        margin-top: 5rem;
        position: relative;
    }
`;

const DivTerms = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-right: 4rem;

    p {
        font-weight: bold;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    @media (max-width: 768px){
      margin: 2rem;
      text-align: center;
      margin-right: 0;
      align-items: center;
    }
`;

const LinkButtons = styled(Link)`
    text-decoration: none;
    font-weight: 400;
    color:#434242;

    &:hover {
     color:#e33c09;
    }
`;



const  Footer = () => {

    const year = new Date().getFullYear();

    return (
        <FooterPortfolio>

            <div>
                <Title> Portfolio develop & designed by <span>Andres Felipe Saumet</span></Title>
               
                <SocialNetworks 
                    desktopAlign= { 'flex-start' }
                    mobileAlign= { 'center'}
                    color={ '#e65528'}
                />
                  
            </div>

            <DivTerms>
                <p>All rights reserved { year } &copy;</p>
                <LinkButtons to={'/PrivacyPolicy'}> Privacy Policy </LinkButtons>
                <LinkButtons to={'/terms-conditions'}> Terms & Conditions </LinkButtons>
            </DivTerms>
             

        </FooterPortfolio>
    );
}

export default Footer ;