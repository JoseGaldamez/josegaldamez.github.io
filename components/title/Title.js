import React from 'react';
import style from './title.module.css';

const Title = ({text, subtitle = null}) => {
  return (
    <div>
      <h2 className={style.title}>{text}</h2>
      <p className={style.subtitle}> {subtitle} </p>
      <hr className={style.hr}/>
    </div>
  )
}

export default Title