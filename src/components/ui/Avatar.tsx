import { useUser } from '@/hooks/user'
import Image from 'next/image'

export const Avatar = (id: number) => {
    const { user, isLoading, isError } = useUser(id)
    return (
        <div>
            <Image src={user.avatar} alt={user.name} />
        </div>
    )
}
