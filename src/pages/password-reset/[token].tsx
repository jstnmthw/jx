import React, { ChangeEvent, useEffect, useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import Button from '@/components/ui/Button'
import Input from '@/components/form/Input'
import Label from '@/components/form/Label'
import Logo from '@/components/Logo'
import ErrorCard from '@/components/form/ErrorCard'
import StatusCard from '@/components/form/StatusCard'

const PasswordReset: NextPage = () => {
    const router = useRouter()

    const { resetPassword, loading } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard'
    })

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState<[]>([])
    const [status, setStatus] = useState<string | null>(null)

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        resetPassword({
            email,
            password,
            password_confirmation,
            setErrors,
            setStatus
        })
    }

    useEffect(() => {
        setEmail(router.query.email as string)
    }, [router.query.email])

    return (
        <main id="__main" className="items-center justify-center">
            <div>
                <div className="mb-4 flex justify-center">
                    <Link href="/">
                        <a title="Homepage">
                            <Logo className="h-16 w-16" />
                        </a>
                    </Link>
                </div>
                <form
                    onSubmit={submitForm}
                    className="w-[450px] rounded-lg px-10 py-6 shadow-xl">
                    <h2 className="mb-4 text-center text-xl font-semibold">
                        Reset password
                    </h2>
                    <ErrorCard errors={errors} className="mb-3" />
                    <StatusCard status={status} />
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            className="mt-1 block w-full"
                            onChange={(event: ChangeEvent) =>
                                setEmail(
                                    (event.target as HTMLInputElement).value
                                )
                            }
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
                            onChange={(event: ChangeEvent) =>
                                setPassword(
                                    (event.target as HTMLInputElement).value
                                )
                            }
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <Label htmlFor="password_confirmation">
                            Confirm Password
                        </Label>

                        <Input
                            id="password_confirmation"
                            type="password"
                            value={password_confirmation}
                            className="mt-1 block w-full"
                            onChange={(event: ChangeEvent) =>
                                setPasswordConfirmation(
                                    (event.target as HTMLInputElement).value
                                )
                            }
                            required
                        />
                    </div>
                    <div className="mt-4 flex items-center justify-end">
                        <Button color="gray">
                            {loading ? 'Loading' : 'Reset Password'}
                        </Button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default PasswordReset
