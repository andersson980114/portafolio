import React from 'react';
import styled from 'styled-components';
import { Link } from 'styled-components';

const Contact = () => {
    return (
      <ContactSection id="contact">
        <ContactTitle>CONTACT</ContactTitle>
  
        <ContactColumns>
          <ContactColumn>
            <ContactInfo>
              <i className="bi bi-envelope-fill"></i> anderson.980114@gmail.com
            </ContactInfo>
            <ContactInfo> 
              <StyledLink href="https://www.linkedin.com/in/andersson-steven-cordoba-rivera-8a2478225/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i> Andersson Cordoba 
              </StyledLink>
            </ContactInfo>
            <ContactInfo> 
              <StyledLink href="https://github.com/andersson980114" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i> andersson980114
              </StyledLink>
            </ContactInfo>
          </ContactColumn>
  
          <ContactColumn>
            <ContactInfo><i className="bi bi-whatsapp"></i> +57 317 432 0208</ContactInfo>
            <ContactInfo><i className="bi bi-geo-alt-fill"></i> Buga, Colombia </ContactInfo>
          </ContactColumn>
        </ContactColumns>
      </ContactSection>
    );
  };
 
const ContactSection = styled.footer`
background-color: #00001a;
color: white;
text-align: center;
padding: 40px 20px;
`;

const ContactColumns = styled.div`
display: flex;
justify-content: space-around;

@media (max-width: 768px) {
  flex-direction: column;
  align-items: center;
}
`;

const ContactColumn = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 0 20px;

@media (max-width: 768px) {
  margin-bottom: 20px;
  align-items: center;
}
`;

const ContactTitle = styled.h2`
font-size: 2.5em;
margin-bottom: 20px;
`;

const ContactInfo = styled.p`
font-size: 1.2em;
margin: 5px 0;
`;

const StyledLink = styled.a`
color: white;
text-decoration: none;

&:hover {
  text-decoration: none;
}
`;

export default Contact;
