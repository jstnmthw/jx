import React, { FC, useState } from 'react'
import { User } from '@/types/user'
import { XIcon } from '@heroicons/react/solid'
import { PencilAltIcon } from '@heroicons/react/outline'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'
import UserForm from '@/components/admin/UserForm'

const EditUserModal: FC<{ user: User }> = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false)

    function handleClose() {
        setIsOpen(false)
    }

    return (
        <>
            <Button
                aria-label="Edit User"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">
                <PencilAltIcon className="inline-block h-5 w-5" />
            </Button>
            <Modal
                backgroundBlur={true}
                isOpen={isOpen}
                handleClose={handleClose}
                header={
                    <div className="m-10 mb-4 border-b border-slate-200 pb-2 dark:border-slate-700 dark:text-white">
                        Edit {user.name}
                    </div>
                }
                body={
                    <div className="p-10 pt-0">
                        <XIcon
                            onClick={handleClose}
                            className="absolute right-4 top-4 block h-6 w-6 cursor-pointer text-slate-400 hover:text-slate-600"
                        />
                        <UserForm user={user} handleClose={handleClose} />
                    </div>
                }
            />
        </>
    )
}

export default EditUserModal
