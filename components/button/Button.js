import Link from 'next/link';
import React from 'react';
import style from './button.module.css';

function Button({text, type="primary", action}) {



  return (
      <button onClick={action}
          className={`${style.btn} ${type == 'primary' ? style.primary : style.secondary }`}
          >
          {text}
      </button>

  )
}

export default Button