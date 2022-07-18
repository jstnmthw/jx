import React, { FC, useState } from 'react'
import { PlusCircleIcon, XIcon } from '@heroicons/react/solid'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'
import UserForm from '@/components/admin/UserForm'

const AddUserModal: FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    function handleClose() {
        setIsOpen(false)
    }

    return (
        <>
            <Button
                aria-label="Add User"
                buttonType="light"
                onClick={() => setIsOpen(!isOpen)}>
                Add User{' '}
                <PlusCircleIcon className="ml-2 inline-block h-4 w-4 text-gray-400" />
            </Button>
            <Modal
                isOpen={isOpen}
                handleClose={handleClose}
                header={
                    <div className="m-10 mb-4 border-b border-gray-200 pb-2">
                        Add new user
                    </div>
                }
                body={
                    <div className="p-10 pt-0">
                        <XIcon
                            onClick={handleClose}
                            className="absolute right-4 top-4 block h-6 w-6 cursor-pointer text-gray-400 hover:text-gray-600"
                        />
                        <UserForm handleClose={handleClose} />
                    </div>
                }
            />
        </>
    )
}

export default AddUserModal
