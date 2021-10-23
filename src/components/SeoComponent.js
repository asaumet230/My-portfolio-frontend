import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
// import SchemaOrg from './SchemaOrg';

const SeoComponent = ( { otherData } ) => {

    const data = useStaticQuery(graphql`
        query SeoQuery {
            site {
                siteMetadata {
                    author
                    description
                    image
                    siteUrl
                    title
                    twitterUsername
                }
            }
        }
    `);

  
    const  { title, description, image, siteUrl, author, twitterUsername } = data.site.siteMetadata;

  const [ titlePage, setTitle ] = useState(null);
  const [ descriptionPage, setDescription ] = useState(null);
  const [ imagePage, setImage ] = useState(null);
  const [ url, setUrl ] = useState(null);
  const [ authorPage, setAuthor ] = useState(null);
  const [ twitterUsernamePage, setTwitterUsername ] = useState(null);
  const [ locale, setLocale ] = useState(null);
  const [ siteName, setSiteName ] = useState(null);
  const [ card, setCard ] = useState(null);
  const [ label1, setLabel1 ] = useState(null);
  const [ data1, setData1 ] = useState(null);

  const [ article, setArticle ] = useState(false);  

  useEffect(() => {

    setTitle( title );
    setDescription( description ) ;
    setImage( image );
    setUrl( siteUrl ); 
    setAuthor( author );
    setTwitterUsername( twitterUsername );
    setLocale( 'us_EN' );
    setSiteName( 'Andres Saumet Full Stack Developer' );
    setCard( 'summary_large_image' );
    setLabel1( 'Write By' );
    setData1( 'Andres Saumet' );

    if( otherData !== '' ) {

      setTitle( otherData.title );
      setDescription( otherData.description );
      setImage( otherData.image );
      setUrl( otherData.url ); 
      setArticle( otherData.article );
    }

   }, [ title, description, image, siteUrl, author, twitterUsername, otherData ]);
   

    return (
        <>
          <Helmet>
            {/* General tags */}
            <title>{ titlePage }</title>
            <meta name="description" content={ descriptionPage } />
            <meta name="image" content={ imagePage } />

            {/* OpenGraph tags */}
            <meta property="og:url" content={ url } />
            { article ? <meta property="og:type" content="article" /> : null }
            <meta property="og:title" content={ titlePage } />
            <meta property="og:author" content={ authorPage } />
            <meta property="og:description" content={ descriptionPage } />
            <meta property="og:image" content={ imagePage } />
            <meta property="og:locale" content= { locale }/>
            <meta property="og:site_name" content= {  siteName }/>
    
            {/* Twitter Card tags */}
            <meta name="twitter:card" content={ card } />
            <meta name="twitter:creator" content={ twitterUsernamePage } />
            <meta name="twitter:site" content={ twitterUsernamePage } />
            <meta name="twitter:title" content={ titlePage } />
            <meta name="twitter:label1" content={ label1 }/>
            <meta name="twitter:data1" content={ data1 }/>
            <meta name="twitter:description" content={ descriptionPage } />
            <meta name="twitter:image" content={ imagePage  } />
          </Helmet>
          {/* <SchemaOrg
            isBlogPost={isBlogPost}
            url={url}
            title={title}
            image={image}
            description={description}
            datePublished={datePublished}
            canonicalUrl={seo.canonicalUrl}
            author={seo.author}
            organization={seo.organization}
            defaultTitle={seo.title}
          /> */}
        </>
    );
}



export default SeoComponent;