import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500;600;700;900&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" href="/jx.svg" />
                <meta
                    name="description"
                    content="An opinionated application starter kit to built on
                    Next.js tailored for Laravel's Sanctum API."
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
