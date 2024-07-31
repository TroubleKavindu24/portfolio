import React, { useState } from 'react';
import logo1 from '../../assets/logo1.png';
import menu from '../../assets/menu.png';
import { Link } from 'react-scroll';
import './navbar.css';

const NavBar = ({ isDarkMode, toggleTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  // const navBarStyle = {
  //   backgroundColor: isDarkMode ? 'black' : 'white',
  //   color: isDarkMode ? 'white' : 'black', 
  // };

  return (
    <div className='navbar' 
    // style={{navBarStyle}}
    >
      <nav className='navbar-content'>
        <img src={logo1} alt="logo" className='logo' />
        <div className="desktopMenu">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>My Role</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Projects</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }}>
          <img src='https://static.wixstatic.com/media/4a6942_be8aef6da1a6475387bd1f98ecf4d584~mv2.gif' alt="" className='desktopMenuImg' />
        </button>

        {/* <button className='theme-toggle-btn' onClick={toggleTheme}>
          {isDarkMode ? <img src='https://cdn-icons-png.freepik.com/512/6714/6714978.png' alt='light' className='light-btn'/> : <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHy1kulKGFspFD5skFeQ_G9RzsJZ4pmAEmnQ&s' alt='dark' className='light-btn'/>}
        </button> */}
        

        <img src={menu} alt="menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
        <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>My Role</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Projects</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>About</Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
