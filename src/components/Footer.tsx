import Image from 'next/image'
import Logo from '@/components/Logo'

export default function Footer() {
    return (
        <footer
            id="__footer"
            className="flex h-24 w-full items-center justify-center border-t">
            <a
                className="flex items-center justify-center"
                href="https://github.com/jstnmthw/jx"
                target="_blank"
                rel="noopener noreferrer">
                Powered by <Logo className="ml-2 inline-block h-6 w-6" />
            </a>
        </footer>
    )
}
