import Link from 'next/link'
import { NextPage } from 'next'
import { UserResponse } from '@/types/response'
import { useAuth } from '@/hooks/auth'
import { StarIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import ButtonLink from '@/components/ui/ButtonLink'

const Index: NextPage = () => {
    const { user: user }: UserResponse = useAuth({
        middleware: 'auth'
    })
    if (!user) return <div>Loading</div>

    return (
        <>
            <Head>
                <title>Dashboard - Jx</title>
            </Head>
            <DefaultLayout>
                <div className="w-full">
                    <div className="mx-auto max-w-4xl overflow-auto px-2 sm:px-6 lg:px-8">
                        <div className="my-5 flex flex-col justify-between space-y-5 sm:flex-row sm:space-y-0">
                            <div>
                                <h2 className="text-2xl font-semibold tracking-tight">
                                    Dashboard page
                                </h2>
                                <div>Welcome, {user.name}</div>
                            </div>
                            <div>
                                {user.roles.some(
                                    role => role.name === 'Admin'
                                ) && (
                                    <Link href={'/admin'} passHref>
                                        <ButtonLink buttonType="primary">
                                            Admin Dashboard
                                        </ButtonLink>
                                    </Link>
                                )}
                            </div>
                        </div>
                        <div className="mb-20 overflow-hidden bg-white shadow sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-lg font-medium leading-6 text-slate-900">
                                    Your information
                                </h3>
                                <p className="mt-1 max-w-2xl text-sm text-slate-500">
                                    Personal details about your account.
                                </p>
                            </div>
                            <div className="border-t border-slate-200">
                                <dl>
                                    <div className="bg-slate-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-slate-500">
                                            ID Number
                                        </dt>
                                        <dd className="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">
                                            {user.id}
                                        </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-slate-500">
                                            Full name
                                        </dt>
                                        <dd className="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">
                                            {user.name}
                                        </dd>
                                    </div>
                                    <div className="bg-slate-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-slate-500">
                                            Email address
                                        </dt>
                                        <dd className="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">
                                            {user.email}
                                        </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-slate-500">
                                            Account created:
                                        </dt>
                                        <dd className="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">
                                            {user.created_at}
                                        </dd>
                                    </div>
                                    {user.roles.length >= 1 && (
                                        <div className="bg-slate-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt className="text-sm font-medium text-slate-500">
                                                Roles:
                                            </dt>
                                            <dd className="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">
                                                {user.roles.map(role => {
                                                    const isAdminRole =
                                                        role.name.toLowerCase() ===
                                                        'admin'
                                                    return (
                                                        <span
                                                            key={role.id}
                                                            className="mr-2 inline-block rounded-lg bg-slate-800 px-2 py-1 text-white">
                                                            {isAdminRole && (
                                                                <StarIcon className="mr-1 inline-block h-4 w-4" />
                                                            )}
                                                            {role.name}
                                                        </span>
                                                    )
                                                })}
                                            </dd>
                                        </div>
                                    )}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    )
}

export default Index
