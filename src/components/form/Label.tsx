import React, { FC } from 'react'

const Label: FC<React.ComponentPropsWithoutRef<'label'>> = ({
    className = '',
    children,
    ...props
}) => (
    <label
        className={
            (className ? className + ' ' : '') +
            'text-sm font-medium text-slate-700'
        }
        {...props}>
        {children}
    </label>
)

export default Label
