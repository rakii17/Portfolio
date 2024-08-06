import React from 'react';
import './footer.css';
import githubImage from '../../assets/github.png';
import linkedinImage from '../../assets/linkedin.png';
import resumeImage from '../../assets/cv-pdf.png';
import resume from '../../assets/Data_Analyst_Resume.pdf';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className='contact-title'>Contact</h1>
            <div className="contact-content">
                <div className="contact-left">
                    <p>Email: <a href="mailto:rakesh.717.02@gmail.com">rakesh.717.02@gmail.com</a></p>
                    <p>Phone: +91 6361478706</p>
                    <p>Location: Bengaluru &#10084;&#65039;</p>
                </div>
                <div className="contact-right">
                    
                    <a href="https://www.linkedin.com/in/rakesh-m-17j/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinImage} alt="LinkedIn" className="contact-icon" />
                    </a>

                    <a href="https://github.com/rakii17" target="_blank" rel="noopener noreferrer">
                        <img src={githubImage} alt="GitHub" className="contact-icon" />
                    </a>

                    <a href={resume} target='_blank' rel="noopener noreferrer">
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
