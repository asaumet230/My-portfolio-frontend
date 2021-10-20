import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';


const TopButton = styled.button`
    background-color:#e65528;
    color: #fff;
    position: fixed;
    bottom: 8rem;
    right: 2rem;
    border: none;
    height: 6rem;
    width: 6rem;
    border-radius: 100%;
    font-size: 3rem;
    cursor: pointer;
    z-index: 1;

     p {
         margin: 0;
     }

     &:hover {
         background-color: #2B4071;
     }
`;

const ScrollToTop = () => {

    const [isVisible, setIsVisible ] = useState(false);

    const toggleVisibility = () => {

        if(window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const ScrollTop = () => {

        window.scrollTo({
            top:0,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }

    }, [])

    return(
        <>
            {
               isVisible && (
               <TopButton 
                    type="button" 
                    onClick={ScrollTop} 
                    className="animate__animated animate__fadeIn">
                        <p>&#8593;</p> 
                </TopButton>)
            }
        </>
    );

}

export default ScrollToTop;
