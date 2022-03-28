import React from 'react';
import Image from 'next/image';

import style from './technology.module.css';


const Technology = ({url, text}) => {
  return (
    <div className={style.item}>
      <figure>
      <img src={url} alt={text} />
      </figure>
      <p>{text}</p>
    </div>
  )
}

export default Technology;