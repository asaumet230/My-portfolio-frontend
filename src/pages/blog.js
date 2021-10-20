import React from 'react';
import { graphql, Link, useStaticQuery  } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import urlSlug from 'url-slug'

import Layout from '../components/Layout';


const BlogSection = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: 3rem auto;
  
  h1 {
    margin-bottom: 2rem;
  }
`;

const BlogContainer = styled.div`

  //Desktop:
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 3rem;
  border: 1px solid  #e1e1e1;
  margin-bottom: 5rem;
  
  p {
    text-align: justify;
  }

  //Mobile:
  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
  }
`;

const BlogBody = styled.div`
  padding: 1rem 3rem 2rem 0rem;

  .autor {
    text-align: right;
    font-weight: bold;
    margin-top: 1rem;
    span{
      font-weight: 300;
    }
  }

  .article {
    margin-bottom: 3rem;
  }
  
  div{
    margin-bottom: 2rem;
  }

  @media (max-width: 768px){
    padding: 2rem;
    .autor {
      margin-top: 0;
    }
  }
`;

const ButtonBlog = styled(Link)`
  margin-top: 4rem;
  padding: 1.5rem;
  cursor: pointer;
  background-color: #e65528;
  color:#fff;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  font-size: 1.4rem;

  &:hover {
    background-color: #e33c09;
  }
  @media (max-width: 768px){
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;

const Blog = () => {

  const results = useStaticQuery(graphql`
    query MyBlog{
      allStrapiArticles {
        edges {
          node {
            Banner {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            Description
            id
            Title
            Author
          }
        }
      }
}`);

const articles = results.allStrapiArticles.edges;

  return (

    <Layout>
         <BlogSection>
          <h1>Blog</h1>
          <ul>

            { articles.map( article => (

              <li key={ article.node.id }>
                <BlogContainer>
                  <GatsbyImage image={ article.node.Banner.localFile.childImageSharp.gatsbyImageData } alt={ article.node.Title }/>
                  <BlogBody>
                    <p className="autor"> By: <span>{ article.node.Author }.</span></p>
                    <h2>{ article.node.Title }</h2>
                    <p className="article">{ article.node.Description }</p>
                    <div>
                      <ButtonBlog  
                        to={ `/blog/${urlSlug( article.node.Title)}` }>
                          Read More 
                      </ButtonBlog>
                    </div>
                  </BlogBody>
              </BlogContainer>
              </li>
            ))}
           
          </ul>
         </BlogSection>
    </Layout>

   
  )

}

export default Blog;