import React from 'react';
import { useRouter } from 'next/router'
import style from './principal.module.css';

import {Button} from '../../button';

function Principal() {

    const router = useRouter();

    const download = () => {
        window.open('https://www.codigocorrecto.com/wp-content/uploads/2022/03/cv.pdf', '_blank', 'download');
    }

    const contact = () => {
        router.push('/blog');
    }

  return (
    <div className={style.pricipal_section}>
        <div className={style.pricipal_section__image}></div>
        <h1 className={style.title}>José Galdámez</h1>
        <p className={style.paragraph}>Desarrollador web y de aplicaciones móviles</p>
        <div className={style.buttons}>
            <Button text="Descargar CV" action={download} />
            <Button text="Contacto" type="secondary" action={contact} />
        </div>
    </div>
  )
}

export default Principal;