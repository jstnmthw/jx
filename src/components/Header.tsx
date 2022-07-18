import { FC } from 'react'
import { User } from '@/types/user'
import Link from 'next/link'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { ChartPieIcon, CogIcon, LogoutIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import Logo from '@/components/Logo'
import ButtonLink from '@/components/ui/ButtonLink'
import Avatar from '@/components/ui/Avatar'

const Header: FC<{ user?: User; logout?: () => void }> = ({ user, logout }) => {
    const router = useRouter()
    return (
        <nav>
            <div className="mx-auto max-w-4xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <Link href="/">
                        <a>
                            <h1>
                                <Logo className={'h-[38px]'} />
                                <span className="sr-only">
                                    Jx - NextJS Starter Kit
                                </span>
                            </h1>
                        </a>
                    </Link>
                    <div className="flex flex-row items-center gap-5">
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
                                                className="relative top-1 -mr-1 h-5 w-5"
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
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                                                                    ? 'bg-gray-100 text-gray-900'
                                                                    : 'text-gray-600'
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
                                                                    ? 'bg-gray-100 text-gray-900'
                                                                    : 'text-gray-600'
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
                                                                    ? 'bg-gray-100 text-gray-900'
                                                                    : 'text-gray-600'
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
                            <>
                                <Link href="/login">
                                    <a className="font-medium">Login</a>
                                </Link>
                                <Link href="/register" passHref>
                                    <ButtonLink
                                        buttonType="primary"
                                        className="font-medium">
                                        Register
                                    </ButtonLink>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
