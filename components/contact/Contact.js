import React from 'react';
import { Title } from '../title';
import Link from 'next/link';
import style from './contact.module.css';

const whatsapp = "https://api.whatsapp.com/send/?phone=50431751455&text=Hello+Jos%C3%A9%2C+let%C2%B4s+talk.&app_absent=0";
const emailto = "mailto:josegaldamez1991@gmail.com";

const Contact = () => {
  return (
    <div className={style.contact}>
        <Title text="Contact" />
        <p className={style.paragraph} >
            You are able to contact me by next ways:
        </p>
        <div className={style.clicks} >
            <div className={style.whatsapp}>
                <Link href={whatsapp}  >
                    <a target="_blank">
                        <img src="/assets/whatsapp.png" alt="Contact by whatsapp" />
                    </a>
                </Link>
            </div>
            <div className={style.whatsapp}>
                <Link href={emailto}  >
                    <a target="_blank">
                        <img src="/assets/email.png" alt="Contact by whatsapp" />
                    </a>
                </Link>
            </div>
        </div>
        {/* <p className={style.paragraph} >
            You can also contact me by my own platform
        </p> */}
    </div>
  )
}

export default Contact