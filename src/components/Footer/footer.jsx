import React from 'react';
import './footer.css';
import LinkedIn from '../../assets/Linkedin-logo-1.png';
import GitHub from '../../assets/github-logo-1.png';

const Footer = () => {
    return(
        <footer className="footer">
            Copyright &#169; 2024 Simon Moore
            <div className="links">
                        <a href="https://www.linkedin.com/in/simon-moore-50228736/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedIn} alt="LinkedIn" className="link" />
                        </a>
                        <a href="https://github.com/simonmoore23" target="_blank" rel="noopener noreferrer">
                            <img src={GitHub} alt="GitHub" className="link" />
                        </a>
                    </div>
        </footer>
    )
}

export default Footer