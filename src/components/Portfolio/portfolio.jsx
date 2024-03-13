import React from 'react';
import './portfolio.css';
import Portfolio1 from '../../assets/clowning.png';
import Portfolio2 from '../../assets/code-quiz.png';
import Portfolio3 from '../../assets/disney-quiz.png';
import Portfolio4 from '../../assets/password-gen.png';
import Portfolio5 from '../../assets/weather-dashboard.png';
import Portfolio6 from '../../assets/work-sched.png';

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h2 className="portfolioTitle">Portfolio</h2>
                <span className="portfolioDescription">Here are some examples for my frontend development work.</span>
                <div className="portfolioGrid">
                    <div className="portfolioItem">
                        <a href="https://still-depths-15165-644cc0ba8436.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src={Portfolio1} alt="Job Website" className="portfolioImg" />
                        </a>
                        <a href="https://github.com/simonmoore23/clowning-around-entertainment-job-board" target="_blank" rel="noopener noreferrer">
                             GitHub Repo
                        </a>
                    </div>
                    <div className="portfolioItem">
                        <a href="https://simonmoore23.github.io/sm-web-apis-code-quiz/" target="_blank" rel="noopener noreferrer">
                            <img src={Portfolio2} alt="Coding Quiz" className="portfolioImg" />
                        </a>
                        <a href="https://github.com/simonmoore23/sm-web-apis-code-quiz" target="_blank" rel="noopener noreferrer">
                            GitHub Repo
                        </a>
                    </div>    
                    <div className="portfolioItem">
                        <a href="https://simonmoore23.github.io/Disney-Image-Quiz-Game/" target="_blank" rel="noopener noreferrer">
                            <img src={Portfolio3} alt="Disney API Quiz" className="portfolioImg" />
                        </a>
                        <a href="https://github.com/simonmoore23/Disney-Image-Quiz-Game" target="_blank" rel="noopener noreferrer">
                            GitHub Repo
                        </a>
                    </div>
                    <div className="portfolioItem">
                        <a href="https://simonmoore23.github.io/SM-JS-Pword-Gen/" target="_blank" rel="noopener noreferrer">
                            <img src={Portfolio4} alt="Password Generator" className="portfolioImg" />
                        </a>
                        <a href="https://github.com/simonmoore23/SM-JS-Pword-Gen" target="_blank" rel="noopener noreferrer">
                            GitHub Repo
                        </a>
                    </div>
                    <div className="portfolioItem">
                        <a href="https://simonmoore23.github.io/server-side-api-weather-dashboard/" target="_blank" rel="noopener noreferrer"> 
                            <img src={Portfolio5} alt="Weather Dashboard" className="portfolioImg" />
                        </a>
                        <a href="https://github.com/simonmoore23/server-side-api-weather-dashboard" target="_blank" rel="noopener noreferrer">
                            GitHub Repo
                        </a>
                    </div>
                    <div className="portfolioItem">
                        <a href="https://simonmoore23.github.io/work-day-scheduler/ " target="_blank" rel="noopener noreferrer">
                            <img src={Portfolio6} alt="Workday Scheduler" className="portfolioImg" />
                        </a>
                        <a href="https://github.com/simonmoore23/work-day-scheduler" target="_blank" rel="noopener noreferrer">
                            GitHub Repo
                        </a>
                    </div>
                </div>
                {/* <button className="portfolioBtn">See More</button> */}

        </section>
    );
}

export default Portfolio