import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';



const ProjectsSection = styled.section`
   margin-bottom: 5rem;
`;

const ProjectsDiv = styled.div`
    margin: 0rem auto;
    width: 95%;
    padding: 4rem 2rem;

    h2 {
        margin-bottom: 4rem;
        text-transform: uppercase;
    }

`;

const SectionProjects = styled.div`
    
    // Desktop:
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 4rem;

    //Mobile:
    @media (max-width: 768px){
        display: block;
    }
    
    
`;

const Card = styled.div`
    margin: 0 auto 5rem auto;
    border: 1px solid #e1e1e1;
    border-radius: 1.5rem;
    max-width: 50rem;
    box-shadow: 1px 2px 2px 1px #70707029;

    h3 {
        font-weight: bold;
        margin-top: 1rem;
        text-transform: uppercase;
        border-bottom: 1px solid #bdbaba;;
        padding-bottom: 0.5rem;
    }

    // Mobile:
    @media (max-width: 768px){
      margin-top: 3rem;
    }
`;

const CardBody = styled.div`
    padding: 2rem;
    text-align: center;

    p {
        text-align: left;
        font-weight: bold;
        margin-left: 1rem;
    }

    ul {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    ul li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
`

const CardDiv = styled.div` 
    position: relative;
    overflow: hidden;
    cursor: pointer;
    text-align: center;

    p {
        position: absolute;
        bottom: -25rem;
        left: 0;
        border-top-right-radius: 1.5rem;
        border-top-left-radius: 1.5rem;
        padding: 5rem 5rem;
        width: 100%;
        height: 100%;
        margin: 0;
        color: #fff;
        font-weight: 700;
        font-size: 2.4rem;
        background-color: rgba(43, 64,113, 0.90);
        transition: all 0.5s ease-in-out;
                        }
    &:hover p {
        bottom: 0rem;
    }
`

const GitHubLink = styled.a`

    color: #2B4071;
    border: 1px solid #2B4071;
    border-radius: 5px;
    padding: 1rem 2rem;
    text-decoration: none;

    i {
        font-size: 2.5rem;
        color: #2B4071;
        margin-right: 0.5rem;
    }

    &:hover {
        background-color: #2B4071;
        border: 1px solid #2B4071;
        color: #fff;
        i {
         color: #fff;
        }
    }

`

const Projects = ({projects}) => {
        
    return(

    <ProjectsSection>
        <ProjectsDiv>
            <h2>Projects</h2>
            <SectionProjects>

                { projects.map( project => {

                    const { 
                            Description, 
                            id, 
                            Github, 
                            Image, 
                            Link, 
                            Name, 
                            Technologies } = project.node;

                    return(
                     <Card key={id} >
                        <CardDiv>
                            <a 
                                href={Link}
                                target="_blank" 
                                rel="noopener noreferrer">
                                <GatsbyImage
                                    css = {
                                        css`
                                            border-top-right-radius: 1.5rem;
                                            border-top-left-radius: 1.5rem;
                                        `
                                    }
                                    image={Image.localFile.childImageSharp.gatsbyImageData} 
                                    alt={Name}
                                    width={ 500 }
                                />         
                                <p>{ Description } <i className="fas fa-external-link-square-alt"></i></p>
                            </a>
                        </CardDiv>
                        
                        <CardBody>
                            <h3>{ Name }</h3>
                            <p>Tecnologies:</p>
                            <ul>
                             {
                              (Technologies.map( techonology =>
                                ( 
                                    <li key={techonology.id} >
                                        <GatsbyImage 
                                            image={techonology.localFile.childrenImageSharp[0].gatsbyImageData} 
                                            alt='worpress'
                                            />
                                    </li>
                                ))
                              )
                            }

                            </ul>
                            <p>View Source:</p>

                            <div css= {
                                css`
                                    margin-bottom: 2rem;
                                `
                            }>
                                <GitHubLink href={ Github } target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                    Code
                                </GitHubLink>
                            </div>
                        </CardBody>
                    </Card>   
                )})}
               
            </SectionProjects>
        </ProjectsDiv>
    </ProjectsSection>    
    );

}

export default Projects;