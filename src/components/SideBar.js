import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql, Link } from 'gatsby';
import urlSlug from 'url-slug';


const Aside =  styled.aside`
    margin-top: 1rem;
    text-align: center;
    border: 1px solid #e5e5e5;
    border-radius: 1rem;
    padding: 2rem 1.5rem;

    h3 {
        border-bottom: 1px solid #e5e5e5;
        text-transform: uppercase;
        font-weight: 300;
        margin-bottom: 2rem;
    }
    ul{
        list-style: circle;
        margin-left: 2rem;
    }

    ul li {
        padding-bottom: 1rem;
        text-align: left;
    }

    @media (max-width: 768px){
      ul li {
          text-align: left;
      }
    }
`; 

const LinkAside = styled(Link)`
    font-size: 1.6rem;
    text-decoration: none;
    color: #e65528;

    &:hover {
        color:#2B4071;
    }
`;


const SideBar = () => {

    const listArticles = useStaticQuery(graphql`

        query MyRecentArticles {
            allStrapiArticles(sort: {order: DESC, fields: published_at}) {
                nodes {
                    Title
                    id
                }
            }
        }
    `);

    const articles = listArticles.allStrapiArticles.nodes;

    return(

        <Aside>
            <h3>Recent Articles</h3>
            <ul>
                { articles.map( article => (

                    <li key={ article.id }><LinkAside to={`/blog/${urlSlug(article.Title)}`}>{ article.Title }. </LinkAside></li>

                ))}
            </ul>
        </Aside>

    );
}

export default SideBar;