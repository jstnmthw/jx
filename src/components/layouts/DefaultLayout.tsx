import React from 'react'
import { Props } from '@/types/props'
import { useAuth } from '@/hooks/auth'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DefaultLayout({ children }: Props) {
    const { user } = useAuth({
        middleware: 'guest'
    })
    return (
        <>
            <Header user={user} />
            <main id="__main">{children}</main>
            <Footer />
        </>
    )
}
