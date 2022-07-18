import React, { FC } from 'react'

const Input: FC<React.ComponentPropsWithoutRef<'input'>> = ({
    disabled,
    className,
    ...props
}) => (
    <input
        disabled={disabled}
        className={
            (className ? className + ' ' : '') +
            'block w-full rounded-md border-gray-300 bg-gray-50 p-2.5 shadow-sm focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/25 sm:text-sm'
        }
        {...props}
    />
)

export default Input
