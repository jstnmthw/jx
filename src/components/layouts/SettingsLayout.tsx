import Link from 'next/link'
import React from 'react'
import { Props } from '@/types/props'
import { CogIcon, UserCircleIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

export default function SettingsLayout({ children }: Props) {
    const router = useRouter()

    const SettingsMenu = [
        {
            id: 1,
            label: 'Profile',
            url: '/my/profile',
            icon: ({ className }: { className: string }) => (
                <UserCircleIcon className={className} />
            )
        },
        {
            id: 2,
            label: 'Account',
            url: '/my/account',
            icon: ({ className }: { className: string }) => (
                <CogIcon className={className} />
            )
        }
    ]

    return (
        <div className="mb-10 w-full md:mb-20">
            <div className="mx-auto max-w-4xl px-2 sm:px-6 lg:px-8">
                <div className="my-5 flex flex-col justify-between space-y-5 sm:flex-row sm:space-y-0">
                    <h2 className="text-2xl font-semibold tracking-tight dark:text-white">
                        Settings
                    </h2>
                </div>
                <div className="highlight flex rounded-lg bg-white shadow dark:bg-slate-800 md:grid md:grid-cols-3">
                    <ul className="border-r py-4 md:col-span-1">
                        {SettingsMenu.map(menuItem => {
                            const MenuIcon = menuItem.icon
                            return (
                                <li key={menuItem.id}>
                                    <Link href={menuItem.url} passHref>
                                        <a
                                            className={
                                                (router.pathname == menuItem.url
                                                    ? 'border-blue-500 bg-blue-100/10 text-slate-800 '
                                                    : 'border-transparent bg-white text-slate-600 hover:text-slate-800 ') +
                                                'inline-block flex w-full items-center border-l-4 px-4 py-3 text-sm font-medium'
                                            }>
                                            <MenuIcon
                                                className={
                                                    (router.pathname ==
                                                    menuItem.url
                                                        ? 'text-blue-200 '
                                                        : 'text-gray-400 ') +
                                                    'mr-3 inline-block h-5 w-5'
                                                }
                                            />
                                            {menuItem.label}
                                        </a>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    {children}
                </div>
            </div>
        </div>
    )
}
