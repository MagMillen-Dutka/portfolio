import React from 'react';
import './about.css';
import Product from '../../assets/product-manager-1.png';
import Project from '../../assets/project-manager-1.png';
import Frontend from '../../assets/fe-dev-1.png';


const About = () => {
    return (
        <section id='about'>
            <span className='skillTitle'>About</span>
            <span className='skillDescription'>I have over 10 years of experience managing cross-functional teams to deliver high-quality multimedia content tailored for diverse audiences. I have extensive experience working closely with clients on a strategic and creative level, solving problems proactively, and consistently exceeding expectations. I am knowledgeable about marketing, business strategy, communication, and financial management – as demonstrated throughout my career.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Product} alt="Product" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Product Management</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Project} alt="Project" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Project Management</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Frontend} alt="Frontend" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Frontend Development</h2>
                        <p>HTML, CSS, JavaScript, React - examples are included below in my portfolio.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;