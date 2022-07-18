import { Dispatch, SetStateAction } from 'react'

export type AuthHookParams = {
    middleware?: string
    redirectIfAuthenticated?: string
    redirectIfNotAdmin?: string
}

export type SetErrorsParam = Dispatch<SetStateAction<[]>>

export type SetStatusParam = Dispatch<SetStateAction<string | null>>

export type LoginParams = {
    setErrors: SetErrorsParam
    setStatus: SetStatusParam
    email: string
    password: string
}

export type ForgotPasswordParams = {
    setErrors: SetErrorsParam
    setStatus: SetStatusParam
    email: string
}

export type ResetPasswordParams = {
    setErrors: SetErrorsParam
    setStatus: SetStatusParam
    email: string
    password: string
    password_confirmation: string
}

export type RegisterParams = {
    setErrors: SetErrorsParam
    email: string
    name: string
    password: string
    password_confirmation: string
}

export type ResendEmailVerificationParams = {
    setStatus: SetStatusParam
}

export type Role = {
    id: number
    name: string
}
