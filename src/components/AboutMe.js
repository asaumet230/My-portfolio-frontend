import React, { useRef, useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { init } from 'ityped';

// Components:
import SocialNetworks from '../components/SocialNetworks';


// Styled Components:
const AboutMeSection = styled.section`
  // Desktop:
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  column-gap: 4rem;
  text-align: center;
  margin: 4rem auto 5rem auto;
  width: 95%;
  max-width: 120rem;

  // Mobile:
  @media (max-width: 768px){
     display: block;
  }
`;

const AboutMeDiv = styled.div`
  @media (max-width: 768px){
    margin-top: 3rem;
  }

  h1 {
    font-weight: 300;
  }


`;

const TitleSpan = styled.p`
    line-height: 0;
    margin: 1rem;
`;
    
const Paragraphs = styled.p`
  text-align: justify;
`;

const AnimationText = styled.span`
  /* font-family: 'Dancing Script', cursive; */
  /* font-family: 'Comfortaa', cursive; */
  /* font-family: 'Space Mono', monospace; */
  font-family: 'Ubuntu Condensed', sans-serif;
  /* font-family: 'Gloria Hallelujah', cursive; */
  color: #e65528;
  font-size: 4rem;
`;



const AboutMe = () => {

 const textRef = useRef();

 useEffect(()=> {

  init( textRef.current, {

      showCursor: true,
      backDelay: 1600,
      backSpeed:60,
      strings: ["I'am Web Developer", "&", "Content Creator"]

    });

 }, []);



    return ( 

    <AboutMeSection>
        <div>
            <StaticImage css = {
              css`
                /* border-radius: 270px; */
                margin-bottom: 1rem;
              `
            }
                src="../images/PhotoMe-background-2.png" 
                alt="Andres-Saumet-web-developer"
                 />

            <h3> Andres Felipe Saumet </h3>

            <TitleSpan> Web Developer </TitleSpan>

            <SocialNetworks 
                desktopAlign= { 'center' }
                mobileAlign= { 'center' }
                color={ '#e65528'}
            />
        </div>

        <AboutMeDiv>

          <h1>About Me...</h1>
            
          <AnimationText ref={textRef}></AnimationText>
          <Paragraphs>
            With good knowledge in front-end and backend techniques, when I write code I`m passionate about good practices that`s why I try to write hight quality code and correctly implements the designs patterns of software to make easy to read by other programmers. 
          </Paragraphs>
          <Paragraphs>
            I like to work in teams, I have also worked in teams with the SCRUM methodology. I usually spend time optimizing my apps and fixing the small details. I also do unit tests with Jest and Cypress. 
          </Paragraphs>
          <Paragraphs>
            I have strong knowledge in technologies such as JavaScript, HTML5, CSS3, frameworks such as Angular 11, ReactJs, NodeJS, Bootstrap in databases such as Mongo dB, PostgreSQL, MySQL, and knowledge in CMS like WordPress and Strapi.
          </Paragraphs>
          <Paragraphs>
            I am an industrial engineer by profession with a specialization in financial management, for two years I have been dedicated to programming I am 100% self-taught and I am always striving to learn new technologies and tools for software development, my next step is to learn React-Native.
          </Paragraphs>

        </AboutMeDiv>
      </AboutMeSection>

     );
}
 
export default AboutMe;