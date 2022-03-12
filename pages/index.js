import React from 'react';

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

export default HomePage