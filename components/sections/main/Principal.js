import React from 'react';
import style from './principal.module.css';

import {Button} from '../../button';

function Principal() {
  return (
    <div className={style.pricipal_section}>
        <div className={style.pricipal_section__image}></div>
        <h1 className={style.title}>José Galdámez</h1>
        <p className={style.paragraph}>Desarrollador web y de aplicaciones móviles</p>
        <div className={style.buttons}>
            <Button text="Descargar CV" />
            <Button text="Contacto" type="secondary" />
        </div>
    </div>
  )
}

export default Principal;