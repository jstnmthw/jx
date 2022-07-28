import '@/styles/globals.css'
import React from 'react'
import { AppProps } from 'next/app'
import { CookiesProvider } from 'react-cookie'
import { ThemeProvider } from 'next-themes'

function App({ Component, pageProps }: AppProps) {
    return (
        <CookiesProvider>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </CookiesProvider>
    )
}

export default App
