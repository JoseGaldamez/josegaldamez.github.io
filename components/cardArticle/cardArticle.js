import React from 'react';
import Image from 'next/image';
import style from './cardArticle.module.css';

const CardArticle = ({title, image, date, views}) => {
  return (
    <article className={style.card}>
        <div className={style.card__image}>
            <Image className={style.image} src={image} alt={title} width={ 250 } height={ 150 } />
            <h2 className={style.h2}>{title}</h2>
            <div className={style.meta}>
                <span>{date}</span>
                <span>{views} vistas</span>
            </div>
        </div>
    </article>
  )
}

export default CardArticle;