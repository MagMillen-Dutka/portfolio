import React from 'react';
import './portfolio.css';
import Portfolio1 from '../../assets/Agency.jpg';
import Portfolio2 from '../../assets/Wonder.jpg';
import Portfolio3 from '../../assets/Boutique.jpg';
import Portfolio4 from '../../assets/Greyscale.jpg';

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h2 className="portfolioTitle">Portfolio</h2>
                <span className="portfolioDescription"></span>
                <div className="portfolioGrid">
                    <div className="portfolioItem">
                        <a href="https://1.augamwebstudios.com/" target="_blank" rel="noopener noreferrer">
                            <img src={Portfolio1} alt="Job Website" className="portfolioImg" />
                        </a>
                        <a href="https://1.augamwebstudios.com/" target="_blank" rel="noopener noreferrer">
                             
                        </a>
                    </div>
                    <div className="portfolioItem">
                        <a href="https://7.augamwebstudios.com/" target="_blank" rel="noopener noreferrer">
                            <img src={Portfolio2} alt="Coding Quiz" className="portfolioImg" />
                        </a>
                        <a href="https://7.augamwebstudios.com/" target="_blank" rel="noopener noreferrer">
                           
                        </a>
                    </div>    
                    <div className="portfolioItem">
                        <a href="https://10.augamwebstudios.com/" target="_blank" rel="noopener noreferrer">
                            <img src={Portfolio3} alt="Disney API Quiz" className="portfolioImg" />
                        </a>
                        <a href="https://10.augamwebstudios.com/" target="_blank" rel="noopener noreferrer">
                            
                        </a>
                    </div>
                    <div className="portfolioItem">
                        <a href="https://6.augamwebstudios.com/" target="_blank" rel="noopener noreferrer">
                            <img src={Portfolio4} alt="Password Generator" className="portfolioImg" />
                        </a>
                        <a href="https://6.augamwebstudios.com/" target="_blank" rel="noopener noreferrer">
                            
                        </a>
                    </div>
                    
                </div>
                {/* <button className="portfolioBtn">See More</button> */}

        </section>
    );
}

export default Portfolio