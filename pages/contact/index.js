import Head from 'next/head';
import React from 'react'
import {Contact} from '../../components/contact';
import {Header} from '../../components/header';

const index = () => {
  return (
    <div>
      <Head>
        <title>Contact | Developer</title>
        <link rel="icon" type="image/x-icon" href="/assets/favicon.ico"></link>
      </Head>
      <Header />
      <Contact />
    </div>
  )
}

export default index