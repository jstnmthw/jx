import React from 'react'
import { Props } from '@/types/props'
import { UserResponse } from '@/types/response'
import { useAuth } from '@/hooks/auth'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * User Layout can be used when authentication is required.
 *
 * @param children
 * @constructor
 */
export default function UserLayout({ children }: Props) {
    const { user: user }: UserResponse = useAuth({
        middleware: 'auth'
    })
    if (!user) return <div>Loading</div>
    return (
        <>
            <Header user={user} />
            <main id="__main">{children}</main>
            <Footer />
        </>
    )
}
