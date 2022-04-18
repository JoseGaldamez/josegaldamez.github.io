import React from 'react';
import Image from 'next/image';
import { Title } from '../title';
import style from './projects.module.css';

const Projects = () => {
  return (
    <section className={ style.main }>
      <Title text="Proyectos" subtitle="Aquí hay algunos de los proyectos en los que he trabajado." />
      <div className={ style.projects }>
        <div className={ style.project }>
          <Image className={style.image} src="/assets/placeholder.png" alt="me" width={ 240 } height={ 330 } />
        </div>
        <div className={ style.project }>
          <Image className={style.image} src="/assets/placeholder.png" alt="me" width={ 240 } height={ 330 } />
        </div>
        <div className={ style.project }>
          <Image className={style.image} src="/assets/placeholder.png" alt="me" width={ 240 } height={ 330 } />
        </div>
        <div className={ style.project }>
          <Image className={style.image} src="/assets/placeholder.png" alt="me" width={ 240 } height={ 330 } />
        </div>
      </div>
    </section>
  )
}

export default Projects;