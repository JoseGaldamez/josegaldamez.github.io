import Head from 'next/head';
import React from 'react'
import {Header} from '../../components/header';
import Projects from '../../components/projects/Projects';

const index = () => {
  return (
    <div>
      <Head>
        <title>Projects | Developer</title>
        <link rel="icon" type="image/x-icon" href="/assets/favicon.ico"></link>
      </Head>
      <Header />
      <Projects />
    </div>
  )
}

export default index