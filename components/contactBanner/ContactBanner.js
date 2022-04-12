import Link from 'next/link';
import React from 'react';
import style from './contactbanner.module.css';

const ContactBanner = () => {
  return (
    <div className={style.banner} >
        <h3>Do you have something in mind?</h3>
        <Link href="/contact" >
            <a>Contact me</a>
        </Link>
    </div>
  )
}

export default ContactBanner