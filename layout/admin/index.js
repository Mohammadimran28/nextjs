import React from 'react'
import AdminFooter from './footer'
import AdminHeader from './header'

export default function AdminLayout({ children }) {
    return (
        <React.Fragment>
            <AdminHeader />
            {children}
            <AdminFooter />
        </React.Fragment>
    )
}
