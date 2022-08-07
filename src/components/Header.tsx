import React, { FC, useState } from 'react'
import { User } from '@/types/user'
import Link from 'next/link'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, MenuAlt2Icon, XIcon } from '@heroicons/react/solid'
import { ChartPieIcon, CogIcon, LogoutIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import Logo from '@/components/Logo'
import ButtonLink from '@/components/ui/ButtonLink'
import Avatar from '@/components/ui/Avatar'
import DarkModeButton from '@/components/ui/DarkModeButton'
import Button from '@/components/ui/Button'
import Modal from '@/components/ui/Modal'

const Header: FC<{ user?: User; logout?: () => void }> = ({ user, logout }) => {
    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState(false)

    function handleClose() {
        setMenuOpen(false)
    }

    return (
        <nav className="w-full border-b dark:border-slate-700 md:border-0">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/">
                            <a>
                                <h1 className="text-slate-900 dark:text-white">
                                    <Logo className="h-[32px]" />
                                    <span className="sr-only">
                                        Jx - Next.js Starter Kit
                                    </span>
                                </h1>
                            </a>
                        </Link>
                        <div className="hidden text-sm font-medium text-slate-500 dark:text-slate-500 md:block">
                            <span className="text-lg font-bold text-slate-900 dark:text-white">
                                Jx
                            </span>{' '}
                            &mdash; Built with Next.js, tailored for
                            Laravel&apos;s API.
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-5">
                        <DarkModeButton
                            iconOnly
                            className="highlight-hover flex flex-none items-center justify-center rounded-md border bg-white p-1 text-slate-600 shadow transition-all hover:text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                        />
                        <Button className="group text-sm font-medium text-slate-600 transition-colors dark:text-slate-400 dark:hover:text-slate-300">
                            v0.1.0
                            <ChevronDownIcon className="inline-block h-4 w-4 transition-colors dark:text-slate-600 dark:group-hover:text-slate-500" />
                        </Button>
                        {user ? (
                            <>
                                <Menu
                                    as="div"
                                    className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                            <Avatar
                                                className={'h-8 w-8'}
                                                user={user}
                                            />
                                            <ChevronDownIcon
                                                className="relative top-1 -mr-1 h-4 w-4 dark:text-slate-500"
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
                                        <Menu.Items className="highlight absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-slate-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800">
                                            <div className="px-1 py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            onClick={() => {
                                                                router.push(
                                                                    '/dashboard'
                                                                )
                                                            }}
                                                            className={`${
                                                                active
                                                                    ? 'bg-slate-100 text-slate-900 dark:bg-slate-900/50 dark:text-slate-300'
                                                                    : 'text-slate-600 dark:text-slate-500'
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium`}>
                                                            <ChartPieIcon className="mr-2 inline-block h-5 w-5" />
                                                            Dashboard
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            onClick={() => {
                                                                router.push(
                                                                    '/my/settings'
                                                                )
                                                            }}
                                                            className={`${
                                                                active
                                                                    ? 'bg-slate-100 text-slate-900 dark:bg-slate-900/50 dark:text-slate-300'
                                                                    : 'text-slate-600 dark:text-slate-500'
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium`}>
                                                            <CogIcon className="mr-2 inline-block h-5 w-5" />
                                                            Settings
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            onClick={logout}
                                                            className={`${
                                                                active
                                                                    ? 'bg-slate-100 text-slate-900 dark:bg-slate-900/50 dark:text-slate-300'
                                                                    : 'text-slate-600 dark:text-slate-500'
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium`}>
                                                            <LogoutIcon className="mr-2 inline-block h-5 w-5" />
                                                            Logout
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </>
                        ) : (
                            <div className="flex items-center">
                                <Button
                                    aria-label="Open navigation"
                                    onClick={() => setMenuOpen(true)}
                                    buttonType="light"
                                    className="p-1.5 md:hidden">
                                    <MenuAlt2Icon className="h-6 w-6" />
                                </Button>
                                <Modal
                                    backgroundBlur
                                    shadowClass="shadow"
                                    positionClass="fixed -top-7 -right-7 overflow-y-auto"
                                    isOpen={menuOpen}
                                    handleClose={handleClose}
                                    body={
                                        <div className="px-6 py-4">
                                            <button
                                                className="absolute right-4 top-4"
                                                type="button"
                                                onClick={handleClose}
                                                aria-label="Close navigation">
                                                <XIcon className="block h-6 w-6 cursor-pointer text-slate-400 hover:text-slate-600" />
                                            </button>
                                            <div className="flex w-72 flex-col">
                                                <Link href="/login" passHref>
                                                    <a className="p-2 font-semibold hover:text-blue">
                                                        Login
                                                    </a>
                                                </Link>
                                                <Link href="/register" passHref>
                                                    <a className="p-2 font-semibold hover:text-blue">
                                                        Register
                                                    </a>
                                                </Link>
                                                <Link href="/register" passHref>
                                                    <a className="p-2 font-semibold hover:text-blue">
                                                        Docs
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    }
                                />
                                <div className="hidden gap-3 md:flex">
                                    <Link href="/login" passHref>
                                        <ButtonLink
                                            buttonType="light"
                                            className="w-full shadow-md hover:shadow-sm">
                                            Login
                                        </ButtonLink>
                                    </Link>
                                    <Link href="/register" passHref>
                                        <ButtonLink
                                            buttonType="primary"
                                            className="w-full font-medium">
                                            Register
                                        </ButtonLink>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
