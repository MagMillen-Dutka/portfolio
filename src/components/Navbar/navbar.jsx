import React, {useState} from "react";
import './navbar.css';
// import logo from '../../assets/A.png';
import contactImg from '../../assets/gmail.png';
import Menu from '../../assets/menu.png'
import Resume from '../../assets/Resume.pdf';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    };

    const hideMenu = () => {
        setShowMenu(false);
    };
    return (
    <nav className="navbar">
        {/* <img src={logo} alt="logo" className="logo"/> */}
        <div className="menu">
           <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-185} duration={500} className='menuList'>Home</Link>
           <Link activeClass='active' to='about' spy={true} smooth={true} offset={-150} duration={500} className='menuList'>About</Link>
           <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-140} duration={500} className='menuList'>Portfolio</Link>
           <a href={Resume} target="_blank" rel="noopener noreferrer" className='menuList'>Resume</a>
        </div>
        <button className="contactBtn" onClick={() => {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
        <img src={contactImg} alt="" className="contactImg"/>Contact Me</button>

        <img src={Menu} alt="Menu" className="mobMenu" onClick={toggleMenu}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
           <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-185} duration={500} className='listItem' onClick={hideMenu}>Home</Link>
           <Link activeClass='active' to='about' spy={true} smooth={true} offset={-160} duration={500} className='listItem' onClick={hideMenu}>About</Link>
           <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-150} duration={500} className='listItem' onClick={hideMenu}>Portfolio</Link>
           <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-150} duration={500} className='listItem' onClick={hideMenu}>Contact</Link>
           <a href={Resume} target="_blank" rel="noopener noreferrer" className='listItem' onClick={hideMenu}>Resume</a>
        </div>
    </nav>
    )
}

export default Navbar;