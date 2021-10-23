import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Privacy from '../components/Privacy';
import SeoComponent from '../components/SeoComponent';



const PrivacyPolicy = () => {

    const data = useStaticQuery(graphql`
        query MyPrivacy {
            strapiTerms(id: {eq: "Terms_1"}) {
                Content
                Title
                id
            }
            site {
            siteMetadata {
                image
        }
      }
        }`);

    const otherData = {
        title:'Privacy Policy',
        description: 'on this page you will find our privacy policy',
        image: data.site.siteMetadata.image,
        url:'https://www.andressaumet.com/PrivacyPolicy',
        article: false
    }

    return(
        <Layout>
            <SeoComponent otherData={ otherData }/>
          <Privacy data={data}/>
        </Layout>
    );
}

export default PrivacyPolicy;