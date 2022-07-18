import axios from '@/lib/axios'
import React, { FC, FormEvent, useState } from 'react'
import { User } from '@/types/user'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'
import { XIcon } from '@heroicons/react/solid'
import { ExclamationIcon, TrashIcon } from '@heroicons/react/outline'
import { useSWRConfig } from 'swr'
import LoadingIcon from '@/components/ui/LoadingIcon'

interface DeleteUserErrors {
    message?: string
}

const DeleteUserModal: FC<{ user: User }> = ({ user }) => {
    const { mutate } = useSWRConfig()
    const [loading, setLoading] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState(false)
    const [errors, setErrors] = useState<DeleteUserErrors | undefined>(
        undefined
    )

    const submitForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        event.stopPropagation()
        setLoading(true)
        setErrors(undefined)
        await axios
            .delete('/api/users/' + user.id)
            .then(() => {
                mutate('/api/users')
                handleClose()
                setTimeout(() => {
                    setLoading(false)
                }, 500)
            })
            .catch(error => {
                setLoading(false)
                if (
                    error.response.status !== 422 &&
                    error.response.status !== 403
                )
                    throw error

                setErrors(error.response.data)
            })
    }

    function handleClose() {
        setIsOpen(false)
    }

    return (
        <>
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-red-700 hover:text-red-500">
                <TrashIcon className="inline-block h-5 w-5" />
            </Button>
            <Modal
                isOpen={isOpen}
                handleClose={handleClose}
                body={
                    <form onSubmit={submitForm}>
                        <XIcon
                            onClick={handleClose}
                            className="absolute right-4 top-4 block h-6 w-6 cursor-pointer text-gray-400 hover:text-gray-600"
                        />
                        <div className="mb-8 flex grid grid-cols-5 p-10 pb-0">
                            <div className="col-span-1">
                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                                    <ExclamationIcon className="inline-block h-7 w-7 text-red-600" />
                                </span>
                            </div>
                            <div className="col-span-4">
                                <h2 className="mb-2 border-gray-200 text-lg font-medium">
                                    Delete account
                                </h2>
                                {errors?.message && (
                                    <>
                                        <div className="mb-2 flex items-center text-sm text-red-600">
                                            {errors?.message}
                                        </div>
                                    </>
                                )}
                                <p className="text-sm text-gray-600">
                                    Are you sure you want to delete this
                                    account? All of the data will be permanently
                                    removed. This action cannot be undone.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-end space-x-2 bg-gray-100 p-3">
                            <Button
                                type="button"
                                buttonType="light"
                                disabled={loading}
                                onClick={() => handleClose()}>
                                Cancel
                            </Button>
                            <Button
                                buttonType="danger"
                                type="submit"
                                disabled={loading}
                                className={loading ? 'text-transparent ' : ''}>
                                {loading && (
                                    <LoadingIcon className="absolute left-1/2 -ml-3 block h-6 w-6 text-red-200" />
                                )}
                                Delete
                            </Button>
                        </div>
                    </form>
                }
            />
        </>
    )
}

export default DeleteUserModal
