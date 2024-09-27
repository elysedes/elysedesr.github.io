import './Footer.scss';
import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/github';
import 'react-social-icons/linkedin';
import 'react-social-icons/instagram';


const Footer = () => {

    return (
        <div className="footer-container">
            <footer className="footer">
                <div className="footer__copyright">
                    <p className="footer__text">Designed and Developed by Elyse Desrochers</p>
                    <p className="footer__text">©2024 Elyse Desrochers Art & Design</p>
                </div>
                <div className="footer__social">
                    <SocialIcon url="www.github.com" href="https://github.com/elysedes" bgColor="none" fgColor="white" ></SocialIcon>
                    <SocialIcon url="www.linkedin.com" href="https://www.linkedin.com/in/elyse-d/" bgColor="none" fgColor="white" ></SocialIcon>
                    <SocialIcon url="www.instagram.com" href="https://www.instagram.com/elysedesr/" bgColor="none" fgColor="white" ></SocialIcon>
                </div>
            </footer>
        </div>
    )

}

export default Footer; 