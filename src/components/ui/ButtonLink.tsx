import { ComponentPropsWithRef, forwardRef } from 'react'

interface ButtonLinkProps extends ComponentPropsWithRef<'a'> {
    buttonType?: string
}

const ButtonLink = forwardRef<HTMLLinkElement, ButtonLinkProps>(
    ({ className, children, buttonType, ...props }, ref) => {
        let selectedStyle: string

        switch (buttonType) {
            case 'light':
                selectedStyle =
                    'border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2'
                break
            case 'primary':
                selectedStyle =
                    'rounded-md shadow-lg shadow-blue-500/50 text-white bg-blue-500 transition-colors hover:bg-blue-400 focus:outline-none relative active:top-0.5'
                break
            case 'pink':
                selectedStyle =
                    'rounded-md shadow-lg shadow-blue-500/50 bg-gradient-to-r from-indigo-500 to-pink-500 text-white transition-colors focus:outline-none relative active:top-0.5'
                break
            default:
                selectedStyle = `inline-flex items-center px-4 py-2 text-sm font-medium`
        }

        return (
            <a
                className={
                    (className ? className : '') +
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
