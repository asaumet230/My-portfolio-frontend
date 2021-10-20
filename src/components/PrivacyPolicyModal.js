import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

import Privacy from './Privacy';

const PrivacySection = styled.div`
    height: 100%;
    width: 100%;
    background-color:rgba(0, 0, 0, 0.4);
    position: fixed;
    z-index: 98;
`;

const PrivacyContainer = styled.div`
    background-color: #fff;
    color: #434242;
    height: 57rem;
    width: 80rem;
    margin: 10rem auto;
    padding: 3rem 4rem;
    border-radius: 1rem;

    //Mobile:
    @media (max-width: 768px){
      width: 40rem;
    }
    
`;

const PrivacyContent= styled.div`
    max-height: 37rem;
    overflow: hidden;
    overflow-y: scroll;
    margin-top: 0rem;
    text-align: justify;
    margin-top: 1rem;
`;

const ButtonClose = styled.div`
    background-color: #fff;
    border: none;
    text-align: right;
    
    i {
        font-size: 2.5rem;
        cursor: pointer;
    }
`;

const ButtonPolicyDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem;
`;

const ButtonAccept = styled.button`
    border: none;
    background-color: #e65528;
    color: #fff;
    padding: 1rem 3rem;
    border-radius: 0.5rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #e84513;
    }
`;

const DeclineButton = styled.button`
    border: none;
    padding: 1rem 3rem;
    border-radius: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    border-radius: 1px solid #a0a0a0;

    &:hover {
        background-color: #a0a0a0;
    }
`;

const PrivacyPolicyModal = ({setPolicyDiv})=> {

    const data = useStaticQuery(graphql`
        query MyPrivacyII {
            strapiTerms(id: {eq: "Terms_1"}) {
                Content
                Title
                id
            }
        }`);

    const [ fadeClass, setFadeClass ] = useState('animate__fadeIn');

    const closePrivacyPolicy = (value) => {

        if(value === false) {

            setFadeClass('animate__fadeOut');

            setTimeout(() => {
                setPolicyDiv(value);
            }, 600);
        }
    }



    return(

        <PrivacySection className={`animate__animated ${fadeClass}`}>
            <PrivacyContainer >
                <ButtonClose onClick={() => closePrivacyPolicy(false)}>
                    <i className="far fa-times-circle"></i>
                </ButtonClose>
            
                <PrivacyContent>
                    <Privacy data={data}/>
                </PrivacyContent>

            <ButtonPolicyDiv>
                <ButtonAccept onClick={() => closePrivacyPolicy(false)}>
                    Accept
                </ButtonAccept>
                <DeclineButton onClick={() => closePrivacyPolicy(false)}>
                    Decline
                </DeclineButton >

            </ButtonPolicyDiv>
               
            </PrivacyContainer>
            

        </PrivacySection>
        
    );
}

export default PrivacyPolicyModal;