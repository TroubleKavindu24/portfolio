import React from 'react';

const styles = {
  skillsSection: {
    overflow: 'hidden',
    width: '100vw',
    maxWidth: '65rem',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  skillTitle: {
    fontSize: '3rem',
    fontWeight: 600,
    paddingTop: '3rem',
    marginBottom: '1.5rem',
  },
  skillDesc: {
    fontWeight: 400,
    fontSize: '1rem',
    maxWidth: '90%',
    margin: '0 auto',
    padding: '0 1rem',
    lineHeight: '1.5',
  },
  skillBars: {
    margin: '1.5rem',
    width: '100vw',
    maxWidth: '80%',
    textAlign: 'left',
  },
  skillBar: {
    display: 'flex',
    alignItems: 'center',
    margin: '1rem 0',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    backgroundColor: 'rgb(50, 50, 50)',
  },
  skillBarImg: {
    borderRadius: '10px',
    objectFit: 'cover',
    height: '6rem',
    width: '6rem',
    marginRight: '1.5rem',
  },
  skillBarText: {
    fontSize: '1rem',
    fontWeight: 300,
  },
  skillBarHeading: {
    fontSize: '1.5rem',
    fontWeight: 500,
  },
};

const Skills = () => {
  return (
    <section id="skills" style={styles.skillsSection}>
      <span className='skillTitle' style={styles.skillTitle}>What I do</span>
      <span className='skillDesc' style={styles.skillDesc}>
        I'm a student at Sri Lanka Institute of Information Technology pursuing a degree in Information Technology, specializing in Information Technology. I am a highly motivated, organized, and hardworking individual. Skilled in Programming, Mobile Applications, Web Applications, and UI/UX designing. I have good analytical skills, the ability to work in a team, and diligence.
      </span>
      <div className='skillBars' style={styles.skillBars}>
        <div className='skillBar' style={styles.skillBar}>
          <img src='https://cdn.dribbble.com/users/1299339/screenshots/16791438/shot.gif' className='skillBarImg' style={styles.skillBarImg} />
          <div className='skillBarText'>
            <h2 style={styles.skillBarHeading}>UI/UX Design</h2>
            <p style={styles.skillBarText}>I design user interfaces using Figma and Adobe XD.</p>
          </div>
        </div>
        <div className='skillBar' style={styles.skillBar}>
          <img src='https://i.gifer.com/embedded/download/Yedc.gif' alt='Programming' className='skillBarImg' style={styles.skillBarImg} />
          <div className='skillBarText'>
            <h2 style={styles.skillBarHeading}>Programming</h2>
            <p style={styles.skillBarText}>Skilled in various programming languages and technologies.</p>
          </div>
        </div>
        <div className='skillBar' style={styles.skillBar}>
          <img src='https://i.gifer.com/6ELx.gif' alt='Web Development' className='skillBarImg' style={styles.skillBarImg} />
          <div className='skillBarText'>
            <h2 style={styles.skillBarHeading}>Web Development</h2>
            <p style={styles.skillBarText}>Experienced in developing web applications and platforms.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;
