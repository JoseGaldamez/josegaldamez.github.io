import Link from 'next/link';
import React from 'react';
import style from './contactbanner.module.css';

const ContactBanner = () => {
  return (
    <section className={`${style.banner} animate__animated animate__fadeInUp` } >
        <h3>¿Tienes algo en mente?</h3>
        <Link href="/contact" >
            <a>Contáctame</a>
        </Link>
    </section>
  )
}

export default ContactBanner