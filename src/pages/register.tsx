import Link from 'next/link'
import React, { ChangeEvent, useState } from 'react'
import { NextPage } from 'next'
import { useAuth } from '@/hooks/auth'
import Head from 'next/head'
import Logo from '@/components/Logo'
import Input from '@/components/form/Input'
import Label from '@/components/form/Label'
import Button from '@/components/ui/Button'
import ErrorCard from '@/components/form/ErrorCard'

const Register: NextPage = () => {
    const { register, loading } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard'
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState<[]>([])

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        register({ name, email, password, password_confirmation, setErrors })
    }

    return (
        <>
            <Head>
                <title>Register - Jx</title>
            </Head>
            <main id="__main" className="items-center justify-center">
                <div>
                    <div className="mb-2 flex justify-center">
                        <Link href="/">
                            <a title="Homepage">
                                <Logo className="h-14 w-14" />
                            </a>
                        </Link>
                    </div>
                    <h2 className="text-center text-xl font-semibold">
                        Register
                    </h2>
                    <form
                        onSubmit={submitForm}
                        className="mb-8 w-[400px] rounded-lg p-10 shadow-xl">
                        <ErrorCard errors={errors} className="mb-3" />
                        <div className="mb-4">
                            <Label
                                htmlFor="name"
                                className="mb-1.5 inline-block">
                                Name:
                            </Label>
                            <Input
                                id="name"
                                type="text"
                                value={name}
                                className="block w-full"
                                onChange={(
                                    event: ChangeEvent<HTMLInputElement>
                                ) => setName(event.target.value)}
                                required
                                autoFocus
                            />
                        </div>
                        <div className="mb-4">
                            <Label
                                htmlFor="email"
                                className="mb-1.5 inline-block">
                                Email:
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                className="block w-full"
                                onChange={(
                                    event: ChangeEvent<HTMLInputElement>
                                ) => setEmail(event.target.value)}
                                required
                                autoFocus
                            />
                        </div>
                        <div className="mb-4">
                            <Label
                                htmlFor="password"
                                className="mb-1.5 inline-block">
                                Password:
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                className="block w-full"
                                onChange={(
                                    event: ChangeEvent<HTMLInputElement>
                                ) => setPassword(event.target.value)}
                                required
                                autoFocus
                            />
                        </div>
                        <div className="mb-6">
                            <Label
                                htmlFor="password-confirm"
                                className="mb-1.5 inline-block">
                                Confirm Password:
                            </Label>
                            <Input
                                id="password-confirm"
                                type="password"
                                value={password_confirmation}
                                className="block w-full"
                                onChange={(
                                    event: ChangeEvent<HTMLInputElement>
                                ) =>
                                    setPasswordConfirmation(event.target.value)
                                }
                                required
                                autoFocus
                            />
                        </div>
                        <div className="flex items-center justify-end text-center">
                            <Button
                                buttonType="primary"
                                loading={loading}
                                className="w-full justify-center">
                                Register
                            </Button>
                        </div>
                    </form>
                    <div className="flex items-center justify-center">
                        <Link href="/login">
                            <a className="text-sm text-slate-600 hover:text-slate-900 hover:underline">
                                Already have an account?
                            </a>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Register
