import { useTheme } from 'next-themes'
import { DesktopComputerIcon, MoonIcon } from '@heroicons/react/solid'
import { SunIcon } from '@heroicons/react/outline'
import { FC, Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'

const DarkModeButton: FC<{ iconOnly?: boolean; className?: string }> = ({
    iconOnly = false,
    className
}) => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className={className}>
                {theme === 'light' && (
                    <>
                        <SunIcon className="inline-block h-4 w-4" />
                        {iconOnly || <span className="ml-1.5">Light</span>}
                    </>
                )}
                {theme === 'dark' && (
                    <>
                        <MoonIcon className="inline-block h-4 w-4" />
                        {iconOnly || <span className="ml-1.5">Dark</span>}
                    </>
                )}
                {theme === 'system' && (
                    <>
                        <DesktopComputerIcon className="inline-block h-4 w-4" />
                        {iconOnly || <span className="ml-1.5">Dark</span>}
                    </>
                )}
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="pointer-events-auto absolute right-0 z-10 mt-2 w-32 origin-top-right divide-y divide-slate-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800">
                    <div className="px-2 py-2">
                        {Themes().map(themeItem => {
                            const ThemeIcon = themeItem.icon
                            return (
                                <Menu.Item key={themeItem.id}>
                                    {({ active }) => (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setTheme(themeItem.name)
                                            }}
                                            className={`${
                                                active
                                                    ? 'bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-100'
                                                    : 'text-slate-600 dark:text-slate-400'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium`}>
                                            <div
                                                className={
                                                    (themeItem.name === theme &&
                                                        'text-blue') +
                                                    ' mr-2 flex h-6 w-6 flex-none items-center justify-center rounded-md bg-white shadow ring-1 ring-slate-900/10 dark:border dark:border-slate-700 dark:bg-slate-800 dark:shadow-none'
                                                }>
                                                <ThemeIcon
                                                    className={
                                                        (themeItem.name ===
                                                        theme
                                                            ? 'text-blue'
                                                            : 'text-slate-400 group-hover:text-slate-500') +
                                                        ' h-4 w-4'
                                                    }
                                                />
                                            </div>
                                            {themeItem.label}
                                        </button>
                                    )}
                                </Menu.Item>
                            )
                        })}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
export default DarkModeButton

/**
 * Define your themes here.
 */
export function Themes() {
    return [
        {
            id: 1,
            name: 'light',
            label: 'Light',
            icon: ({ className }: { className: string }) => (
                <SunIcon className={className} />
            )
        },
        {
            id: 2,
            name: 'dark',
            label: 'Dark',
            icon: ({ className }: { className: string }) => (
                <MoonIcon className={className} />
            )
        },
        {
            id: 3,
            name: 'system',
            label: 'System',
            icon: ({ className }: { className: string }) => (
                <DesktopComputerIcon className={className} />
            )
        }
    ]
}
