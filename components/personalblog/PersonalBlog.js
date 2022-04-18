import React from 'react';
import CardArticle from '../cardArticle';
import { Title } from '../title';
import style from './personalblog.module.css';


const PersonalBlog = () => {
  return (
    <section className={style.main}>
        <Title text="Blog Personal" />
        <div className={style.blog}>
            <CardArticle 
            title="Funciones de Javascript que todo profesional debe saber" 
            image="/assets/placeholder.png" 
            date="17 de abril, 2022"
            views="98"/>
            <CardArticle 
            title="¿Cómo optimizar un sitio web construido en NextJS?" 
            image="/assets/placeholder.png" 
            date="15 de abril, 2022"
            views="123"/>
            <CardArticle 
            title="¿Cómo  llegar a más clientes en una tienda online?" 
            image="/assets/placeholder.png" 
            date="13 de abril, 2022"
            views="189"/>
        </div>
    </section>
  )
}

export default PersonalBlog;