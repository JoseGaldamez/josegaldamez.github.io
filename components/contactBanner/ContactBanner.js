import Link from 'next/link';
import React from 'react';
import style from './contactbanner.module.css';

const ContactBanner = () => {
  return (
    <div className={style.banner} >
        <h3>¿Tienes un proyecto en mente?</h3>
        <Link href="/contact" >
            <a>Escríbeme</a>
        </Link>
    </div>
  )
}

export default ContactBanner