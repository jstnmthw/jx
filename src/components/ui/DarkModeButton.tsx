import { useTheme } from 'next-themes'
import { MoonIcon } from '@heroicons/react/solid'
import { SunIcon } from '@heroicons/react/outline'
import { FC, useEffect, useState } from 'react'

const DarkModeButton: FC<{ iconOnly?: boolean; className?: string }> = ({
    iconOnly = false,
    className
}) => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <button
            className={className}
            type="button"
            onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light')
            }}>
            {theme === 'light' ? (
                <>
                    <SunIcon className="inline-block h-5 w-5 opacity-60" />
                    {iconOnly || <span className="ml-1.5">Light</span>}
                </>
            ) : (
                <>
                    <MoonIcon className="inline-block h-5 w-5 opacity-60" />
                    {iconOnly || <span className="ml-1.5">Dark</span>}
                </>
            )}
        </button>
    )
}
export default DarkModeButton
