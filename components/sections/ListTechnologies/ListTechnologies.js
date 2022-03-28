import React from 'react'
import { Technology } from '../../technology';
import { Title } from '../../title';
import style from './technologies.module.css';

const ListTechnologies = () => {
  return (
    <>
    <Title text="Technologies" />
    <div className={ style.list_techologies } >
        <Technology url="/icons/react.png" text="React JS" />
        <Technology url="/icons/angular.png" text="Angular" />
        <Technology url="/icons/flutter.png" text="Flutter" />
        <Technology url="/icons/docker.png" text="Docker" />
        <Technology url="/icons/next.png" text="Next JS" />
        <Technology url="/icons/node.png" text="Node JS" />
        <Technology url="/icons/go.png" text="Golang" />
        <Technology url="/icons/firebase.png" text="Firebase" />
        
    </div>
    </>
  )
}

export default ListTechnologies