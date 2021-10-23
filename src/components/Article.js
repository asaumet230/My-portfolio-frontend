import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import urlSlug from 'url-slug';

import Layout from './Layout';
import SideBar from './SideBar';
import ShareButtons from './ShareButtons';
import SeoComponent from './SeoComponent';

export const query = graphql`
    query MyArticle($id: String!) {
        allStrapiArticles(filter: {id: {eq: $id}}) {
            nodes {
            Title
            Description
            Banner {
                localFile {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
            Description
            Content
                Images {
                    localFile {
                        childrenImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    }
`;

// Styled Components:

const ArticleContainer = styled.div`

    max-width: 120rem;
    width: 83%;
    margin: 3rem auto;

    @media (max-width: 768px){
      width: 90%;
    }

`;

const ArticleTitle = styled.h1`
    margin-bottom: 3rem;
`;

const ArticleBody = styled.div`

    display: grid;
    grid-template-columns: 80% 20%;
    column-gap: 3rem;

    @media (max-width: 768px){
      display: flex;
      flex-direction: column-reverse;
    }
`;

const BannerDiv = styled.div`
    text-align: center;

    @media (max-width: 768px){
      margin-top: 2rem;
    }
`

const BannerArticle = styled(GatsbyImage)`
    height: 30rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

const Paragraph = styled.p`
    text-align: justify;
`;



const Article = ({ data }) => {

  const{ Title, Banner, Images, Description, Content  }= data.allStrapiArticles.nodes[0];
  const paragraphs = Content.split('/');

  const otherData = {
        title: Title,
        description: Description,
        image: `https://www.andressaumet.com${Banner.localFile.childImageSharp.gatsbyImageData.images.fallback.src}`,
        url:`https://www.andressaumet.com/blog/${urlSlug(Title)}`,
        article: true
    }

    return(

        <Layout>
            <SeoComponent otherData={ otherData }/>
            <ArticleContainer>
                <ArticleTitle>{ Title } </ArticleTitle>

                <ShareButtons 
                    Title={ Title }
                    Description={ Description }
                    Banner= { Banner }/>

                <ArticleBody>
                    <div >
                        <BannerDiv>
                            <BannerArticle 
                                image={ Banner.localFile.childImageSharp.gatsbyImageData } 
                                alt={Title}/>
                        </BannerDiv>

                        <Paragraph>{ paragraphs[0] }</Paragraph>

                        { paragraphs[0] !== undefined ?
                        
                        (
                            <BannerDiv>  
                                <BannerArticle 
                                    image={ Images[0].localFile.childrenImageSharp[0].gatsbyImageData } 
                                    alt="hola"/>
                            </BannerDiv>

                        ) : null }
                       
                        <Paragraph>{ paragraphs[1] }</Paragraph>

                         { paragraphs[1] !== undefined ? 
                         (
                            <BannerDiv>  
                                <BannerArticle 
                                    image={ Images[1].localFile.childrenImageSharp[0].gatsbyImageData } 
                                    alt="hola"/>
                            </BannerDiv>

                        ): null}

                        <Paragraph>{ paragraphs[2] }</Paragraph>

                        { paragraphs[2] !== undefined ?
                        (
                            <BannerDiv>  
                                <BannerArticle 
                                    image={ Images[2].localFile.childrenImageSharp[0].gatsbyImageData } 
                                    alt="hola"/>
                            </BannerDiv>

                        ): null }

                        <Paragraph>{ paragraphs[3] }</Paragraph>

                        <Paragraph>{ paragraphs[4] }</Paragraph>

                        <Paragraph>{ paragraphs[5] }</Paragraph>
                      
                       
                      
                    </div>
                    
                    <SideBar/>
                    
                </ArticleBody>
            </ArticleContainer>
        </Layout>
    );
}

export default Article;