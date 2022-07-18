import type { NextPage } from 'next'
import Head from 'next/head'
import DefaultLayout from '@/components/layouts/DefaultLayout'

const Index: NextPage = () => {
    return (
        <DefaultLayout>
            <div className="max-w4xl mx-auto">
                <div className="flex items-center justify-center">
                    <div className="flex h-full flex-col items-center justify-center py-10">
                        <Head>
                            <title>
                                Jx - A NextJS starter kit for Laravel Sanctum
                                API
                            </title>
                        </Head>
                        <div className="flex w-full flex-1 flex-col items-center justify-center text-center">
                            <h1 className="mb-4 text-6xl font-bold">
                                Welcome to{' '}
                                <span className="text-gradient">Jx</span>
                            </h1>
                            <div className="mx-auto mt-3">
                                <h2 className="mb-8 text-2xl">
                                    An opinionated starter kit for{' '}
                                    <a
                                        href="https://nextjs.org"
                                        className="text-gradient-alt">
                                        NextJS
                                    </a>
                                    . <br />
                                    Includes the following packages out of the
                                    box:
                                </h2>
                                <div className="flex max-w-3xl flex-wrap justify-center gap-5">
                                    <h3 className="whitespace-nowrap rounded-md bg-gray-100 p-2 font-mono">
                                        <a
                                            className="text-gradient-hover"
                                            href="https://tailwindcss.com/"
                                            target="_blank"
                                            rel="noreferrer">
                                            TailwindCSS
                                        </a>
                                    </h3>
                                    <h3 className="whitespace-nowrap rounded-md bg-gray-100 p-2 font-mono">
                                        <a
                                            className="text-gradient-hover"
                                            href="https://heroicons.com/"
                                            target="_blank"
                                            rel="noreferrer">
                                            Heroicons
                                        </a>
                                    </h3>
                                    <h3 className="whitespace-nowrap rounded-md bg-gray-100 p-2 font-mono">
                                        <span className="text-gradient-hover">
                                            Authentication
                                        </span>
                                    </h3>
                                    <h3 className="whitespace-nowrap rounded-md bg-gray-100 p-2 font-mono">
                                        <span className="text-gradient-hover">
                                            Roles / Permissions
                                        </span>
                                    </h3>
                                    <h3 className="whitespace-nowrap rounded-md bg-gray-100 p-2 font-mono">
                                        <a
                                            className="text-gradient-hover"
                                            href="https://headlessui.dev/"
                                            target="_blank"
                                            rel="noreferrer">
                                            HeadlessUI
                                        </a>
                                    </h3>
                                    <h3 className="whitespace-nowrap rounded-md bg-gray-100 p-2 font-mono">
                                        <a
                                            className="text-gradient-hover"
                                            href="https://laravel.com/docs/9.x/sanctum"
                                            target="_blank"
                                            rel="noreferrer">
                                            Sanctum Ready
                                        </a>
                                    </h3>
                                    <h3 className="whitespace-nowrap rounded-md bg-gray-100 p-2 font-mono">
                                        <a
                                            className="text-gradient-hover"
                                            href="https://github.com/pacocoursey/next-themes"
                                            target="_blank"
                                            rel="noreferrer">
                                            Next Themes
                                        </a>
                                    </h3>
                                    <h3 className="whitespace-nowrap rounded-md bg-gray-100 p-2 font-mono">
                                        <a
                                            className="text-gradient-hover"
                                            href="https://www.typescriptlang.org/"
                                            target="_blank"
                                            rel="noreferrer">
                                            TypeScript
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
                                <a
                                    target="_blank"
                                    href="https://nextjs.org/docs"
                                    className="text-gradient-hover mt-6 w-96 rounded-xl border p-6 text-left"
                                    rel="noreferrer">
                                    <h2 className="text-2xl font-bold">
                                        Documentation &rarr;
                                    </h2>
                                    <p className="mt-4 text-xl">
                                        Find in-depth information about Next.js
                                        features and API.
                                    </p>
                                </a>
                                <a
                                    target="_blank"
                                    href="https://nextjs.org/learn"
                                    className="text-gradient-hover mt-6 w-96 rounded-xl border p-6 text-left"
                                    rel="noreferrer">
                                    <h2 className="text-2xl font-bold">
                                        Learn &rarr;
                                    </h2>
                                    <p className="mt-4 text-xl">
                                        Learn about Next.js in an interactive
                                        course with quizzes!
                                    </p>
                                </a>
                                <a
                                    target="_blank"
                                    href="https://github.com/vercel/next.js/tree/master/examples"
                                    className="text-gradient-hover mt-6 w-96 rounded-xl border p-6 text-left"
                                    rel="noreferrer">
                                    <h2 className="text-2xl font-bold">
                                        Examples &rarr;
                                    </h2>
                                    <p className="mt-4 text-xl">
                                        Discover and deploy boilerplate example
                                        Next.js projects.
                                    </p>
                                </a>
                                <a
                                    target="_blank"
                                    href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                                    className="text-gradient-hover mt-6 w-96 rounded-xl border p-6 text-left"
                                    rel="noreferrer">
                                    <h2 className="text-2xl font-bold">
                                        Deploy &rarr;
                                    </h2>
                                    <p className="mt-4 text-xl">
                                        Instantly deploy your Next.js site to a
                                        public URL with Vercel.
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Index
