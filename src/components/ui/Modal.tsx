import { Dialog, Transition } from '@headlessui/react'
import { FC, ReactNode, Fragment } from 'react'

interface ModelProps {
    isOpen: boolean
    handleClose: () => void
    header?: ReactNode
    body: ReactNode
    positionClass?: string
    shadowClass?: string
    backgroundBlur?: boolean
    animate?: true
}

const Modal: FC<ModelProps> = ({
    isOpen,
    handleClose,
    header,
    body,
    positionClass = 'fixed inset-0 overflow-y-auto',
    shadowClass = 'shadow-lg',
    backgroundBlur = false
}) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={handleClose}>
                    {backgroundBlur && (
                        <Dialog.Overlay className="fixed inset-0 backdrop-blur-sm dark:bg-slate-900/80" />
                    )}
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className={positionClass}>
                        <div className="flex min-h-full items-center justify-center p-10 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95">
                                <Dialog.Panel
                                    className={`${shadowClass} w-full max-w-md transform overflow-hidden rounded-lg bg-white text-left align-middle transition-all`}>
                                    {header && (
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900">
                                            {header}
                                        </Dialog.Title>
                                    )}
                                    {body}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Modal
