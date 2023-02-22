import Head from 'next/head'
import React from 'react'
import Aboutsection from '../component/about-section'
import CardServices from '../component/cardServices'
import HomeDetails from '../component/homeDetails'
import HomePackage from '../component/homePackage'
import { HomeSlider } from '../component/homeSlider'
import WebLayout from '../layout/web'

Home.getLayout = function getLayout(page) {
  return (
    <WebLayout>
      {page}
    </WebLayout>
  )
}


export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/images/title-logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <title>Reeda Udaipur</title>
      </Head>
      <HomeSlider />
      <HomeDetails />
      <Aboutsection />
      <HomePackage />
      <CardServices />
    </div>
  )
}
