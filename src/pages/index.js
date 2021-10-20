import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Components
import Layout from '../components/Layout';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Testimonial from '../components/Testimonial';



const Index = () => {


  const dataIndex = useStaticQuery(graphql` 

    query MyQuery {
        allStrapiProjects {
          edges {
            node {
                Description
                Github
                Link
                Name
                id
                Image {
                localFile {
                    childImageSharp {
                    gatsbyImageData
                    }
                  }
                }
                Technologies {
                id
                localFile {
                    childrenImageSharp {
                    gatsbyImageData(width: 70)
                    }
                  }
                }

              }
            }
          }
       allStrapiSkills {
          edges {
            node {
              Count
              Name
              Type
              id
              Image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 70)
                  }
                }
              }
            }
          }
        }
        allStrapiTestimonials {
          edges {
            node {
              Avatar {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 80)
                  }
                }
              }
              Linkedin
              Name
              Profession
              Testimony
              id
            }
          }
        }
         allStrapiExperiences {
          edges {
            node {
              Company
              Description
              FinishDate
              Location
              StartDate
              Type
              Url
              id
            }
          }
        }
    }
  `); 


  return ( 
    <Layout>
      
      <AboutMe/>
      <Skills skills={dataIndex.allStrapiSkills.edges}/>
      <Projects projects={dataIndex.allStrapiProjects.edges}/>
      <Experience experiences={dataIndex.allStrapiExperiences.edges}/>
      <Testimonial testimonials={dataIndex.allStrapiTestimonials.edges}/>
     
    </Layout>
   );
}
 
export default Index;

