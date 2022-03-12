import React from 'react';
import style from './button.module.css';

function Button({text, type="primary"}) {

  return (
    <button className={`${style.btn} ${type == 'primary' ? style.primary : style.secondary }`}>
        {text}
    </button>
  )
}

export default Button