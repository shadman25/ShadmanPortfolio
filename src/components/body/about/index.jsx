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
            Looking for the big exposer
            in the Software Industry.

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
