import React, { FC } from 'react'
import classNames from '@/helpers/classNames'

const Input: FC<React.ComponentPropsWithoutRef<'input'>> = ({
    disabled,
    className,
    ...props
}) => (
    <input
        disabled={disabled}
        className={classNames(
            className ? className : '',
            'lowlight block w-full rounded-md border border-slate-300 bg-slate-50 p-2.5 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/25 disabled:cursor-not-allowed disabled:text-slate-500 dark:bg-slate-900/60 dark:hover:bg-slate-900/40 dark:focus:border dark:focus:border-blue dark:focus:ring-blue/30 sm:text-sm'
        )}
        {...props}
    />
)

export default Input
