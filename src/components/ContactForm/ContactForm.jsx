import './ContactForm.scss';
import ButtonMailto from '../ButtonMailto/ButtonMailto';
import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/github';
import 'react-social-icons/linkedin';
import 'react-social-icons/instagram';

const ContactForm = () => {
    
    return (
      <div className="container">
        <h1>Find me Online</h1>
        <div className="contact">
          <div className="contact__email contact__div">
            <h2>Email Me</h2>
              <ButtonMailto label="Send a Message" mailto="mailto:elysedesr@gmail.com" />
          </div>
          <div className="contact__social contact__div">
            <h2>Social Links</h2>
              <div className="contact__social-links">
                <SocialIcon url="www.github.com" href="https://github.com/elysedes" bgColor="none" fgColor="#2d2d2d" ></SocialIcon>
                <SocialIcon url="www.linkedin.com" href="https://www.linkedin.com/in/elyse-d/" bgColor="none" fgColor="#2d2d2d" ></SocialIcon>
                <SocialIcon url="www.instagram.com" href="https://www.instagram.com/elysedesr/" bgColor="none" fgColor="#2d2d2d" ></SocialIcon>
              </div>
          </div>
        </div>
      </div>  
    );
  };
  export default ContactForm;