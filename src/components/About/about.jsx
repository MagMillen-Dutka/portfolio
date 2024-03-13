import React from 'react';
import './about.css';
import Design from '../../assets/product-manager-1.png';
import Develop from '../../assets/project-manager-1.png';
import Frontend from '../../assets/fe-dev-1.png';


const About = () => {
    return (
        <section id='about'>
            <span className='skillTitle'>About</span>
            <span className='skillDescription'>I'm a professional Web Development specialist with experience designing, developing and implementing high-end websites for small businesses. All of my websites are designed to be responsive, so you can use them on any device including mobiles and tablets.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Design} alt="Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Designing</h2>
                        <p>Generating great ideas to make your website unique.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Develop} alt="Develop" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Developing</h2>
                        <p>Websites are made from the latest technologies to make your website responsive on any device including mobile and tablets.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Frontend} alt="Frontend" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Technologies</h2>
                        <p>I use the latest versions of HTML, CSS, JavaScript and React - examples are included below in my portfolio.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;