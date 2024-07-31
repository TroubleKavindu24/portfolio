import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm('service_ixwiv0e', 'template_8la8rek', form.current, {
            publicKey: 'Snosdh0qFlu3czrEQ',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert('Message sent successfully!');
            },
            (error) => {
              console.log('FAILED...', error.text);
              alert('Message failed to send. Please try again.');
            },
          );
    };

    const styles = {
        section: {
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
        contactPage: {
            minHeight: 'calc(100vh - 4rem)',
            width: '100vw',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
        },
        contactPageTitle: {
          fontSize: '3rem',
          fontWeight: 600,
          paddingTop: '3rem',
          marginBottom: '1.5rem',
        },
        clientDesc: {
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
            height: '8rem',
            width: '6rem',
            marginRight: '1.5rem',
        },
        uiuxCourse: {
          borderRadius: '10px',
          objectFit: 'cover',
          height: '8rem',
          width: '12rem',
          marginRight: '1.5rem',
      },
      gc: {
        borderRadius: '50px',
        objectFit: 'cover',
        height: '8rem',
        width: '8rem',
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
        contactDesc: {
            padding: '1rem',
            fontSize: '1rem',
            fontWeight: 300,
        },
        contactForm: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '90vw',
            maxWidth: '60rem',
            marginTop: '1rem',
        },
        input: {
            fontSize: '1rem',
            width: '100%',
            maxWidth: '40rem',
            margin: '0.5rem 0',
            padding: '0.75rem 1rem',
            border: '1px solid #ccc',
            borderRadius: '0.5rem',
            background: '#f5f5f5',
            color: '#333',
        },
        submitBtn: {
            background: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            margin: '1rem 0',
            padding: '0.75rem 2.5rem',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        submitBtnHover: {
            background: '#0056b3',
        },
        links: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '1rem',
        },
        link: {
            objectFit: 'cover',
            height: '3rem',
            width: '3rem',
            margin: '0 0.75rem',
            cursor: 'pointer',
        },
    };

    return (
        <section style={styles.section}>
            <div style={styles.skillBars}>
                <div id="clients">
                  <center>
                    <h1 style={styles.contactPageTitle}>About me</h1>
                    <p style={styles.clientDesc}>
                        I'm a Student at Sri Lanka Institute of Information Technology pursuing a degree in Information Technology, specialising in Information Technology. I am a highly motivated, organised and hardworking individual undergraduate. Skilled in Programming, Mobile Applications, Web Applications, and UI/UX designing. I have good analytical skills, the ability to work in a team, and diligence.
                    </p>
                  </center>
                    
                </div>
            </div>
            <div style={styles.skillBar}>
              <img src='https://upload.wikimedia.org/wikipedia/en/a/a6/SLIIT_Logo_Crest.png' alt="SLIIT Logo" style={styles.skillBarImg} />
                <div style={styles.skillBarText}>
                    <h2 style={styles.skillBarHeading}>Undergraduate student</h2>
                    <p style={styles.skillBarText}>I'm pursuing BSc (Hons) in Information Technology Specialising in Information Technology.<br /> I am a third-year student.</p>
                </div>
                <div style={styles.skillBar}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wI287vOWaLAzv2CzHJRRhrcmyqRtW37GAA&s' alt="Internship" style={styles.skillBarImg} />
                  <div style={styles.skillBarText}>
                    <h2 style={styles.skillBarHeading}>UI/UX designer and developer</h2>
                    <p style={styles.skillBarText}>I'm currently completing my internship in Bank Of Ceylon (Head office) Innovation lab.</p>
                </div>
              </div>
            </div>
            <h3>Cetification - Skills</h3>

            <div style={styles.skillBar}>
                <img src='https://miro.medium.com/v2/resize:fit:1100/1*4Fl8H1Q_ZvhDoSSRBFmPhw.png' alt="UIUX" style={styles.uiuxCourse} />
                  <div style={styles.skillBarText}>
                    <h2 style={styles.skillBarHeading}>UI/UX course(online)</h2>
                    <p style={styles.skillBarText}>Completed UI/UX course(Great Learning Academy)</p>
                </div>
              </div>

              <div style={styles.skillBar}>
                <img src='https://miro.medium.com/v2/resize:fit:1000/0*8v1xNP18Ovj3wg6K.gif' alt="mongodb" style={styles.uiuxCourse} />
                  <div style={styles.skillBarText}>
                    <h2 style={styles.skillBarHeading}>MongoDB course(online)</h2>
                    <p style={styles.skillBarText}>Completed MongoDB certification courses level 1 - 12.</p>
                </div>
              </div>

              <div style={styles.skillBar}>
                <img src='https://www.dignited.com/wp-content/uploads/2018/01/microsoft-office-2016-for-mac.jpg' alt="msoffice" style={styles.uiuxCourse} />
                  <div style={styles.skillBarText}>
                    <h2 style={styles.skillBarHeading}>MS office 200X</h2>
                    <p style={styles.skillBarText}>MS word, MS powerpoint, MS onenote, MS outlook and<br/> MS excel.</p>
                </div>
              </div>

              <h3>Extra-Curricular Activities</h3>

            <div style={styles.skillBar}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsohd41fmgRNyCLFQc6nLz8IseGrygBO1CVw&s' alt="gc" style={styles.gc} />
                  <div style={styles.skillBarText}>
                    <h2 style={styles.skillBarHeading}>Gamer</h2>
                    <p style={styles.skillBarText}>PUBGM player and Content Department member of<br/>SLIIT Gaming Community.</p>
                </div>
              </div>

              <h3>Languages and Tools</h3>

              <div style={styles.skillBar}>
                <div style={styles.skillBarText}>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg" alt="android" width="40" height="40"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40"/>
                  <img src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" alt="azure" width="40" height="40"/> 
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/>
                  <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/>
                  <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
                  <img src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" width="40" height="40"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> 
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
                  <img src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" alt="kotlin" width="40" height="40"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg" alt="oracle" width="40" height="40"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40"/>
                  <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> 
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/>
                  <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/>
                  <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/>
                  <img src="https://cdn.worldvectorlogo.com/logos/adobe-xd.svg" alt="xd" width="40" height="40"/>
                </div>
              </div>
            
            <div id="contact">
                <h1 style={styles.contactPageTitle}>Contact Me</h1>
                <span style={styles.contactDesc}>Please fill out the form below to discuss any work opportunities</span>
                <form ref={form} onSubmit={sendEmail} style={styles.contactForm}>
                    <input type="text" name='your_name' placeholder='Your Name' required style={styles.input} />
                    <input type="email" name='your_email' placeholder='Your Email' required style={styles.input} />
                    <textarea name="message" rows="5" placeholder='Your Message' required style={styles.input}></textarea>
                    <button type='submit' style={styles.submitBtn}>Submit</button>
                    <div style={styles.links}>
                        <a href="https://web.facebook.com/kavindu.kavindu.129/">
                            <img src='https://cliply.co/wp-content/uploads/2019/07/371907490_FACEBOOK_ICON_TRANSPARENT_400.gif' alt="Facebook" style={styles.link} />
                        </a>
                        <a href="https://www.linkedin.com/in/kavindu-rukshan-1/">
                            <img src='https://cliply.co/wp-content/uploads/2021/02/372102050_LINKEDIN_ICON_TRANSPARENT_1080.gif' alt="LinkedIn" style={styles.link} />
                        </a>
                        <a href="https://www.instagram.com/kavindu.kavindu.129/">
                            <img src='https://i.pinimg.com/originals/4e/94/67/4e9467f024454dfa2b0a0e61074aebd1.gif' alt="Instagram" style={styles.link} />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
