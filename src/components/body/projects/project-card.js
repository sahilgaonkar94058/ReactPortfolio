import React from 'react';
import "./project-card.css";

function ProjectCard({project}) {
  return <div className='project-card'>
      <div className='project-info'>
          <label className='project-title'>{project.title}</label>
          <div>
            <a className='project-links' href={project.Github}>
            <div className='link-button' >
            
            <i class="devicon-github-original-wordmark colored">GitHub</i>

            
            </div>
            </a>
          
          </div>
      </div>
        <img src={project.image} className='project-photo'/>
      


  </div>;
}

export default ProjectCard;
