import Image from 'next/image'
import { FC } from 'react'
import { User } from '@/types/user'

const Avatar: FC<{
    user: User
    className?: string
    width?: number
    height?: number
}> = ({ user, className = '' }) => {
    return (
        <div className={`${className} relative`}>
            <Image
                layout="fill"
                src={user?.avatar}
                alt={user.name}
                className={`${className} z-10 rounded-full`}
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800">
                {user.name.split('')[0]}
            </div>
        </div>
    )
}
export default Avatar
