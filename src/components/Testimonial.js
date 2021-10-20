import React, { useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';

import './css/testimonial.css';


const TestimonialSection = styled.section`
    margin: 3rem auto 0rem auto;
    height: 60rem;
    position: relative;

    h2 {
        text-transform: uppercase;
    }
`

const TestimonialContainer = styled.div`

    // Desktop:
    max-width: 90rem;
    height: 50rem;
    margin: 1rem auto 0 auto;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;

  
    //Mobile:
    @media (max-width: 908px){
      max-width: 46rem;
     
    }
`;

const SlidersContainer = styled.div`
    //Desktop:
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40rem;
    position: absolute;
    left: 0;
`;

const Slide = styled.div`

    display: flex;
    align-items: center;
    width: 90rem;
    height: 40rem;
    transition: all 0.7s ease-in-out;

`;

const SlideBody = styled.div`
    background-color: #d9d9d9;
    box-shadow: 1px 2px 2px 1px #70707029;
    border-radius: 1rem;
    height: 40rem;
    width: 60rem;
    margin: 0 auto;
    padding: 3rem;
    text-align:center;

    h4 {
        margin-top: 1rem;
    }
    span {
        font-weight: bold;
        color: black;
    }

    @media (max-width: 908px){
        margin-right: 44rem;
        padding: 2rem 4rem;

        p {
            margin-top: 0.8rem;
            margin-bottom: 0;
        }
    }
`;

const Testimonial = ({testimonials})=> {

    const [ translate, setTranslate ] = useState(0);
    const [ indexArray, setIndexArray ] = useState(1);
   
    const handleClick = (direction, metric, value) => {
         
        if(direction === 'right') {

            if( testimonials.length === indexArray ){

                setIndexArray( testimonials.length );
                return;

            } else {

               setTranslate( translate + metric );
               setIndexArray( indexArray + value );
            }
             
        }  else {

            if( indexArray === 1){

                setIndexArray( 1 );
                return;

            } else {

                setTranslate( translate + metric );
                setIndexArray( indexArray - value );
            }            
        }
    };

    return(

    <TestimonialSection>
        <h2>Testimonial</h2>
        <TestimonialContainer>
            <SlidersContainer>

                { testimonials.map( (testimonial )   => (
                    <Slide key={testimonial.node.id} style={{ transform: `translateX(${translate}rem)` }}>
                        <SlideBody className="slide">
                            <GatsbyImage 
                                image={testimonial.node.Avatar.localFile.childImageSharp.gatsbyImageData} 
                                alt={testimonial.node.Name}
                                className="avatar"/>
                            <h4>{testimonial.node.Name}</h4>
                            <span>{testimonial.node.Profession}</span>
                            <p>{testimonial.node.Testimony}</p>
                            <a href={testimonial.node.Twitter} target="_blank" rel="noopener noreferrer" className="profileIcons">
                                <i className="fab fa-twitter-square"></i>
                            </a>
                            <a href={testimonial.node.Linkedin} target="_blank" rel="noopener noreferrer" className="profileIcons">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </SlideBody>
                    </Slide>

                ))}
            </SlidersContainer>
        </TestimonialContainer>

        <button className="arrow left" onClick={ ()=>handleClick('left', +90,  1)}>
            <i className="fas fa-chevron-left"></i>
        </button>
       
       <button className="arrow right" onClick={ ()=>handleClick('right', -90, 1)}>
            <i className="fas fa-chevron-right "></i> 
       </button>

         
    </TestimonialSection>
    );
}

export default Testimonial;