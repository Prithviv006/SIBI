import React, { useEffect } from 'react';
import '../styles/Index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import 'animate.css';
import Spline from '@splinetool/react-spline';


const StyledButton = styled.div`
  .animated-button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 16px 36px;
    border: 4px solid;
    border-color: transparent;
    font-size: 16px;
    background-color: ;
    border-radius: 100px;
    font-weight: 600;
    color: #1f387e;
    box-shadow: 0 0 0 2px #ffffff;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button svg {
    position: absolute;
    width: 24px;
    fill: #1f387e;
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .arr-1 {
    right: 16px;
  }

  .animated-button .arr-2 {
    left: -25%;
  }

  .animated-button .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: #c5e5e4;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .text {
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button:hover {
    box-shadow: 0 0 0 12px transparent;
    color: #212121;
    border-radius: 12px;
  }

  .animated-button:hover .arr-1 {
    right: -25%;
  }

  .animated-button:hover .arr-2 {
    left: 16px;
  }

  .animated-button:hover .text {
    transform: translateX(12px);
  }

  .animated-button:hover svg {
    fill: #1f387e;
  }

  .animated-button:active {
    scale: 0.95;
    box-shadow: 0 0 0 4px greenyellow;
  }

  .animated-button:hover .circle {
    width: 220px;
    height: 220px;
    opacity: 1;
  }`;




const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
    
  
    <div className="blur-background"></div>
      <div className="landing-container">

        {/* Hero Section */}
        <header className="hero">
          <div className="hero-content">
            <h1 data-aos="fade-right" className='animate__animated animate__bounce'>SIBI: Your Smart 3D Study Companion</h1>
            <p data-aos="fade-right" data-aos-delay="200">Learn smarter, stay focused, and ace your studies with AI-powered assistance!</p>
            <StyledButton>
              {/* for get start button */}
              <button className="animated-button" data-aos="zoom-in" data-aos-delay="400">
                <a href="/signup" className='btn' >
                  <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                  <span className="text">Get Started</span>
                  <span className="circle" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                </a>
              </button>

              {/* for login button */}


              <button className="animated-button buttons" data-aos="zoom-in" data-aos-delay="400">
                <a href="/login" className='btn' >
                  <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                  <span className="text"> Login</span>
                  <span className="circle" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                </a>
              </button>


              {/* <div className="buttons"> */}
              {/* <a href="/signup" className="btn btn-alt" data-aos="zoom-in" data-aos-delay="400">Get Started</a> */}
              {/* <a href="/login" className="btn btn-alt" data-aos="zoom-in" data-aos-delay="400">Login</a> */}
              {/* </div> */}
            </StyledButton>
          </div>


          {/* for the avathar */}
          <div className="hero-image" data-aos="fade-left">
            <img src="image/SIBI AI.png" alt="3D Avatar" className="floating" />
          </div>
        </header>

        {/* Features Section */}
        <section className="features">
          <h2 data-aos="fade-up">Why Choose SIBI?</h2>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <div className="feature" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <i className={feature.icon}></i>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        {/* <footer data-aos="fade-up" data-aos-delay="200">
          <p>&copy; 2025 SIBI Study Companion. All Rights Reserved.</p>
        </footer> */}

      </div>
    
    </>
  );
};

const features = [
  {
    icon: "fas fa-user-graduate pulse",
    title: "3D AI Study Friend",
    desc: "Interact with SIBI's lifelike avatar for an immersive learning experience."
  },
  {
    icon: "fas fa-calendar-alt",
    title: "Smart Study Plans",
    desc: "AI-generated schedules optimized for your learning patterns."
  },
  {
    icon: "fas fa-pen",
    title: "Adaptive Quizzes",
    desc: "Personalized assessments with real-time performance analysis."
  },
  {
    icon: "fas fa-eye",
    title: "Focus Assistant",
    desc: "Computer vision-powered distraction monitoring system."
  },
  {
    icon: "fas fa-magnifying-glass",
    title: "Answer Correction",
    desc: "AI-powered answer analysis with detailed feedback."
  },
  {
    icon: "fas fa-chart-line",
    title: "Progress Tracking",
    desc: "Detailed analytics and visual progress reports."
  }
];

export default LandingPage;