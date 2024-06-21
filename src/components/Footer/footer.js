import React from 'react';
import './contact.css';
import githubImage from '../../assets/github.png';
import linkedinImage from '../../assets/linkedin.png';
import resumeImage from '../../assets/rcb.png';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className='contact-title'>Contact</h1>
            <div className="contact-content">
                <div className="contact-left">
                    <p>Email: <a href="mailto:example@example.com">example@example.com</a></p>
                    <p>Phone: +1234567890</p>
                    <p>Location: City, Country</p>
                </div>
                <div className="contact-right">
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <img src={githubImage} alt="GitHub" className="contact-icon" />
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinImage} alt="LinkedIn" className="contact-icon" />
                    </a>
                    <a href="/path/to/your/resume.pdf" download>
                        <img src={resumeImage} alt="Resume" className="contact-icon" />
                    </a>
                </div>
            </div>
            <footer className="footer">
         Copyright &copy;  2024. All Rights Reserved.&nbsp; Made with &#10084;&#65039; by &nbsp; <span className="me">Rakesh</span>
     </footer>
        </div>
         

    );
};

export default Contact;
