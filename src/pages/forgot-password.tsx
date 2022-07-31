import React, { ChangeEvent, useState } from 'react'
import Link from 'next/link'
import { NextPage } from 'next'
import { useAuth } from '@/hooks/auth'
import Head from 'next/head'
import Logo from '@/components/Logo'
import Label from '@/components/form/Label'
import Input from '@/components/form/Input'
import Button from '@/components/ui/Button'
import ErrorCard from '@/components/form/ErrorCard'
import StatusCard from '@/components/form/StatusCard'
import GradientShadow from '@/components/ui/GradientShadow'

const ForgotPassword: NextPage = () => {
    const { forgotPassword, loading } = useAuth({ middleware: 'guest' })

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState<[]>([])
    const [status, setStatus] = useState<string | null>(null)

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        forgotPassword({ email, setErrors, setStatus })
    }
    return (
        <>
            <Head>
                <title>Forgot Password - Jx</title>
            </Head>
            <main id="__main" className="items-center justify-center">
                <div>
                    <div className="mb-4 flex justify-center">
                        <Link href="/">
                            <a title="Homepage">
                                <Logo className="h-14 w-14 dark:text-blue" />
                            </a>
                        </Link>
                    </div>
                    <h2 className="mb-5 text-center text-xl font-semibold">
                        Reset password
                    </h2>
                    <div className="relative">
                        <GradientShadow position="bottom" />
                        <form
                            onSubmit={submitForm}
                            className="highlight relative mb-8 w-[450px] rounded-lg bg-white p-8 shadow-xl dark:bg-slate-800">
                            <ErrorCard errors={errors} className="mb-3" />
                            <StatusCard status={status} />
                            <div className="flex w-full items-center space-x-2">
                                <Label
                                    htmlFor="name"
                                    className="dark:text-slate-300">
                                    Email:
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    value={email}
                                    className="block w-full"
                                    onChange={(
                                        event: ChangeEvent<HTMLInputElement>
                                    ) => setEmail(event.target.value)}
                                    required
                                    autoFocus
                                />
                                <Button
                                    buttonType="primary"
                                    loading={loading}
                                    className="ml-8">
                                    Reset
                                </Button>
                            </div>
                        </form>
                    </div>
                    <div className="text-center">
                        <Link href="/login">
                            <a className="text-sm text-slate-600 hover:text-slate-900 hover:underline dark:text-slate-400 dark:hover:text-slate-300">
                                Back to login
                            </a>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ForgotPassword
