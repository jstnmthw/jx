import type { NextPage } from 'next'
import Head from 'next/head'
import DefaultLayout from '@/components/layouts/DefaultLayout'

const Index: NextPage = () => {
    return (
        <DefaultLayout>
            <Head>
                <title>
                    Jx - A Next.js starter kit built for Laravel&apos;s Sanctum
                    API
                </title>
            </Head>
            <div className="relative mx-auto max-w-4xl overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="mt-10 mb-2 text-center text-4xl font-extrabold dark:text-white md:mt-20 md:mb-6 md:text-5xl lg:text-6xl">
                    Welcome to <span className="text-blue">Jx</span>
                </div>
                <h2 className="mb-8 text-center text-lg text-slate-700 dark:text-slate-400 md:text-xl">
                    An opinionated starter kit for{' '}
                    <a
                        target="_blank"
                        href="https://nextjs.org"
                        className="text-blue"
                        rel="noreferrer">
                        Next.js
                    </a>
                    . <br />
                    Includes the following packages out of the box:
                </h2>
                <div className="mb-10 flex max-w-3xl flex-wrap justify-center gap-3 md:mb-20 md:gap-5">
                    <h3 className="whitespace-nowrap rounded-md border border-slate-200 bg-white p-2 font-medium text-slate-700 shadow-sm dark:border-transparent dark:bg-slate-800 dark:text-slate-100">
                        <a
                            href="https://laravel.com/docs/9.x/sanctum"
                            target="_blank"
                            rel="noreferrer">
                            Sanctum
                        </a>
                    </h3>
                    <h3 className="whitespace-nowrap rounded-md border border-slate-200 bg-white p-2 font-medium text-slate-700 shadow-sm dark:border-transparent dark:bg-slate-800 dark:text-slate-100">
                        <span>Authentication</span>
                    </h3>
                    <h3 className="whitespace-nowrap rounded-md border border-slate-200 bg-white p-2 font-medium text-slate-700 shadow-sm dark:border-transparent dark:bg-slate-800 dark:text-slate-100">
                        <span>Roles/Permissions</span>
                    </h3>
                    <h3 className="whitespace-nowrap rounded-md border border-slate-200 bg-white p-2 font-medium text-slate-700 shadow-sm dark:border-transparent dark:bg-slate-800 dark:text-slate-100">
                        <a
                            href="https://tailwindcss.com/"
                            target="_blank"
                            rel="noreferrer">
                            Tailwind CSS
                        </a>
                    </h3>
                    <h3 className="whitespace-nowrap rounded-md border border-slate-200 bg-white p-2 font-medium text-slate-700 shadow-sm dark:border-transparent dark:bg-slate-800 dark:text-slate-100">
                        <a
                            href="https://heroicons.com/"
                            target="_blank"
                            rel="noreferrer">
                            Heroicons
                        </a>
                    </h3>
                    <h3 className="whitespace-nowrap rounded-md border border-slate-200 bg-white p-2 font-medium text-slate-700 shadow-sm dark:border-transparent dark:bg-slate-800 dark:text-slate-100">
                        <a
                            href="https://headlessui.dev/"
                            target="_blank"
                            rel="noreferrer">
                            Headless UI
                        </a>
                    </h3>
                    <h3 className="whitespace-nowrap rounded-md border border-slate-200 bg-white p-2 font-medium text-slate-700 shadow-sm dark:border-transparent dark:bg-slate-800 dark:text-slate-100">
                        <a
                            href="https://github.com/pacocoursey/next-themes"
                            target="_blank"
                            rel="noreferrer">
                            Dark Mode
                        </a>
                    </h3>
                    <h3 className="whitespace-nowrap rounded-md border border-slate-200 bg-white p-2 font-medium text-slate-700 shadow-sm dark:border-transparent dark:bg-slate-800 dark:text-slate-100">
                        <a
                            href="https://www.typescriptlang.org/"
                            target="_blank"
                            rel="noreferrer">
                            TypeScript
                        </a>
                    </h3>
                </div>
                <div className="mb-10 flex max-w-4xl flex-wrap items-center justify-around gap-4 sm:w-full md:mb-20 md:grid md:grid-cols-2">
                    <a
                        target="_blank"
                        href="https://nextjs.org/docs"
                        className="group w-full rounded-xl border bg-white p-6 text-left text-slate-700 shadow-sm dark:border-transparent dark:bg-slate-800 dark:text-white"
                        rel="noreferrer">
                        <h2 className="text-2xl font-bold group-hover:underline">
                            Documentation &rarr;
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                            Find in-depth information about Next.js features and
                            API.
                        </p>
                    </a>
                    <a
                        target="_blank"
                        href="https://nextjs.org/learn"
                        className="group w-full rounded-xl border bg-white p-6 text-left text-slate-700 shadow-sm dark:border-transparent dark:bg-slate-800 dark:text-white"
                        rel="noreferrer">
                        <h2 className="text-2xl font-bold group-hover:underline">
                            Learn &rarr;
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                            Learn about Next.js in an interactive course with
                            quizzes!
                        </p>
                    </a>
                    <a
                        target="_blank"
                        href="https://github.com/vercel/next.js/tree/master/examples"
                        className="group w-full rounded-xl border bg-white p-6 text-left text-slate-700 shadow-sm dark:border-transparent dark:bg-slate-800 dark:text-white"
                        rel="noreferrer">
                        <h2 className="text-2xl font-bold group-hover:underline">
                            Examples &rarr;
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                            Discover and deploy boilerplate example Next.js
                            projects.
                        </p>
                    </a>
                    <a
                        target="_blank"
                        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className="group w-full rounded-xl border bg-white p-6 text-left text-slate-700 shadow-sm dark:border-transparent dark:bg-slate-800 dark:text-white"
                        rel="noreferrer">
                        <h2 className="text-2xl font-bold group-hover:underline">
                            Deploy &rarr;
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                            Instantly deploy your Next.js site to a public URL
                            with Vercel.
                        </p>
                    </a>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Index
