import Head from 'next/head'
import React from 'react'
import HomeSerives from '../../component/homeserives'
import Service from '../../component/our-services'
import WebLayout from '../../layout/web'

Services.getLayout = function getLayout(page) {
    return (
        <WebLayout>
            {page}
        </WebLayout>
    )
}


export default function Services() {
    return (
        <section>
            <Head>
                <title>Services</title>
                <link rel="icon" href="/images/title-logo.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            </Head>
            <Service />
            <HomeSerives />
        </section>
    )
}
