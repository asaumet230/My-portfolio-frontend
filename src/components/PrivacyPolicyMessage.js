import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const MessageSection = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 60%;
    background-color: #2b4071d0;
    color: #fff;
    padding: 2rem 3rem;
    border-top-right-radius: 1rem;
    font-weight: bold;
    p {
        text-align: justify;
        margin-top: 1rem;
    }
`;

const LinkPolicy = styled.a`
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    margin-left: 0.5rem;
    cursor: pointer;

    &:hover {
        color: #e65528
    }
`;

const ButtonDiv = styled.div`
    display: flex;
    justify-content: flex-start;


    //Mobile:
    @media (max-width: 768px){
      display: block;
    }
`;

const AcceptButton = styled.div`
    border: none;
    background-color: #e65528;
    color: #fff;
    padding: 1rem 3rem;
    border-radius: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    margin-right: 1rem;

    &:hover {
        background-color: #e84513;
    }
    @media (max-width: 768px){
      text-align: center;
      width: 100%;
      margin-bottom: 1rem;
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
    @media (max-width: 768px){
      text-align: center;
      width: 100%;
      margin-bottom: 1rem;
    }
`;

const ButtonClose = styled.div`
    border: none;
    text-align: right;
    
    i {
        font-size: 2.5rem;
        cursor: pointer;
    }
`;

const PrivacyPolicyMessage = ({setPolicyMessage, setPolicyDiv}) => {
    
    const [ outClass, setOutClass ] = useState('animate__slideInLeft');
    const [ privacyPolicyDiv, setprivacyPolicyDiv ] = useState(false);


    useEffect(() => {

        if(privacyPolicyDiv) {
            setPolicyDiv(privacyPolicyDiv);
        }
        
    }, [privacyPolicyDiv, setPolicyDiv])


    const policyAcceptDesicion = (value) => {

        if( value === false ) {
            setOutClass('animate__slideOutLeft');

            setTimeout(() => {
                setPolicyMessage(value); 
            }, 600);
                
        } else {
            setOutClass('animate__slideInLeft');
        }
    }
 
   
    const showPolicyDiv = (valueShowPolicyDiv, valueAcceptMessage) => {

        if( valueShowPolicyDiv ) {
 
           setOutClass('animate__slideOutLeft');
           setTimeout(() => {
                setPolicyMessage(valueAcceptMessage);
            }, 600);
            
            setprivacyPolicyDiv(valueShowPolicyDiv);  
        }
    }

    return(

        <MessageSection className={`animate__animated ${outClass}`}>
            <ButtonClose onClick={ () =>  policyAcceptDesicion(false)}>
                <i className="far fa-times-circle"></i>
            </ButtonClose>
            <p>We use cookies to give you the best experience on our website, you can find more about our privacy policies in the following link: 
                <LinkPolicy 
                    aria-current="true" 
                    onClick={() => showPolicyDiv(true, false)}>
                        Click
                </LinkPolicy>.
            </p>

            <ButtonDiv>
                <AcceptButton onClick={ () =>  policyAcceptDesicion(false)}>Accept</AcceptButton>
                <DeclineButton onClick={ () =>  policyAcceptDesicion(false)}>Decline</DeclineButton>
            </ButtonDiv>

        </MessageSection>
    );
}

export default PrivacyPolicyMessage;