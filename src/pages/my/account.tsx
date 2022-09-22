import { NextPage } from 'next'
import UserLayout from '@/components/layouts/UserLayout'
import SettingsLayout from '@/components/layouts/SettingsLayout'
import React, { FormEvent, useEffect, useReducer } from 'react'
import Head from 'next/head'
import axios from '@/lib/axios'
import { UserResponse } from '@/types/response'
import { useAuth } from '@/hooks/auth'
import { profileReducer } from '@/reducers/profile'
import Input from '@/components/form/Input'
import Button from '@/components/ui/Button'
import Errors from '@/components/form/ErrorCard'

const Account: NextPage = () => {
    const { user: user }: UserResponse = useAuth()
    const [state, dispatch] = useReducer(profileReducer, {
        email: '',
        error: false,
        errorMessages: undefined
    })

    useEffect(() => {
        if (user) {
            dispatch({
                type: 'initialize',
                payload: {
                    email: user.email
                }
            })
        }
    }, [user])

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        event.stopPropagation()

        dispatch({ type: 'submitted' })

        const formData = {
            email: state.name,
            new_password: state.new_password,
            new_password_confirmed: state.new_password_confirmed
        }

        axios
            .put('/api/users/' + user?.id, formData)
            .then(() => {
                dispatch({ type: 'success' })
            })
            .catch(e => {
                dispatch({ type: 'error', payload: e.response.data.errors })
            })
    }

    return (
        <UserLayout>
            <Head>
                <title>Account - Jx</title>
            </Head>
            <SettingsLayout>
                <form className="p-10 md:col-span-2" onSubmit={handleSubmit}>
                    <h2 className="mb-1 text-lg font-medium">Account</h2>
                    <div className="mb-6 text-sm text-slate-500">
                        This information will be displayed publicly so be
                        careful what you share.
                    </div>
                    <label
                        htmlFor="first-name"
                        className="mb-1 block text-sm font-medium text-slate-700">
                        Email
                    </label>
                    {state.errorMessages?.email && (
                        <Errors errors={state.errorMessages?.email} />
                    )}
                    <Input
                        disabled
                        id="email"
                        name="email"
                        type="text"
                        className="mt-1 mb-6 block w-full"
                        placeholder={state.email}
                    />
                    <label
                        htmlFor="new-password"
                        className="mb-1 block text-sm font-medium text-slate-700">
                        New Password
                    </label>
                    {state.errorMessages?.new_password && (
                        <Errors errors={state.errorMessages?.new_password} />
                    )}
                    <Input
                        id="new-password"
                        name="new-password"
                        type="password"
                        className="mt-1 mb-6 block w-full"
                        value={state.new_password}
                        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                        onChange={e =>
                            dispatch({
                                type: 'updateField',
                                field: 'new_password',
                                value: e.target.value
                            })
                        }
                    />
                    <label
                        htmlFor="password-confirm"
                        className="mb-1 block text-sm font-medium text-slate-700">
                        Confirm New Password
                    </label>
                    <Input
                        id="new-password-confirmed"
                        name="new-password-confirmed"
                        type="password"
                        className="mt-1 mb-6 block w-full"
                        value={state.new_password_confirmed}
                        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                        onChange={e =>
                            dispatch({
                                type: 'updateField',
                                field: 'new_password_confirmed',
                                value: e.target.value
                            })
                        }
                    />
                    <div className="flex justify-end">
                        <Button loading={state.loading} buttonType="primary">
                            Submit
                        </Button>
                    </div>
                </form>
            </SettingsLayout>
        </UserLayout>
    )
}

export default Account
