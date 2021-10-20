import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';


const IconCV = styled.i`

    font-family: 'Bebas Neue', cursive;
    font-weight: bold;
    font-style: normal;
    text-decoration: none;
`

const SocialNetworks = ({ desktopAlign, mobileAlign, color }) => {

    return(
           <ul css={
               css`
                 // Desktop:
                display: flex;
                align-items: center;
                justify-content: ${ desktopAlign };
            
                li {
                    font-size: 3.3rem;
                    text-align: center;
                    margin-right: 1.1rem;
                
                    &:last-of-type {
                        margin-right: 0;
                    }
                }

                li:hover {
                    transform: scale(1.1);
                    transition: all 0.2s ease-in-out;
                }
                
                // mobile:
                @media (max-width: 768px){
                    justify-content: ${ mobileAlign }
                }   
            `
           }>
                    <li>
                        <a  css={
                                css`
                                 color: ${color};
                                `
                            }
                            href="https://github.com/asaumet230" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a  css={
                                css`
                                 color: ${color};
                                `
                            }
                            href="https://www.linkedin.com/in/andresfelipesaumet/" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a css={
                                css`
                                 color: ${color};
                                `
                            }
                            href="https://twitter.com/SaumetAndres" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <i className="fab fa-twitter-square"></i>
                        </a>
                    </li>
                    <li>
                        <a css={
                                css`
                                 color: ${color};
                                 text-decoration: none;
                                 font-style: unset;
                                `
                            }
                            href="https://drive.google.com/file/d/1pvFioTxFBtzkvQ59xrY5FVNbxer6Xqn-/view?usp=sharing" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <IconCV>CV</IconCV>
                        </a>
                    </li>
            </ul>

    );
}

export default SocialNetworks;