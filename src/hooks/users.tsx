import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'
import { ErrorResponse } from '@/types/response'
import { User } from '@/types/user'

export const useUsers = (): {
    users: User[]
    isLoading: boolean
    isValidating: boolean
    isError: ErrorResponse
} => {
    const { data, error, isValidating } = useSWR('/api/users', fetcher)
    return {
        users: data,
        isLoading: !error && !data,
        isValidating: isValidating,
        isError: error
    }
}
