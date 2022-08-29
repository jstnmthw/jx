import React, { FormEvent, useEffect, useReducer } from 'react'
import { UserResponse } from '@/types/response'
import { NextPage } from 'next'
import { useAuth } from '@/hooks/auth'
import { profileReducer } from '@/reducers/profile'
import Input from '@/components/form/Input'
import Button from '@/components/ui/Button'
import UserLayout from '@/components/layouts/UserLayout'
import SettingsLayout from '@/components/layouts/SettingsLayout'
import Head from 'next/head'
import axios from '@/lib/axios'

const Profile: NextPage = () => {
    const { user: user }: UserResponse = useAuth()
    const [state, dispatch] = useReducer(profileReducer, {
        name: ''
    })

    useEffect(() => {
        if (user) {
            dispatch({
                type: 'initialize',
                payload: {
                    name: user.name
                }
            })
        }
    }, [user])

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        event.stopPropagation()

        dispatch({ type: 'submitted' })

        const formData = {
            name: state.name
        }

        axios
            .put('/api/users/' + user?.id, formData)
            .then(() => {
                dispatch({ type: 'success' })
            })
            .catch(e => {
                dispatch({ type: 'error', payload: e })
            })
    }

    return (
        <UserLayout>
            <Head>
                <title>Profile - Jx</title>
            </Head>
            <SettingsLayout>
                <form className="p-10 md:col-span-2" onSubmit={handleSubmit}>
                    <h2 className="mb-1 text-lg font-medium">Profile</h2>
                    <div className="mb-6 text-sm text-slate-500">
                        This information will be displayed publicly so be
                        careful what you share.
                    </div>
                    <label
                        htmlFor="first-name"
                        className="mb-1 block text-sm font-medium text-slate-700">
                        Name
                    </label>
                    <Input
                        id="first-name"
                        name="first_name"
                        type="text"
                        className="mt-1 mb-8 block w-full"
                        value={state.name}
                        onChange={e =>
                            dispatch({
                                type: 'updateField',
                                field: 'name',
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

export default Profile
