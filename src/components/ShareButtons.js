import React from 'react';
import styled from '@emotion/styled';
import urlSlug from 'url-slug';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";


const ShareButtonsStyle = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;

    
    @media (min-width: 768px){
     position: fixed;
     left: 1.5rem;
     top: 12rem;
     bottom: 12rem;
     display: flex;
     flex-direction: column;
     justify-content: space-evenly;
    }
    
`;

const Share = styled.div`
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 100%;
    background-color: #2B4071;
    font-size: 1.2rem;
    font-weight: blod;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;

`

const ShareButtons = ({ Title, Description, Banner, }) => {


    return(

        <ShareButtonsStyle>

            <Share>
                Share
            </Share>

            <FacebookShareButton 
                url={`http://localhost:8000/blog/${ urlSlug( Title ) }`} 
                quote={ Description } 
                hashtag={`#${ Title }`}>
                <FacebookIcon size={45} round={true}/>
            </FacebookShareButton>

            <LinkedinShareButton
                url={`http://localhost:8000/blog/${ urlSlug( Title ) }`}
                title={ Title }
                summary={ Description }
                source= { 'Andres Saumet Portfolio' }>
                <LinkedinIcon size={45} round={true}/>
            </LinkedinShareButton>
                    
            <PinterestShareButton
                url={`http://localhost:8000/blog/${ urlSlug( Title ) }`}
                description={ Description }
                media={ Banner.localFile.childImageSharp.gatsbyImageData.images.fallback.src }>
                <PinterestIcon size={45} round={true}/>
            </PinterestShareButton>

            <RedditShareButton 
                url={`http://localhost:8000/blog/${ urlSlug( Title ) }`} 
                title={ Title }>
                <RedditIcon size={45} round={true} />
            </RedditShareButton>

            <TelegramShareButton 
                url={`http://localhost:8000/blog/${ urlSlug( Title ) }`} 
                title={ Title }>
                <TelegramIcon size={45} round={true} />      
            </TelegramShareButton>

            <TwitterShareButton 
                url={`http://localhost:8000/blog/${ urlSlug( Title ) }`} 
                title={ Title } 
                via={ Description }
                hashtags={ [`#${ Title }`] }>
                <TwitterIcon size={45} round={true} />
            </TwitterShareButton>

            <WhatsappShareButton 
                url={`http://localhost:8000/blog/${ urlSlug( Title ) }`} 
                title= { Title }>      
                <WhatsappIcon size={45} round={true} />
            </WhatsappShareButton>
                    
        </ShareButtonsStyle>   
    );
}

export default ShareButtons