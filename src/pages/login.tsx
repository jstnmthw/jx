import React, { ChangeEvent, useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/auth'
import Input from '@/components/form/Input'
import Label from '@/components/form/Label'
import Button from '@/components/ui/Button'
import Logo from '@/components/Logo'
import ErrorCard from '@/components/form/ErrorCard'
import StatusCard from '@/components/form/StatusCard'
import Head from 'next/head'
import Link from 'next/link'
import GradientShadow from '@/components/ui/GradientShadow'

const Login: NextPage = () => {
    const router = useRouter()

    const { login, loading } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard'
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<[]>([])
    const [status, setStatus] = useState<string | null>(null)

    useEffect(() => {
        if (router.query && router.query.reset) {
            if (router.query.reset?.length > 0 && errors?.length === 0) {
                setStatus(window.atob(router.query.reset as string))
            } else {
                setStatus(null)
            }
        }
    }, [errors, router.query])

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        login({ email, password, setErrors, setStatus })
    }
    return (
        <>
            <Head>
                <title>Login - Jx</title>
            </Head>
            <main
                id="__main"
                className="items-center justify-center bg-gray-50">
                <div>
                    <div className="mb-2 flex justify-center">
                        <Link href="/">
                            <a title="Homepage">
                                <Logo className="h-14 w-14" />
                            </a>
                        </Link>
                    </div>
                    <h2 className="mb-5 text-center text-xl font-semibold">
                        Sign In
                    </h2>
                    <div className="relative">
                        <GradientShadow position="bottom" />
                        <form
                            onSubmit={submitForm}
                            className="relative mb-6 w-full w-[400px] rounded-lg bg-white px-10 py-8 shadow">
                            <div>
                                <ErrorCard errors={errors} className="mb-3" />
                                <StatusCard status={status} />
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    className="mt-1 block w-full"
                                    onChange={(
                                        event: ChangeEvent<HTMLInputElement>
                                    ) => setEmail(event.target.value)}
                                    required
                                    autoFocus
                                />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    className="mt-1 block w-full"
                                    onChange={(
                                        event: ChangeEvent<HTMLInputElement>
                                    ) => setPassword(event.target.value)}
                                    required
                                    autoComplete="current-password"
                                />
                            </div>
                            <div className="mt-4 block">
                                <label
                                    htmlFor="remember_me"
                                    className="inline-flex items-center">
                                    <input
                                        id="remember_me"
                                        type="checkbox"
                                        name="remember"
                                        className="rounded border-gray-300 text-blue-500 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    />
                                    <span className="ml-2 text-sm text-gray-600">
                                        Remember me
                                    </span>
                                </label>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <Link href="/forgot-password">
                                    <a className="text-sm text-gray-600 underline hover:text-gray-900">
                                        Forgot your password?
                                    </a>
                                </Link>
                                <Button
                                    buttonType="primary"
                                    loading={loading}
                                    className="ml-8">
                                    Login
                                </Button>
                            </div>
                        </form>
                    </div>
                    <div className="text-center">
                        <Link href="/register">
                            <a className="text-sm text-gray-600 underline hover:text-gray-900">
                                Don&apos;t have an account?
                            </a>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login
