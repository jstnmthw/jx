import React from 'react'
import { Props } from '@/types/props'
import { useAuth } from '@/hooks/auth'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AdminLayout({ children }: Props) {
    const { user, logout } = useAuth({
        middleware: 'admin'
    })
    return (
        <>
            <Header user={user} logout={logout} />
            <main id="__main">{children}</main>
            <Footer />
        </>
    )
}
