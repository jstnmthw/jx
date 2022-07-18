import React, { ComponentPropsWithoutRef, FC } from 'react'
import LoadingIcon from '@/components/ui/LoadingIcon'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    buttonType?: string
    loading?: boolean
}

const Button: FC<ButtonProps> = ({
    buttonType,
    loading = false,
    className,
    children,
    ...props
}) => {
    let selectedStyle = ''

    switch (buttonType) {
        case 'light':
            selectedStyle =
                'px-4 py-2 border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2'
            break
        case 'primary':
            selectedStyle =
                'px-4 py-2 rounded-md shadow-lg shadow-blue-500/50 text-white bg-blue-500 transition-colors hover:bg-blue-400 focus:outline-none relative active:top-0.5'
            break
        case 'primary-gradient':
            selectedStyle =
                'px-4 py-2 rounded-md shadow-lg shadow-blue-500/50 text-white bg-gradient-to-r from-blue-500 to-blue-300 transition-colors hover:bg-blue-400 focus:outline-none relative active:top-0.5'
            break
        case 'danger':
            selectedStyle =
                'px-4 py-2 rounded-md shadow-lg shadow-red-500/50 text-white bg-red-500 transition-colors hover:bg-red-600 focus:outline-none relative active:top-0.5'
            break
    }

    return (
        <button
            disabled={loading}
            className={
                (loading ? 'text-transparent ' : '') +
                (className ? className + ' ' : '') +
                `${selectedStyle} inline-flex cursor-pointer items-center rounded-md text-sm font-medium disabled:pointer-events-none disabled:cursor-default disabled:opacity-80`
            }
            {...props}>
            {loading && (
                <LoadingIcon className="absolute left-1/2 -ml-3 block h-6 w-6 text-white opacity-70" />
            )}
            {children}
        </button>
    )
}

export default Button
