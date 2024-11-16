import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-us-page">
      {/* Pas de barre de navigation ici */}
      <header>
        {/* Image d'en-tête sans le texte "About Us" */}
      </header>

      <section id="home">
        <div className="home-left">
          <img src="./assets/user.jpg" alt="Beautician" />
        </div>
        <div className="home-right">
          <h2 className="home-heading">Enhance Your Beauty Experience</h2>
          <p className="home-para">
            Discover exceptional beauty treatments and services tailored just for you. Our dedicated team of experts is here to provide you with the ultimate pampering experience.
          </p>
          <a href="#" className="button">Explore Our Services</a>
        </div>
      </section>
      
      <section id="workFlow">
        <h2 className="heading">Transform Your Beauty Routine</h2>
        <p className="para">
          Experience the finest beauty treatments with our expertly designed workflows that ensure your satisfaction and wellness.<br />From personalized consultations to premium treatments,<br /> we cater to your every need.
        </p>
        <div className="num-container">
          <div className="num-item"><span>10,500 <br />Satisfied Clients</span></div>
          <div className="num-item"><span>98% <br />Client Satisfaction</span></div>
          <div className="num-item"><span>5,200 <br />Treatments Provided</span></div>
        </div>
      </section>
      
      <section id="goal">
        <div className="goal-left">
          <h2>Our Mission</h2>
          <p>
            At our center, our mission is to offer unparalleled beauty services with a focus on client care, quality, and innovation. We strive to create an environment where beauty and wellness go hand in hand.
          </p>
          <ul>
            <li> Exceptional beauty treatments tailored to individual needs.</li>
            <li> A commitment to the highest standards of service and hygiene.</li>
            <li> An atmosphere designed for relaxation and rejuvenation.</li>
          </ul>
          <a href="#" className="button">Contact Us</a>
        </div>
        <div className="goal-right">
          <img src="./assets/ourgoal.png" alt="Beauty Center Goal" />
        </div>
      </section>
      
      <section id="our-Team">
        <h2>Meet Our Experts</h2>
        <div className="teamContainer">
          <div className="team-item">
            <img src="./assets/teamMember.png" alt="Team Member" />
            <h5 className="member-name">Sophia Martinez</h5>
            <span className="role">Head Beautician</span>
          </div>
          <div className="team-item">
            <img src="./assets/teamMember.png" alt="Team Member" />
            <h5 className="member-name">Liam Johnson</h5>
            <span className="role">Skin Care Specialist</span>
          </div>
          <div className="team-item">
            <img src="./assets/teamMember.png" alt="Team Member" />
            <h5 className="member-name">Olivia Davis</h5>
            <span className="role">Makeup Artist</span>
          </div>
          <div className="team-item">
            <img src="./assets/teamMember.png" alt="Team Member" />
            <h5 className="member-name">Ethan Brown</h5>
            <span className="role">Massage Therapist</span>
          </div>
        </div>
      </section>
      
      <footer>
        <p> &copy; 2024 - All rights reserved - BeautyCenter.com</p>
      </footer>
    </div>
  );
}

export default AboutPage;
