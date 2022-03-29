import Head from 'next/head';
import React from 'react';
import { ContactBanner } from '../components/contactBanner';

import { Header } from '../components/header';
import ListTechnologies from '../components/sections/ListTechnologies/ListTechnologies';
import { Principal } from '../components/sections/main';
import { Skills } from '../components/sections/skills';


const HomePage = () => {

  return (
      <>
      <Head>
        <title>Jose Galdamez | Developer</title>
        <link rel="icon" type="image/x-icon" href="/assets/favicon.ico"></link>
      </Head>
        <Header />
        <Principal />
        <Skills />
        <ListTechnologies />
        <ContactBanner />
      </>
  )
}

export default HomePage