import Head from 'next/head'
import React from 'react'
import Blog from '../../components/blog'
import { Header } from '../../components/header'

function About() {
  return (
    <div>
      <Head >
        <title>Blog | Developer</title>
        <link rel="icon" type="image/x-icon" href="/assets/favicon.ico"></link>
      </Head>
      <Header />
      <Blog />
    </div>
  )
}

export default About