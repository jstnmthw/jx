import { User } from '@/types/user'

export type ErrorResponse = {
    message?: string
    errors?: []
}

export type UserResponse = {
    user?: User
    loading?: boolean
}
