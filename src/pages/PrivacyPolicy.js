import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Privacy from '../components/Privacy';



const PrivacyPolicy = () => {

    const data = useStaticQuery(graphql`
        query MyPrivacy {
            strapiTerms(id: {eq: "Terms_1"}) {
                Content
                Title
                id
            }
        }`);

    return(
        <Layout>
          <Privacy data={data}/>
        </Layout>
    );
}

export default PrivacyPolicy;