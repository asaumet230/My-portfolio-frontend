import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';

import Layout from '../components/Layout';

const ErrorContainer = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: 0rem auto 3rem auto;

`;

const Image404 = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const ButtonErrorDiv = styled.div`
  margin: -5rem auto 3rem auto;
  text-align: center;

  @media (max-width: 768px){
    margin-top: 1rem;
  }
`;

const BtnError = styled(Link)`
  display: block;
  width: 20rem;
  margin: 2.5rem auto;
  padding: 2rem;
  cursor: pointer;
  background-color: #e65528;
  color:#fff;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  font-size: 1.4rem;

  &:hover {
    background-color: #e33c09;
  }
`;


const PageNotFound = () => {

  return (

    <Layout>
      <ErrorContainer>
        <Image404>
         <StaticImage 
            src="../images/Error-404-page-not-found.png" 
            alt="not-page-found"
            height={600}
          />
        </Image404>

        <ButtonErrorDiv>
          <BtnError to="/">Back Home</BtnError>
        </ButtonErrorDiv>
      </ErrorContainer>
     
      
    </Layout>
    
  )

}

export default PageNotFound;