import React from 'react';
import Separator from '../../common/separator';
import SocialContact from '../../common/social-contact';
import './contact.css';


function Contact() {
  return (
    <>
    <div className="contact">
    <Separator />
    <label className="section-title">Contact</label>
    <div className="contact-container">
      <div className="contact-left">
        <p>Want to get in touch? Contact me on any of the plateform</p>
        <SocialContact />
      </div>
      <div className="download">
      <a download href={require('../../../assets/shadman_nehal_khan_resume.pdf').default}>
        <i class='fi-rr-cloud-download download-icon' />
        Download Resume
      </a>
      </div>
    </div>
    </div>
    </>
  );
}

export default Contact;
