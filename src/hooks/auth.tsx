import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import {
    AuthHookParams,
    ForgotPasswordParams,
    LoginParams,
    RegisterParams,
    ResendEmailVerificationParams,
    ResetPasswordParams
} from '@/types/auth'
import { User } from '@/types/user'
export const useAuth = ({
    middleware,
    redirectIfAuthenticated,
    redirectIfNotAdmin
}: AuthHookParams = {}) => {
    const router = useRouter()
    const [cookies, setCookies, removeCookies] = useCookies()
    const [loading, setLoading] = useState(false)

    const {
        data: user,
        error,
        mutate
    } = useSWR(tryUser() ? '/api/user' : null, () =>
        axios
            .get('/api/user')
            .then(res => res.data)
            .catch(error => {
                removeCookies('isAuth')
                if (error.response.status !== 409) {
                    setCookies('isAuth', false, { sameSite: 'lax' })
                    throw error
                } else {
                    router.push('/verify-email')
                }
            })
    )

    const csrf = () =>
        axios.get('/sanctum/csrf-cookie').catch(() => {
            setLoading(false)
        })

    const register = async ({ setErrors, ...props }: RegisterParams) => {
        setLoading(true)
        await csrf()

        setErrors([])

        axios
            .post('/register', props)
            .then(() => {
                setCookies('isAuth', true, { sameSite: 'lax' })
                mutate()
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(
                    Object.values(error.response.data.errors).flat() as []
                )
            })
        setLoading(false)
    }

    const login = async ({ setErrors, setStatus, ...props }: LoginParams) => {
        setLoading(true)
        await csrf()

        setErrors([])
        setStatus(null)

        await axios
            .post('/login', props)
            .then(() => {
                setCookies('isAuth', true, { sameSite: 'lax', path: '/' })
                mutate()
            })
            .catch(error => {
                removeCookies('isAuth')
                if (error.response.status !== 422) throw error

                setLoading(false)
                setErrors(
                    Object.values(error.response.data.errors).flat() as []
                )
            })
    }

    const forgotPassword = async ({
        setErrors,
        setStatus,
        email
    }: ForgotPasswordParams) => {
        setLoading(true)
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/forgot-password', { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(
                    Object.values(error.response.data.errors).flat() as []
                )
            })
        setLoading(false)
    }

    const resetPassword = async ({
        setErrors,
        setStatus,
        ...props
    }: ResetPasswordParams) => {
        setLoading(true)
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/reset-password', { token: router.query.token, ...props })
            .then(response =>
                router.push('/login?reset=' + window.btoa(response.data.status))
            )
            .catch(error => {
                if (error.response.status != 422) throw error

                setErrors(
                    Object.values(error.response.data.errors).flat() as []
                )
            })
        setLoading(false)
    }

    const resendEmailVerification = ({
        setStatus
    }: ResendEmailVerificationParams) => {
        axios
            .post('/email/verification-notification')
            .then(response => setStatus(response.data.status))
    }

    const logout = async () => {
        if (!error) {
            removeCookies('isAuth', { sameSite: 'lax' })
            await axios.post('/logout')
        }
        window.location.pathname = '/'
    }

    const isAdmin = (user?: User) => {
        return user?.roles.some(role => role.name === 'Admin')
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user) {
            router.push(redirectIfAuthenticated)
        }
        if ((middleware === 'auth' || middleware === 'admin') && error) {
            logout()
        }
        if (middleware === 'admin' && user && !isAdmin(user)) {
            redirectIfNotAdmin
                ? router.push(redirectIfNotAdmin)
                : router.push('/')
        }
    })

    function tryUser() {
        if (
            middleware === 'auth' ||
            middleware === 'admin' ||
            cookies.isAuth !== 'false'
        ) {
            return true
        }
        return null
    }

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
        loading
    }
}
