import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { PencilIcon } from '@heroicons/react/outline'

export default function Dropdown() {
    return (
        <div>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        Options
                        <ChevronDownIcon
                            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-slate-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active
                                                ? 'bg-violet-500 text-white'
                                                : 'text-slate-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                        {active ? (
                                            <PencilIcon className="mr-2 inline-block h-5 w-5" />
                                        ) : (
                                            <PencilIcon className="mr-2 inline-block h-5 w-5" />
                                        )}
                                        Edit
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active
                                                ? 'bg-violet-500 text-white'
                                                : 'text-slate-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                        {active ? (
                                            <PencilIcon className="mr-2 inline-block h-5 w-5" />
                                        ) : (
                                            <PencilIcon className="mr-2 inline-block h-5 w-5" />
                                        )}
                                        Duplicate
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active
                                                ? 'bg-violet-500 text-white'
                                                : 'text-slate-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                        {active ? (
                                            <PencilIcon className="mr-2 inline-block h-5 w-5" />
                                        ) : (
                                            <PencilIcon className="mr-2 inline-block h-5 w-5" />
                                        )}
                                        Archive
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active
                                                ? 'bg-violet-500 text-white'
                                                : 'text-slate-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                        {active ? (
                                            <PencilIcon className="mr-2 inline-block h-5 w-5" />
                                        ) : (
                                            <PencilIcon className="mr-2 inline-block h-5 w-5" />
                                        )}
                                        Move
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active
                                                ? 'bg-violet-500 text-white'
                                                : 'text-slate-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                        {active ? (
                                            <PencilIcon className="mr-2 inline-block h-5 w-5" />
                                        ) : (
                                            <PencilIcon className="mr-2 inline-block h-5 w-5" />
                                        )}
                                        Delete
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
