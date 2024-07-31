import React from 'react';
import sm1 from '../../assets/shoppingMall/sm1.JPG';
import sm2 from '../../assets/shoppingMall/sm2.JPG';
import sm3 from '../../assets/shoppingMall/sm3.JPG';
import sm4 from '../../assets/shoppingMall/sm4.JPG';
import sm5 from '../../assets/shoppingMall/sm5.JPG';
import sm6 from '../../assets/shoppingMall/sm6.JPG';
import smp from '../../assets/socialMedia/smp.png';
import smp1 from '../../assets/socialMedia/smp1.png';
import smp2 from '../../assets/socialMedia/smp2.png';
import smp3 from '../../assets/socialMedia/smp3.png';
import qr from '../../assets/qr/qr.png';
import ch1 from '../../assets/ch/ch1.png';
import ch2 from '../../assets/ch/ch2.png';
import ch3 from '../../assets/ch/ch3.png';
import ch4 from '../../assets/ch/ch4.png';
import ch5 from '../../assets/ch/ch5.png';
import ch6 from '../../assets/ch/ch6.png';
import ch7 from '../../assets/ch/ch7.png';
import ch8 from '../../assets/ch/ch8.png';
import ImageSlider from '../slider/ImageSlider';

const styles = {
  worksSection: {
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
  workTitle: {
    fontSize: '3rem',
    fontWeight: 600,
    paddingTop: '3rem',
    marginBottom: '1.5rem',
  },
  workDesc: {
    fontWeight: 400,
    fontSize: '1rem',
    maxWidth: '90%',
    margin: '0 auto',
    padding: '0 1rem',
    lineHeight: '1.5',
  },
  workBars: {
    margin: '1.5rem',
    width: '100vw',
    maxWidth: '80%',
    textAlign: 'left',
  },
  workBar: {
    display: 'flex',
    alignItems: 'center',
    margin: '1.5rem 0',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    backgroundColor: 'rgb(50, 50, 50)',
  },
  projBarImg: {
    borderRadius: '10px',
    objectFit: 'cover',
    height: '12rem',
    width: '24rem',
    marginRight: '1.5rem',
  },
  workBarImg: {
    borderRadius: '10px',
    objectFit: 'cover',
    height: '4rem',
    width: '4rem',
    marginRight: '1.5rem',
  },
  workBarText: {
    fontSize: '1rem',
    fontWeight: 300,
  },
  workBarHeading: {
    fontSize: '1.5rem',
    fontWeight: 500,
  },
  workBarHeading2: {
    fontSize: '1rem',
    fontWeight: 400,
  },
  projBarImgContainer: {
    width: '24rem',
    height: '12rem',
  },
  sliderContainer: {
    marginRight: '1.5rem', // Add margin to the slider
  },
};

const works = () => {
  const shoppingMall = [
    sm1, sm2, sm3, sm4, sm5, sm6,
  ];

  const socialmedia = [
    smp1, smp2, smp3, smp,
  ];

  const visitors = [
    'https://i.pinimg.com/originals/0d/26/cc/0d26ccd6d89e42970e2e946145e47b72.gif'
  ];

  const complainH = [
    ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8,
  ];

  return (
    <section id="works" style={styles.worksSection}>
      <span className='workTitle' style={styles.workTitle}>Projects I did / do</span>
      <span className='workDesc' style={styles.workDesc}>
        I'm a student at Sri Lanka Institute of Information Technology pursuing a degree in Information Technology, specializing in Information Technology. I am a highly motivated, organized, and hardworking individual. worked in Programming, Mobile Applications, Web Applications, and UI/UX designing. I have good analytical works, the ability to work in a team, and diligence.
      </span>
      <div className='workBars' style={styles.workBars}>
        <div className='workBar' style={styles.workBar}>
          <div style={styles.sliderContainer}>
            <ImageSlider images={visitors} width="20rem" height="12rem" /> 
          </div>
          <div className='workBarText'>
            <h2 style={styles.workBarHeading}>
              Visitors System for Bank Of Ceylon
            </h2>
            <p style={styles.workBarText}>
              In that system I updated the details of the outside and inside visitors of the bank.
            </p><br/>
            <div>
              <h6 style={styles.workBarHeading2}>
                Languages I used
              </h6>
            </div>
            <img src="https://miro.medium.com/v2/resize:fit:960/1*h7GMfvHKvLPkynG9NvULJw.gif" alt="react" className='workBarImg' style={styles.workBarImg} />
            <img src="https://cdn-dpdal.nitrocdn.com/GyhcCIiZNdTIbeWlnyLmouvoGPRcWSwV/assets/images/optimized/rev-7e2888a/www.emizentech.com/blog/wp-content/uploads/sites/2/2022/06/expressjs.jpg" alt="express" className='workBarImg' style={styles.workBarImg} />
            <img src="https://user-images.githubusercontent.com/74038190/212257460-738ff738-247f-4445-a718-cdd0ca76e2db.gif" alt="nodejs" className='workBarImg' style={styles.workBarImg} />
            <img src="https://airony.ai/wp-content/uploads/2022/11/InsistentSardonicAppaloosa-max-1mb.gif" alt="sql" className='workBarImg' style={styles.workBarImg} />
          </div>
        </div>
        <div className='workBar' style={styles.workBar}>
          
          <div className='workBarText'>
            <h2 style={styles.workBarHeading}>
              Online fully complex ShoppingMall
            </h2>
            <p style={styles.workBarText}>
              An online shopping mall is a digital platform where multiple retailers or brands come together to sell their products or services to consumers over the internet. It serves as a centralized marketplace, offering a wide range of goods and services, often categorized by type or theme.
            </p><br/>
            <div>
              <h6 style={styles.workBarHeading2}>
                Languages I used
              </h6>
            </div>
            <img src="https://miro.medium.com/v2/resize:fit:960/1*h7GMfvHKvLPkynG9NvULJw.gif" alt="react" className='workBarImg' style={styles.workBarImg} />
            <img src="https://cdn-dpdal.nitrocdn.com/GyhcCIiZNdTIbeWlnyLmouvoGPRcWSwV/assets/images/optimized/rev-7e2888a/www.emizentech.com/blog/wp-content/uploads/sites/2/2022/06/expressjs.jpg" alt="express" className='workBarImg' style={styles.workBarImg} />
            <img src="https://user-images.githubusercontent.com/74038190/212257460-738ff738-247f-4445-a718-cdd0ca76e2db.gif" alt="nodejs" className='workBarImg' style={styles.workBarImg} />
            <img src="https://airony.ai/wp-content/uploads/2022/11/InsistentSardonicAppaloosa-max-1mb.gif" alt="sql" className='workBarImg' style={styles.workBarImg} />
          </div>
          <div style={styles.sliderContainer}>
            <ImageSlider images={shoppingMall}  width="24rem" height="12rem" /> 
          </div>
        </div>
        <div className='workBar' style={styles.workBar}>
          <div style={styles.sliderContainer}>
            <ImageSlider images={socialmedia}  width="24rem" height="12rem"/> 
          </div>
          <div className='workBarText'>
            <h2 style={styles.workBarHeading}>
              Social media platform
            </h2>
            <p style={styles.workBarText}>
              Social media web application platform tailored for fitness enthusiasts to share their fitness journey, workouts, and healthy lifestyle tips as Users can post pictures and videos, Current workout status updates, Workout plan sharing, Meal plan sharing. These are the special things. (Spring Boot) based REST API and React.
            </p><br/>
            <div>
              <h6 style={styles.workBarHeading2}>
                Languages I used
              </h6>
            </div>
            <img src="https://miro.medium.com/v2/resize:fit:960/1*h7GMfvHKvLPkynG9NvULJw.gif" alt="react" className='workBarImg' style={styles.workBarImg} />
            <img src="https://raw.githubusercontent.com/Deathopex/Deathopex/main/java.gif" alt="java" className='workBarImg' style={styles.workBarImg} />
            <img src="https://cdn.dribbble.com/users/2084726/screenshots/11897843/media/f8a268a9e9a4cc3ab7b0c104a0301210.gif" alt="springboot" className='workBarImg' style={styles.workBarImg} />
            <img src="https://airony.ai/wp-content/uploads/2022/11/InsistentSardonicAppaloosa-max-1mb.gif" alt="sql" className='workBarImg' style={styles.workBarImg} />
          </div>
        </div>
        <div className='workBar' style={styles.workBar}>
          <div className='workBarText'>
            <h2 style={styles.workBarHeading}>
              QRcode generator
            </h2>
            <p style={styles.workBarText}>
              That application I created generates QR codes for any given URLs.
            </p><br/>
            <div>
              <h6 style={styles.workBarHeading2}>
                Languages I used
              </h6>
            </div>
            <img src="https://miro.medium.com/v2/resize:fit:960/1*h7GMfvHKvLPkynG9NvULJw.gif" alt="react" className='workBarImg' style={styles.workBarImg} />
            <img src="https://cdn-dpdal.nitrocdn.com/GyhcCIiZNdTIbeWlnyLmouvoGPRcWSwV/assets/images/optimized/rev-7e2888a/www.emizentech.com/blog/wp-content/uploads/sites/2/2022/06/expressjs.jpg" alt="express" className='workBarImg' style={styles.workBarImg} />
            <img src="https://user-images.githubusercontent.com/74038190/212257460-738ff738-247f-4445-a718-cdd0ca76e2db.gif" alt="nodejs" className='workBarImg' style={styles.workBarImg} />
          </div>          
          <img src={qr} alt='QR Code' className='projBarImg' style={styles.projBarImg} />
        </div>
        <div className='workBar' style={styles.workBar}>
          <img src='https://i.gifer.com/6ELx.gif' alt='Social media' className='projBarImg' style={styles.projBarImg} />
          <div className='workBarText'>
            <h2 style={styles.workBarHeading}>
              Shopping Cart
            </h2>
            <p style={styles.workBarText}>
              I created this mobile app for a shopping cart. The app can add items to the cart, add and subtract items, and calculate the total price.
            </p><br/>
            <div>
              <h6 style={styles.workBarHeading2}>
                Languages I used
              </h6>
            </div>
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*3x1QE3VzG5MWi5Qk6C-HLQ.gif" alt="kotlin" className='workBarImg' style={styles.workBarImg} />
            <img src="https://raw.githubusercontent.com/Deathopex/Deathopex/main/java.gif" alt="java" className='workBarImg' style={styles.workBarImg} />
            <img src="https://airony.ai/wp-content/uploads/2022/11/InsistentSardonicAppaloosa-max-1mb.gif" alt="sql" className='workBarImg' style={styles.workBarImg} />
          </div>
        </div>
        <div className='workBar' style={styles.workBar}>
          
          <div className='workBarText'>
            <h2 style={styles.workBarHeading}>
              Whole sale management system for ARROW COMPUTERS Pvt
            </h2>
            <p style={styles.workBarText}>
              The web application is developed for a computer shop to manage their daily sales updates. It includes admin panels and shopping item diversities.
            </p><br/>
            <div>
              <h6 style={styles.workBarHeading2}>
                Languages I used
              </h6>
            </div>
            <img src="https://miro.medium.com/v2/resize:fit:960/1*h7GMfvHKvLPkynG9NvULJw.gif" alt="react" className='workBarImg' style={styles.workBarImg} />
            <img src="https://cdn-dpdal.nitrocdn.com/GyhcCIiZNdTIbeWlnyLmouvoGPRcWSwV/assets/images/optimized/rev-7e2888a/www.emizentech.com/blog/wp-content/uploads/sites/2/2022/06/expressjs.jpg" alt="express" className='workBarImg' style={styles.workBarImg} />
            <img src="https://user-images.githubusercontent.com/74038190/212257460-738ff738-247f-4445-a718-cdd0ca76e2db.gif" alt="nodejs" className='workBarImg' style={styles.workBarImg} />
            <img src="https://airony.ai/wp-content/uploads/2022/11/InsistentSardonicAppaloosa-max-1mb.gif" alt="sql" className='workBarImg' style={styles.workBarImg} />
          </div>
          <div style={styles.sliderContainer}>
            <ImageSlider images={complainH}  width="24rem" height="12rem"/> 
          </div>
        </div>
      </div>
    </section>
  )
}

export default works
