import React from 'react'
import AdminLayout from '../../layout/admin'

Dashboard.getLayout = function getLayout(page) {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}


export default function Dashboard() {
    return (
        <div>Dashboard</div>
    )
}
