import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';


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
                    keywords
                    robots
                }
            }
        }
    `);

  
    const  { title, description, image, siteUrl, author, twitterUsername, keywords, robots } = data.site.siteMetadata;

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
  const [ keywordsPage, setKeywordsPage ] = useState('');
  const [ robotsPage, setRobotsPage ] = useState('');

  useEffect(() => {

    setTitle( title );
    setDescription( description ) ;
    setImage( image );
    setUrl( siteUrl ); 
    setAuthor( author );
    setTwitterUsername( twitterUsername );
    setKeywordsPage( keywords );
    setRobotsPage( robots );
    setLocale( 'en_US' );
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
      setKeywordsPage( otherData.keywords );
      setRobotsPage ( otherData.robots );
    }

   }, [ title, description, image, siteUrl, author, twitterUsername, keywords, robots, otherData ]);
   

    return (
        <>
          <Helmet>
            {/* General tags */}
            <title>{ titlePage }</title>
            <meta name="description" content={ descriptionPage } />
            <meta name="image" content={ imagePage } />
            <meta name="robots" content={ robotsPage } />
           { keywordsPage.length > 0 ? <meta name="keywords" content= { keywordsPage } /> : null }


            {/* OpenGraph tags */}
            <meta property="og:url" content={ url } />
            { article ? <meta property="og:type" content="article" /> : <meta property="og:type" content="website" /> }
            <meta property="og:title" content={ titlePage } />
            <meta property="og:author" content={ authorPage } />
            <meta property="og:description" content={ descriptionPage } />
            <meta property="og:image" content={ imagePage } />
            <meta property="og:locale" content= { locale }/>
            <meta property="og:site_name" content= { siteName }/>
    
            {/* Twitter Card tags */}
            <meta name="twitter:card" content={ card } />
            <meta name="twitter:creator" content={ twitterUsernamePage } />
            <meta name="twitter:site" content={ twitterUsernamePage } />
            <meta name="twitter:title" content={ titlePage } />
            <meta name="twitter:label1" content={ label1 }/>
            <meta name="twitter:data1" content={ data1 }/>
            <meta name="twitter:description" content={ descriptionPage } />
            <meta name="twitter:image" content={ imagePage  } />

            { titlePage === 'Andres Saumet | Full-Stack Developer' ? (
            <script type="application/ld+json">
              {`
                "@context": "https://schema.org/",
                "@type": "Person",
                "name": "Andres Saumet",
                "url": "https://www.andressaumet.com/",
                "image": "https://www.andressaumet.com/static/6b0a6b8c91766268e15a50aa67f2ae81/3cd29/PhotoMe-background-2.webp",
                "sameAs": [
                  "https://twitter.com/SaumetAndres",
                  "https://www.linkedin.com/in/andresfelipesaumet/",
                  "https://github.com/asaumet230",
                  "https://www.andressaumet.com/"
                ],
                "jobTitle": "Full-Stack Web Developer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "CHILO"
                }  
              `}
              </script>) : null }
          </Helmet>
       
        </>
    );
}



export default SeoComponent;