import React from 'react';
import style from './title.module.css';

const Title = ({text}) => {
  return (
    <div>
      <h2 className={style.subtitle}>{text}</h2>
      <hr className={style.hr}/>
    </div>
  )
}

export default Title