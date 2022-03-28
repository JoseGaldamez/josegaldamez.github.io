import React from 'react';
import style from './skill.module.css';
import Image from 'next/image';

const Skill = ({image, title, text}) => {
  return (
    <div className={style.skill}>
        <Image src={image} alt={title} width={97} height={98}/>
        <h3 className={style.titleSkill}>{title}</h3>
        <p className={style.paragraph}>
        { text }
        </p>
    </div>
  )
}

export default Skill