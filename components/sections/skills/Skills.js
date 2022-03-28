import React from 'react';
import style from './skills.module.css';
import {Skill}  from '../../skill';

function Skills() {
  return (
    <div className={ style.skills }>
      <h2 className={style.subtitle}>Habilidades</h2>
      <hr className={style.hr}/>
      <div className={style.list_skills}>
          <Skill 
            image="/assets/web-icono.png"
            title="Front-end" 
            text={`Build web applications with React SJ and Angular`} />
          <Skill 
          image="/assets/mobile-icono.png"
          title="Mobile App"
          text="Build your app for Android and iOS with Flutter" />
          <Skill 
          image="/assets/backend-icono.png"
          title="Back-end"
          text="A strong management of DB with NodeJS and Go" />
        </div>
    </div>
  )
}

export default Skills