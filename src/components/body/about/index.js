import React from 'react';
import SocialContact from '../../common/social-contact';
import './about.css'

function About() {
  return <div className='about'>

    <div className='about-top'>

      <div className='about-info'>
        {/* Hi There , i am <br/> <span className='info-name'>Rohit</span>.
        <br/> */}
        <p> <span className='info-name'>𝙷𝚎𝚕𝚕𝚘,</span> 𝙸 𝚊𝚖 𝚁𝚘𝚑𝚒𝚝 𝚁𝚊𝚖𝚋𝚊𝚍𝚎,
𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍 𝙳𝚒𝚙𝚕𝚘𝚖𝚊 𝚒𝚗 𝙲𝚘𝚖𝚙𝚞𝚝𝚎𝚛 𝙴𝚗𝚐𝚒𝚗𝚎𝚎𝚛𝚒𝚗𝚐, 𝙽𝚘𝚠 𝙿𝚞𝚛𝚜𝚞𝚒𝚗𝚐 𝟸𝚗𝚍 𝚢𝚎𝚊𝚛 𝚘𝚏 𝙱𝙴 𝙲𝚘𝚖𝚙𝚞𝚝𝚎𝚛 𝙴𝚗𝚐𝚒𝚗𝚎𝚎𝚛𝚒𝚗𝚐 𝚊𝚝 𝙼𝙸𝚃𝙼, 𝙾𝚛𝚘𝚜.
𝙰𝚝 𝚝𝚑𝚎 𝚜𝚊𝚖𝚎 𝚝𝚒𝚖𝚎, 𝙸 𝚊𝚖 𝚊 𝚝𝚛𝚊𝚒𝚗𝚎𝚎 @𝙻𝚒𝚗𝚞𝚡𝚆𝚘𝚛𝚕𝚍 𝙸𝚗𝚏𝚘𝚛𝚖𝚊𝚝𝚒𝚌𝚜 𝙿𝚟𝚝 𝙻𝚝𝚍.
𝙸 𝚊𝚖 𝚙𝚊𝚜𝚜𝚒𝚘𝚗𝚊𝚝𝚎 𝚊𝚋𝚘𝚞𝚝 𝚎𝚡𝚙𝚕𝚘𝚛𝚒𝚗𝚐 𝚝𝚑𝚎 𝚕𝚊𝚝𝚎𝚜𝚝 𝚝𝚎𝚌𝚑𝚗𝚘𝚕𝚘𝚐𝚒𝚎𝚜.

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
