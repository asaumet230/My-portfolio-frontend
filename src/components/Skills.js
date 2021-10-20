import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import ReactStars from "react-rating-stars-component";

const SkillsSection = styled.section`
   background-color: #F2EFE4;
   margin-bottom: 5rem;

`;

const SkillsDiv = styled.div`
    margin: 0rem auto;
    width: 95%;
    padding: 4rem 2rem;

    h2 {
        margin-bottom: 4rem;
        text-transform: uppercase;
       
    }

`;

const SectionSkills = styled.div`
    
    // Desktop:
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    
    //Mobile:

    @media (max-width: 768px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`;

const SectionTitle = styled.h3`
    margin-bottom: 3rem;
    padding-left: 2rem;
    text-align: left;
    font-weight: 300;
    text-transform: uppercase;
    border-bottom: 1px solid #bdbaba;;
    padding-bottom: 0.5rem;
`;

const IconSkills = styled.div`
    margin: 1rem auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        margin-bottom: 0;
    }

    @media (max-width: 768px){
      margin-top: 3rem;
    }
`;


const  Skills = ({skills}) => {

 const javascriptArray = skills.filter( skill => skill.node.Type === 'Javascript');
 const pythonArray = skills.filter( skill => skill.node.Type === 'Python');
 const cssArray = skills.filter( skill => skill.node.Type === 'CSS');
 const htmlArray = skills.filter( skill => skill.node.Type === 'HTML');
 const othersArray = skills.filter( skill => skill.node.Type === 'Others');
 const languagesArray = skills.filter( skill => skill.node.Type === 'Languages');
 const CMSArray = skills.filter( skill => skill.node.Type === 'CMS');
 const backendArray = skills.filter( skill => skill.node.Type === 'Backend');

return(

    <SkillsSection>      
        <SkillsDiv>
            <h2>Skills</h2>
            <div css={
                css`
                    margin-bottom: 3rem;
                    
                `
            }>
                <SectionTitle>Javascript</SectionTitle>
                <SectionSkills>
                    {javascriptArray.map( element => (     
                        <IconSkills key={element.node.id}>
                            <GatsbyImage
                                image={element.node.Image.localFile.childImageSharp.gatsbyImageData}
                                alt={element.node.Name}
                            />
                            <p>{element.node.Name}</p>
                                <ReactStars
                                    count={element.node.Count}
                                    size={ 20 }
                                    value={5}
                                    isHalf={true}
                                    edit = {false}
                                    emptyIcon={<i className="fas fa-star"></i>}
                                    halfIcon={<i className="fas fa-star-half-alt"></i>}
                                    fullIcon={<i className="fas fa-star"></i>}
                                    activeColor="#ffb001"
                                />
                        </IconSkills>            
                    ))}
                </SectionSkills> 
             </div>

            <div css={
                css`
                    margin-bottom: 3rem;
                    
                `
            }>
                <SectionTitle>Python & Machine Learning</SectionTitle>
                <SectionSkills>
                    {pythonArray.map( element => (     
                        <IconSkills key={element.node.id}>
                            <GatsbyImage
                                image={element.node.Image.localFile.childImageSharp.gatsbyImageData}
                                alt={element.node.Name}
                            />
                            <p>{element.node.Name}</p>
                                <ReactStars
                                    count={element.node.Count}
                                    size={ 20 }
                                    value={5}
                                    isHalf={true}
                                    edit = {false}
                                    emptyIcon={<i className="fas fa-star"></i>}
                                    halfIcon={<i className="fas fa-star-half-alt"></i>}
                                    fullIcon={<i className="fas fa-star"></i>}
                                    activeColor="#ffb001"
                                />
                        </IconSkills>            
                    ))}
                </SectionSkills> 
             </div>

            <div css={
                css`
                    margin-bottom: 3rem;
                    
                `
            }>
                <SectionTitle>CSS</SectionTitle>
                <SectionSkills>
                    {cssArray.map( element => (     
                        <IconSkills key={element.node.id}>
                            <GatsbyImage
                                image={element.node.Image.localFile.childImageSharp.gatsbyImageData}
                                alt={element.node.Name}
                            />
                            <p>{element.node.Name}</p>
                                <ReactStars
                                    count={element.node.Count}
                                    size={ 20 }
                                    value={5}
                                    isHalf={true}
                                    edit = {false}
                                    emptyIcon={<i className="fas fa-star"></i>}
                                    halfIcon={<i className="fas fa-star-half-alt"></i>}
                                    fullIcon={<i className="fas fa-star"></i>}
                                    activeColor="#ffb001"
                                />
                        </IconSkills>            
                    ))}
                </SectionSkills> 
            </div>

            <div css={
                css`
                    margin-bottom: 3rem;
                    
                `
            }>
                <SectionTitle>HTML</SectionTitle>
                <SectionSkills>
                    {htmlArray.map( element => (     
                        <IconSkills key={element.node.id}>
                            <GatsbyImage
                                image={element.node.Image.localFile.childImageSharp.gatsbyImageData}
                                alt={element.node.Name}
                            />
                            <p>{element.node.Name}</p>
                                <ReactStars
                                    count={element.node.Count}
                                    size={ 20 }
                                    value={5}
                                    isHalf={true}
                                    edit = {false}
                                    emptyIcon={<i className="fas fa-star"></i>}
                                    halfIcon={<i className="fas fa-star-half-alt"></i>}
                                    fullIcon={<i className="fas fa-star"></i>}
                                    activeColor="#ffb001"
                                />
                        </IconSkills>            
                    ))}
                </SectionSkills> 
            </div>

            <div css={
                css`
                    margin-bottom: 3rem;
                    
                `
            }>
                <SectionTitle>Backend</SectionTitle>
                <SectionSkills>
                    {backendArray.map( element => (     
                        <IconSkills key={element.node.id}>
                            <GatsbyImage
                                image={element.node.Image.localFile.childImageSharp.gatsbyImageData}
                                alt={element.node.Name}
                            />
                            <p>{element.node.Name}</p>
                                <ReactStars
                                    count={element.node.Count}
                                    size={ 20 }
                                    value={5}
                                    isHalf={true}
                                    edit = {false}
                                    emptyIcon={<i className="fas fa-star"></i>}
                                    halfIcon={<i className="fas fa-star-half-alt"></i>}
                                    fullIcon={<i className="fas fa-star"></i>}
                                    activeColor="#ffb001"
                                />
                        </IconSkills>            
                    ))}
                </SectionSkills> 
            </div>

            <div css={
                css`
                    margin-bottom: 3rem;
                    
                `
            }>
                <SectionTitle>CMS</SectionTitle>
                <SectionSkills>
                    {CMSArray.map( element => (     
                        <IconSkills key={element.node.id}>
                            <GatsbyImage
                                image={element.node.Image.localFile.childImageSharp.gatsbyImageData}
                                alt={element.node.Name}
                            />
                            <p>{element.node.Name}</p>
                                <ReactStars
                                    count={element.node.Count}
                                    size={ 20 }
                                    value={5}
                                    isHalf={true}
                                    edit = {false}
                                    emptyIcon={<i className="fas fa-star"></i>}
                                    halfIcon={<i className="fas fa-star-half-alt"></i>}
                                    fullIcon={<i className="fas fa-star"></i>}
                                    activeColor="#ffb001"
                                />
                        </IconSkills>            
                    ))}
                </SectionSkills> 
            </div>
            
            <div css={
                css`
                    margin-bottom: 3rem;
                    
                `
            }>
                <SectionTitle>Others</SectionTitle>
                <SectionSkills>
                    {othersArray.map( element => (     
                        <IconSkills key={element.node.id}>
                            <GatsbyImage
                                image={element.node.Image.localFile.childImageSharp.gatsbyImageData}
                                alt={element.node.Name}
                            />
                            <p>{element.node.Name}</p>
                                <ReactStars
                                    count={element.node.Count}
                                    size={ 20 }
                                    value={5}
                                    isHalf={true}
                                    edit = {false}
                                    emptyIcon={<i className="fas fa-star"></i>}
                                    halfIcon={<i className="fas fa-star-half-alt"></i>}
                                    fullIcon={<i className="fas fa-star"></i>}
                                    activeColor="#ffb001"
                                />
                        </IconSkills>            
                    ))}
                </SectionSkills> 
            </div>

            <div css={
                css`
                    margin-bottom: 3rem;
                    
                `
            }>
                <SectionTitle>Languages</SectionTitle>
                <SectionSkills>
                    {languagesArray.map( element => (     
                        <IconSkills key={element.node.id}>
                            <GatsbyImage
                                image={element.node.Image.localFile.childImageSharp.gatsbyImageData}
                                alt={element.node.Name}
                            />
                            <p>{element.node.Name}</p>
                                <ReactStars
                                    count={element.node.Count}
                                    size={ 20 }
                                    value={5}
                                    isHalf={true}
                                    edit = {false}
                                    emptyIcon={<i className="fas fa-star"></i>}
                                    halfIcon={<i className="fas fa-star-half-alt"></i>}
                                    fullIcon={<i className="fas fa-star"></i>}
                                    activeColor="#ffb001"
                                />
                        </IconSkills>            
                    ))}
                </SectionSkills> 
             </div>
             


        </SkillsDiv>
    </SkillsSection>
       
    );
}

export default Skills;