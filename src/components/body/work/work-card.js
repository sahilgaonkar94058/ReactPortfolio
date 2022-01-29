import React from 'react';
import './work-card.css'

function WorkCard({item}) {
  return <div className='work-card'>
      <img src={item.companylogo} className='work-logo'/>
      <div className='work-info'>
          <label className='company-name'>{item.company}</label>
          <div className='work-date'>
              <label>{item.date}</label>
          </div>
          <div className='work-desc'>
              <p>{item.work}</p>
          </div>

      </div>





  </div>;
}

export default WorkCard;
