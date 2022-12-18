import React from 'react';
import './about.css';
import SocialContact from '../../common/social-contact';


function About() {
  return (
    <>
    <div className="about">
    <div className="about-top">
        <div className="about-info">
        Hello there 👋, 
            This is<br /><span className="info-name"> Shadman Nehal Khan</span><br />
            Working as an Android developer always in a hunt of exploring
            new tech. and tools be updated with the upcoming technologies.

        </div>
        <div className="about-photo">
        <img src={require('../../../assets/coding.png').default} className="picture"/>
        
        </div>
    </div>
    <div className="about-bottom">
        
        <SocialContact />
    </div>
    </div>
    </>
  );
}

export default About;
