import React from 'react';
import './web.css'

function Web() {
  return <div className='web'>
      <div className='web-option'>
          <a href='#project'>
          <i class="fi fi-rr-settings option-icon"></i>Projects

          </a>
      </div>
      <div className='web-option'>  
          <a href='#skills'>
          <i class="fi fi-rr-laptop option-icon"></i>Skills
          </a>
      </div>
      <div className='web-option'>
          <a href='work'>
          <i class="fi fi-rr-briefcase option-icon"></i>work
         
          </a>
      </div>
      <div className='web-option'>
          <a href='#user'>
          <i class="fi fi-rr-user option-icon"></i>Contact
          </a>
      </div>
      



  </div>;
}

export default Web;
