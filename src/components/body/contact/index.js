import React from 'react';
import Separator from '../../common/separator';
import SocialContact from '../../common/social-contact';
import './contact.css'
function Contact() {
  return <div className='contact'>
    <Separator/>
    <label className='section-title'>Contact</label>
    <div className='contact-container'>
      <div className='contact-left'>
        <p>Want to get in touch? Contact me on any platform</p>
        <SocialContact/>
      </div>
      <div className='download'>
        <a dowload href='https://drive.google.com/file/d/1yaMAlDGp4AUdvLo_BYgPTRj4ruPxFvHi/view?usp=sharing'>
        <i className="fi fi-rr-download download-icon"></i>
        Download Resume
        </a>
      </div>

    </div>
    
  </div>;
}

export default Contact;
