import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";


import '../components/css/spinner.css'
import Layout from '../components/Layout';


const ContactSection = styled.div`

    margin: 2rem auto 4rem auto;
    max-width: 120rem;
    width: 90%;

    p {
      text-align: center;
      font-size: 3rem;
      margin: 0 0 4rem 0;
      font-family: 'Ubuntu Condensed', sans-serif;
    }
`;

const ContactContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5rem;

    // Mobile:
    @media (max-width: 768px){
      display: block;
      .image {
        display: none;
      }
    }
`;

const FormDiv = styled.div`
  padding: 1.5rem;

  .spinner{
    margin: 2rem auto;
  }

  .success {
    background-color: rgba(209, 250, 229, 1);
    color:rgba(5, 150, 105, 1);
    text-align: center;
    margin-top: 1rem;
    padding: 1rem;
    border: 1px solid rgba(5, 150, 105, 1);
    border-radius: 5px;
    i {
      margin-left: 0.5rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .error {
    padding: 0.8rem;
    background-color: rgba(254, 202, 202, 0.8);
    color: rgba(185, 28, 28, 1);
    border: 1px solid rgba(185, 28, 28, 1);
    text-align: center;
    text-transform: capitalize;
    border-radius: 5px;
    margin-top: 1rem;
  }

`;

const Campos = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin: 1rem 0 0.5rem 0;
  }

  input {
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    padding: 1rem;
    font-size: 1.6rem;
    color: #434242;
  }

  textarea {
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    padding: 1rem;
    color: #434242;
  }
` 

const ButtonSend = styled.button`
  margin-top: 2rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  background-color: #e65528;
  color:#fff;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  font-size: 1.4rem;

  &:hover {
    background-color: #e33c09;
  }
`;

const DivCaptcha = styled.div`
  margin: 2rem auto;
`;

const ContactPage = () => {  

  const [ userMessage, handleMessage ] = useState({
    userName:'',
    company:'',
    email:'',
    message:''
  });

  const [ errorMessage, handleError ] = useState(false);
  const [ errorRecaptcha, handleErrorRecaptcha ] = useState(false);
  const [ successMessage,  handleSuccess] = useState(false);
  const [ spinner, handleSpinner ] = useState(false);
  const [ recaptcha, handleRecaptcha ] = useState(null);

  const { userName, company, email, message } = userMessage;

  const onChange = e => {
    handleMessage({
      ...userMessage,
      [e.target.name]: e.target.value
    })

  };


  const sendForm = async (e) => {
    
    e.preventDefault();
   
  
    try { 

      if(userName.trim() === '' || email.trim() === '' ||  message.trim() === '' || recaptcha === null ) {

        handleError(true);
        handleErrorRecaptcha(true);
        setTimeout(() => {
          handleError(false);
          handleErrorRecaptcha(false);
        }, 2000);

        return
      }

      handleSpinner(true);
      
      await axios.post('https://getform.io/f/7ea74c7f-1c23-457a-a81c-e8ee06be5919', { 
        userName,
        company,
        email,
        message
       });

     await setTimeout(() => {

        handleSpinner(false)
        handleSuccess(true);

        // Reset the form:
        handleMessage({
          userName:'',
          company:'',
          email:'',
          message:''
        });

      }, 500);

      await  setTimeout(() => {
          handleSuccess(false);
        }, 3000);

    } catch (error) {
      console.log(error);
    }

  };

  return (

    <Layout>
         <ContactSection>
          <h1>Contact Me</h1>
          <p>I'll answer you soon...</p>

          <ContactContainer>
            <div className="image">
              <StaticImage 
                src="../images/shake.svg" 
                alt="contact-form"
                width={550}
                height={600}/>

           </div>
           <FormDiv>
               <Form onSubmit={sendForm} >
                 <Campos>
                    <label htmlFor="userName">Name:</label>
                    <input 
                      type="text" 
                      placeholder="your name" 
                      name="userName"
                      value={userName}
                      id="name"
                      onChange={onChange}/>
                 </Campos>
               
                <Campos>
                  <label htmlFor="company">Company:</label>
                  <input 
                    type="text" 
                    placeholder="company is optional" 
                    name="company"
                    value={company}
                    id="company"
                    onChange={onChange}/>
                </Campos>
                
                <Campos>
                  <label htmlFor="email" >Email:</label>
                  <input 
                    type="email" 
                    placeholder="your email"
                    name="email"
                    value={email}
                    id="email"
                    onChange={onChange}/>
                </Campos>
                 
                <Campos>
                  <label htmlFor="message">Message:</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    value={message}
                    cols={30} 
                    rows={10}
                    onChange={onChange}>
                  </textarea>
                </Campos>

                <DivCaptcha>
                   <ReCAPTCHA
                    sitekey="6Lchwd0cAAAAAJY52mW2Ywal7dWzLs1_dooY3wRY"
                    onChange={handleRecaptcha}
                  />
                </DivCaptcha>

                {errorMessage && (<div className="error"> All the fields are required </div>)}
                {errorRecaptcha && (<div className="error"> Check the Recaptcha Please! </div>)}

                <ButtonSend type="submit" >Send Message</ButtonSend>
               </Form>

              { spinner && (
              <div className="sk-chase spinner">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
              </div>) }

              {successMessage && (
                <div className="success">
                  Your message has been sent <i className="far fa-smile"></i>
                </div>
              )}

           </FormDiv>
          </ContactContainer>
         </ContactSection>
    </Layout>
  )
}

export default ContactPage;