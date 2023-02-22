import React from 'react'
import WebFooter from './footer'
import WebHeader from './header'
import WebTopHeader from './topHeader'

export default function WebLayout({ children }) {
    return (
        <React.Fragment>
            <WebTopHeader />
            <WebHeader />
            {children}
            <WebFooter />
        </React.Fragment>
    )
}
