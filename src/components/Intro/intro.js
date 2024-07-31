import React from 'react';
import './intro.css';
import bg from '../../assets/myImg1.png';

const Intro = ({ isDarkMode }) => {
  const introStyle = {
    backgroundColor: isDarkMode ? 'white' : 'black', // Dark mode background
    color: isDarkMode ? 'black' : 'white', // Dark mode text color
  };

  return (
    <section id="intro" style={introStyle}>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>
          I'm <span className='introName'>Kavindu</span><br/>Frontend Developer
        </span>
        <p className='introPara'>
          I am an undergraduate student at <br />
          Sri Lanka Institute of Information Technology (SLIIT)
        </p>

        {/* Resume Download Button */}
        <a href="/KavinduCV.pdf" download>
          <button className='btn'>
            <img src='https://media.lordicon.com/icons/wired/outline/982-cv-curriculum-vitae-resume.gif' alt="Resume" className='btnImg' />
            <div>
              <img src='https://media4.giphy.com/media/MUKq4YyGZpMliFpvYa/giphy.gif?cid=6c09b952se5imib73h20ryp7n1e19zlfy6ph8lj3prn1yli8&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s' alt='intro' className='btnImg'/>
            </div>
          </button>
        </a>
        
        {/* Optional Link for contact section */}
        {/* <Link to="contact" smooth={true} duration={500}> */}
          {/* Add additional button or link if needed */}
        {/* </Link> */}
      </div>
      <img src={bg} alt='Profile' className='bg' />
    </section>
  );
}

export default Intro;
