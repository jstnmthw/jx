import { Role } from '@/types/auth'
import { Overwrite, TableGenerics } from '@tanstack/react-table'

export interface User {
    id: number
    email: string
    name: string
    avatar: string
    enabled: boolean
    email_verified: boolean
    roles: Role[]
    created_at: string
    updated_at: string
}

export interface UsersTableData extends Omit<User, 'roles'> {
    roles: string
}

export interface UserData {}

export interface UserTableColumns
    extends Overwrite<TableGenerics, TableGenerics>,
        User {}
