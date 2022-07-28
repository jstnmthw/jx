import Logo from '@/components/Logo'

export default function Footer() {
    return (
        <footer
            id="__footer"
            className="dark:bg-slate-950 flex h-24 w-full items-center justify-center border-t dark:border-slate-800">
            <a
                className="flex items-center justify-center text-sm font-medium text-slate-600 dark:text-slate-500"
                href="https://github.com/jstnmthw/jx"
                target="_blank"
                rel="noopener noreferrer">
                Powered by{' '}
                <Logo className="text ml-2 inline-block h-6 w-6 text-slate-700 dark:text-slate-400" />
            </a>
        </footer>
    )
}
