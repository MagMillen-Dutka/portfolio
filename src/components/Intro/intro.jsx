import React from 'react';
import './intro.css';
import bg from '../../assets/me-alpha.png';
import btnImg from '../../assets/search.png';
import {Link} from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText"> I'm <span className="introName">Simon</span> <br/>Product Manager</span>
                <p className="introPara">I am a skilled professional with experience managing cross-functional teams.
                </p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg"/>Hire me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;