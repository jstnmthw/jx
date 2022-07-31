import { ComponentPropsWithRef, forwardRef } from 'react'

interface ButtonLinkProps extends ComponentPropsWithRef<'a'> {
    buttonType?: string
}

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
    ({ className, children, buttonType, ...props }, ref) => {
        let selectedStyle: string

        switch (buttonType) {
            case 'light':
                selectedStyle =
                    'border border-slate-300 dark:text-slate-300 dark:hover:text-white highlight-hover dark:bg-slate-800 transition-all text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none dark:ring-offset-slate-900 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                break
            case 'primary':
                selectedStyle =
                    'rounded-md shadow-lg shadow-blue-500/50 hover:shadow-md dark:shadow-none text-white bg-blue-500 transition-colors hover:bg-blue-400 focus:outline-none focus:ring-2 dark:ring-offset-slate-900 focus:ring-offset-2 focus:ring-blue-500 relative active:top-0.5'
                break
            case 'danger':
                selectedStyle =
                    'px-4 py-2 rounded-md shadow-lg shadow-red-500/50 text-white bg-red-500 transition-colors hover:bg-red-600 focus:outline-none relative active:top-0.5'
                break
            default:
                selectedStyle = `inline-flex items-center px-4 py-2 text-sm font-medium`
        }

        return (
            <a
                ref={ref}
                className={
                    (className ? className : '') +
                    ' ' +
                    `${selectedStyle} inline-flex cursor-pointer items-center rounded-md px-4 py-2 text-sm font-medium`
                }
                {...props}>
                {children}
            </a>
        )
    }
)

ButtonLink.displayName = 'ButtonLink'

export default ButtonLink
