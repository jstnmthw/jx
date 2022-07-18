import DefaultLayout from '@/components/layouts/DefaultLayout'
import Link from 'next/link'
import { NextPage } from 'next'

const NotFoundPage: NextPage = () => {
    return (
        <DefaultLayout>
            <div className="mx-auto max-w-4xl">
                <div className="mt-20 text-center font-mono">
                    <div className="mb-5 text-9xl font-bold">404</div>
                    <div className="mb-10 text-5xl leading-3">Not Found</div>
                    <div>
                        <Link href="/">
                            <a className="text-gradient">Go back to homepage</a>
                        </Link>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}
export default NotFoundPage
