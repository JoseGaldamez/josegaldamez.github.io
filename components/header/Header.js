import React, { useState } from 'react';
import Image from 'next/image';

import style from './header.module.css';
import Link from 'next/link';

import 'animate.css';

const Header = () => {

  const [showMenu, setShowMenu] = useState (false);

  return (
    <>
    <div className={style.header}>
      <header className={style.main_header}>
        <Link href="/">
          <a>
            <Image className={style.menu_button} src="/assets/jg-logo.png" alt="me" width={ 64 * 0.75 } height={ 44 * 0.75 } />
          </a>
        </Link>
          <Image className={style.menu_button}  onClick={ () => setShowMenu( !showMenu ) } 
                  src="/assets/menu-icon.png" 
                  alt="me" width={ 44 * 0.75 } height={ 30 * 0.75 } />
      </header>
      { showMenu && (<div className={`${style.float_menu} animate__animated animate__fadeIn animate__faster` }>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </div>)}
    </div>
    </>

  )
}

export default Header