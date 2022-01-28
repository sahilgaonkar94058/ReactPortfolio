import React from 'react';
import SocialContact from '../../common/social-contact';
import './about.css'

function About() {
  return <div className='about'>

    <div className='about-top'>

      <div className='about-info'>
        Hi There , i am <br/> <span className='info-name'>Rohit</span>.
        <br/>
      </div>
      <div className='about-photo'></div>
      <img src={require('../../../assets/coding.png')} className='picture'/>
    </div>
    <div className='about-bottom'></div>
<SocialContact/>
  </div>;
}

export default About;
