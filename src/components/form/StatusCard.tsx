import { FC } from 'react'
import { ScriptProps } from 'next/script'

interface StatusCard extends ScriptProps {
    status: string | null
}

const StatusCard: FC<StatusCard> = ({ className, status }) => {
    return (
        <>
            {status && (
                <div
                    className={`${className} mb-3 block rounded-lg border border-green-700 bg-green-100 p-2 text-center font-mono text-sm font-medium text-green-900`}>
                    {status}
                </div>
            )}
        </>
    )
}

export default StatusCard
