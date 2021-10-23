import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { v4 as uuidv4 } from 'uuid';

import Layout from '../components/Layout';
import SeoComponent from '../components/SeoComponent';


const TermsDiv = styled.div`
    max-width: 120rem;
    margin: 3rem auto 3rem auto;
    width: 85%;

    h1 {
        margin-bottom: 2rem;
    }
    .bold{
        font-weight: bold;
    }
    .aling {
        text-align: left;
        margin-left: 1rem;
    }

    .justify {
        text-align: justify;
    }
`;

const TemrsConditions = () => {

    const data = useStaticQuery(graphql`
    
        query Terms {
            strapiTerms(id: {eq: "Terms_2"}) {
                id
                Content
                Title
            }
            site {
            siteMetadata {
                image
            }
        }
    }
    `);

    const{ Title, Content } = data.strapiTerms;
    const paragraphs = Content.split('///');

    const otherData = {
        title:'Terms and Conditions',
        description: 'on this page you will find our terms and conditions',
        image: data.site.siteMetadata.image,
        url:'https://www.andressaumet.com/terms-conditions',
        article: false
    }

    return(

        <Layout>
            <SeoComponent otherData={ otherData }/>
            <TermsDiv>

                <h1>{ Title }</h1>
               {paragraphs.map( paragraph => {

                  if( paragraph.includes('**')) {

                    return( <h4 className="bold aling" key={ uuidv4() }> { paragraph.replace('**', '',) }</h4>);

                  } else if (paragraph.includes('###')) {

                    return ( <h2 className="bold" key={ uuidv4() }> { paragraph.replace('###', '') }</h2>)

                  } else if (paragraph.includes('&&&')){

                    return ( <h3 className="bold" key={ uuidv4() }> { paragraph.replace('&&&', '') }</h3>)

                  } else {

                     return ( <p className="justify" key={ uuidv4() }> { paragraph }</p>)

                  }
                })}

            </TermsDiv>


        </Layout>
    );
}

export default TemrsConditions;