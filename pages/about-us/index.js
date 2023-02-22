import Head from 'next/head'
import React from 'react'
import { Container } from 'react-bootstrap'
import Aboutsection from '../../component/about-section'
import WebLayout from '../../layout/web/index'

About.getLayout = function getLayout(page) {
  return (
    <WebLayout>
      {page}
    </WebLayout>
  )
}


export default function About() {
  return (
    <section>
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/images/title-logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>
      <Aboutsection />
    </section>
  )
}
