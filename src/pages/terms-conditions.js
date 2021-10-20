import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { v4 as uuidv4 } from 'uuid';

import Layout from '../components/Layout';


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
        }
    `);

    const{ Title, Content } = data.strapiTerms;
    const paragraphs = Content.split('///');

    return(

        <Layout>
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