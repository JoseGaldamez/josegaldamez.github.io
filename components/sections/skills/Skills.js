import React from 'react';
import style from './skills.module.css';
import {Skill}  from '../../skill';
import { Title } from '../../title';

function Skills() {
  return (
    <section className={ `${style.skills} animate__animated animate__fadeInUp` }>
      <Title text="Habilidades" />
      <div className={style.list_skills}>
          <Skill 
            image="/assets/web-icono.png"
            title="Front-end" 
            text={`Aplicaciones web con ReactJS y Angular`} />
          <Skill 
          image="/assets/mobile-icono.png"
          title="Mobile App"
          text="Aplicaciones para Android y iOS con Flutter" />
          <Skill 
          image="/assets/backend-icono.png"
          title="Back-end"
          text="Base de datos y manejo con NodeJS y Golang" />
        </div>
    </section>
  )
}

export default Skills