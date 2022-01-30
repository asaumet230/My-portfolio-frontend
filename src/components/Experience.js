
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';


const ExperienceSection = styled.section`
   background-color: #F2EFE4;

`;

const ExperiencesDiv = styled.div`
    margin: 0rem auto;
    width: 95%;
    padding: 4rem 2rem;

    h2 {
        margin-bottom: 4rem;
        text-transform: uppercase;
       
    }
`;

const TitleSection = styled.h3`
    text-align: left;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 2rem;
    margin-left: 10rem;
    margin-right: 10rem;
    color: #e65528;
    border-bottom: 1px solid;

    @media (max-width: 1100px){
       margin-left: 0rem;
       margin-right: 0rem;
    }
`;
const SingleDivExperience = styled.div`
    display: block;
    padding: 2rem 25rem;
    margin-bottom: 3rem;

    // Mobile:
    @media (max-width: 1100px){
      padding: 0;
      margin-bottom: 3rem;
    }
`;

const Paragraph = styled.p`

    font-weight: bold;

    i {
        margin-right: 0.5rem;
        color: #c12404;
    }
    span {
        font-weight: 400;
        margin-left: 0.5rem;
    }

    .to{
        font-weight: bold;
    }
`;

const CompanyTitle = styled.h4`
    font-weight: bold;
    text-transform: uppercase;
    span {
        font-weight: 400;
        color:#e65528;
    }
`
const LocationDivIcons = styled.div`
    // Desktop:
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px){
      display: block;
    }
`;

const Url = styled.p`
    text-align: center;
    margin: 1rem;

    a {
        text-decoration: none;
        color: #e65528;
    }
    
    a:hover{
        color: #d53809;
    }

    @media (max-width: 768px){
        text-align: left;
        margin-top: 1rem;
        margin-left: 0;
    }
`;



const Experience = ({ experiences }) => {

    const careers = experiences.filter(experience => (experience.node.Type === 'Career'));
    const education = experiences.filter(experience => (experience.node.Type === 'Education'));


    return (

        <ExperienceSection>
            <ExperiencesDiv>
                <h2>Experience</h2>

                <div>
                    <TitleSection>Career</TitleSection>
                    {careers.map(career => (

                        <SingleDivExperience key={career.node.id}>
                            <div>
                                <CompanyTitle>Company: <span>{career.node.Company}</span> </CompanyTitle>

                                <p css={
                                    css`
                                    text-align: justify;
                                    margin-top: 1rem;
                                    margin-bottom: 0;
                                `
                                }>
                                    {career.node.Description}.
                                </p>
                                <Url>URL:<a href={career.node.Url} target="_blank" rel="noreferrer noopener"> Click Here</a></Url>
                                <LocationDivIcons>
                                    <Paragraph> <i className="fas fa-calendar-alt"></i> Date: <span>{career.node.StartDate} </span>  <span className="to">To</span>  <span>{career.node.FinishDate}</span> </Paragraph>
                                    <Paragraph> <i className="fas fa-map-marker-alt"></i>Location: <span>{career.node.Location}</span></Paragraph>
                                </LocationDivIcons>
                            </div>
                        </SingleDivExperience>
                    ))}
                </div>

                <div>
                    <TitleSection>Education</TitleSection>

                    {education.map(education => (
                        <SingleDivExperience key={education.node.id}>
                            <div>
                                <CompanyTitle>Company: <span>{education.node.Company}</span> </CompanyTitle>
                                <p css={
                                    css`
                                        text-align: justify;
                                    `
                                }>
                                    {education.node.Description}
                                </p>

                                <Url>URL:<a href={education.node.Url} target="_blank" rel="noreferrer noopener"> click Here</a></Url>
                                <LocationDivIcons>
                                    <Paragraph> <i className="fas fa-calendar-alt"></i> Date: <span>{education.node.StartDate} </span>  <span className="to">To</span>  <span>{education.node.FinishDate}</span> </Paragraph>
                                    <Paragraph> <i className="fas fa-map-marker-alt"></i>Location: <span>{education.node.Location}</span></Paragraph>
                                </LocationDivIcons>
                            </div>
                        </SingleDivExperience>
                    ))}


                </div>



            </ExperiencesDiv>
        </ExperienceSection>


    );
}

export default Experience;