import Head from 'next/head';
import React from 'react';
import { ContactBanner } from '../components/contactBanner';

import { Header } from '../components/header';
import PersonalBlog from '../components/personalblog';
import Projects from '../components/projects/Projects';
import ListTechnologies from '../components/sections/ListTechnologies';
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
        <Projects />
        <PersonalBlog />
      </>
  )
}

export default HomePage