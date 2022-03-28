<<<<<<< HEAD
import React, {useEffect} from 'react';

import { Header } from '../components/header';
import { Principal } from '../components/sections/main';
import { Skills } from '../components/sections/skills';

const HomePage = () => {

  return (
      <>
        <Header />
        <Principal />
        <Skills />
      </>
  )
}

=======
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
        <title>Jose Galdamez | Software Developer</title>
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

>>>>>>> 4ea754074b6b29279c9b7ac89b93a2c90c1b5003
export default HomePage