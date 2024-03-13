import React from 'react';
import './intro.css';
// import bg from '../../assets/A (3).png';
// import btnImg from '../../assets/search.png';
// import {Link} from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText"> I'm <span className="introName">Mag</span> <br/>Web Developer</span>
                <p className="introPara">I am a skilled professional specialising in custom websites for small businesses.
                </p>
                {/* <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg"/>Hire me</button></Link> */}
            </div>
            {/* <img src={bg} alt="Profile" className="bg" /> */}
        </section>
    )
}

export default Intro;