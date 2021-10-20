import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Global, css } from '@emotion/react';

// Components:
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import PrivacyPolicyModal from './PrivacyPolicyModal.js';
import PrivacyPolicyMessage from './PrivacyPolicyMessage';

 
const Layout = ({children}) => {

    const [ policyMessage, setPolicyMessage ] = useState(false);
    const [ policyDiv, setPolicyDiv ] = useState(false);


    useEffect(() => {

        const entrance = localStorage.getItem('entrance') || null;
        let value;

        if( entrance === null) {

            value = 1;
            localStorage.setItem('entrance', JSON.stringify(value));
            setPolicyMessage(true);
           
        } else {

            value = Number(entrance) + 1;
            localStorage.setItem('entrance', JSON.stringify(value));

            if( Number(entrance) === 10 ) {

                setPolicyMessage(true);
                localStorage.setItem('entrance', JSON.stringify(1));
                
            }

        }
    }, [])

    return (  

    <>
        <Global 
         styles = {
             css`
                html {
                    box-sizing: border-box;
                    font-size: 62.5%;
                }
                    *, *:before, *:after {
                    box-sizing: inherit;
                }

                body {
                    font-size: 1.8rem;
                    line-height: 1.5;
                    font-family: 'Lato', sans-serif;
                    color: #434242;
                }

                h1,h2,h3,h4,h5 {
                    margin: 0;
                    font-family: 'Roboto', sans-serif;
                    text-align: center;
                    font-weight: 400;

                }
                
                img {
                    width: 100%;
                }

                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .container-portfolio {
                    padding-top: 9rem;
                }
             `
         } />

    
        <Helmet>
            <title>Andres Saumet | Full-Stack Developer</title>
            <meta name="description" content="Portfolio Andres Saumet Full Stack Developer" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Roboto:wght@100;300;400;500;700;900&family=Bebas+Neue&family=Dancing+Script&family=Comfortaa:wght@300&family=Space+Mono&family=Ubuntu+Condensed&family=Gloria+Hallelujah&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="true" referrerPolicy="no-referrer" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="true" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        </Helmet>

        <Header/>

        {
            policyDiv ? 
            (<PrivacyPolicyModal 
                setPolicyDiv={setPolicyDiv}
                />
            ) : null
        }
        
        <div className="container-portfolio">
            <main>
                {children}
            </main> 
            
        </div>

        { policyMessage ? 
            ( <PrivacyPolicyMessage 
                setPolicyMessage={setPolicyMessage}
                setPolicyDiv={setPolicyDiv}
                /> 
            ): null }
       
        <ScrollToTop/>
        <Footer/>
    </>
    );
}
 
export default Layout;