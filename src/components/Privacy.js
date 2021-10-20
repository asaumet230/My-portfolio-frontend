import React from 'react';
import styled from '@emotion/styled';
import { v4 as uuidv4 } from 'uuid';


const PrivacyContent = styled.div`
    max-width: 120rem;
    width: 80%;
    margin: 3rem auto 4rem auto;

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


const Privacy = ({ data }) => {

    const content = data.strapiTerms.Content.split('///');

    return (
        <PrivacyContent>

                <h1>{ data.strapiTerms.Title }</h1>

                {content.map( paragraph => {

                  if( paragraph.includes('**')) {

                    return( <h4 className="bold aling" key={ uuidv4() }> { paragraph.replace('**', '',) }</h4>);

                  } else if (paragraph.includes('###')) {

                    return ( <h3 className="bold" key={ uuidv4() }> { paragraph.replace('###', '') }</h3>)

                  } else {

                     return ( <p className="justify" key={ uuidv4() }> { paragraph }</p>)

                  }
                })}
                
        </PrivacyContent>

    );
}

export default Privacy;