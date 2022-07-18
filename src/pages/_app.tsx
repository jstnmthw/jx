import '@/styles/globals.css'
import React from 'react'
import { AppProps } from 'next/app'
import { CookiesProvider } from 'react-cookie'

function App({ Component, pageProps }: AppProps) {
    return (
        <CookiesProvider>
            <Component {...pageProps} />
        </CookiesProvider>
    )
}

export default App
