import React from 'react';
import SocialContact from '../../common/social-contact';
import './about.css'

function About() {
  return <div className='about'>

    <div className='about-top'>

      <div className='about-info'>
        {/* Hi There , i am <br/> <span className='info-name'>Rohit</span>.
        <br/> */}
        <p> <span className='info-name'>π·ππππ,</span> πΈ ππ <b>Sahil Gaonkar</b>,
π²ππππππππ π³ππππππ ππ π²πππππππ π΄ππππππππππ,πΈ ππ π πππππππ @π»ππππ‘πππππ πΈππππππππππ πΏππ π»ππ.
πΈ ππ ππππππππππ πππππ ππ‘πππππππ πππ ππππππ ππππππππππππ.

</p>
      </div>
      <div className='about-photo'></div>
      <img src={require('../../../assets/coding.png')} className='picture'/>
    </div>
    <div className='about-bottom'></div>
<SocialContact/>
  </div>;
}

export default About;
