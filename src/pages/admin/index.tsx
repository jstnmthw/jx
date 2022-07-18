import Head from 'next/head'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import AddUserModal from '@/components/admin/AddUserModal'
import EditUserModal from '@/components/admin/EditUserModal'
import { useAuth } from '@/hooks/auth'
import { useUsers } from '@/hooks/users'
import { Role } from '@/types/auth'
import { NextPage } from 'next'
import { User } from '@/types/user'
import DeleteUserModal from '@/components/admin/DeleteUserModal'
import Avatar from '@/components/ui/Avatar'

const Index: NextPage = () => {
    const { user: user }: { user: User } = useAuth({
        middleware: 'admin'
    })
    const { users, isLoading, isValidating } = useUsers()

    if (!user) return <></>

    return (
        <>
            <Head>
                <title>Admin Dashboard - Jx</title>
            </Head>
            <DefaultLayout>
                <div className="w-full">
                    <div className="mx-auto h-full max-w-4xl overflow-auto px-2 sm:px-6 lg:px-8">
                        <div className="my-5 flex flex-col justify-between space-y-5 sm:flex-row sm:space-y-0">
                            <div>
                                <h2 className="text-2xl font-semibold tracking-tight">
                                    Admin page
                                </h2>
                                <div>Welcome, {user.name}</div>
                            </div>
                            <div>
                                <AddUserModal />
                            </div>
                        </div>
                        {users && (!isLoading || !isValidating) ? (
                            <div className="mb-20 w-full overflow-hidden bg-white shadow sm:rounded-lg">
                                <div className="bg-gray-50 px-4 py-3 text-xs font-medium uppercase text-gray-500 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6">
                                    <div></div>
                                    <div>Name</div>
                                    <div>Status</div>
                                    <div>Roles</div>
                                    <div></div>
                                </div>
                                <div className="border-t border-gray-200">
                                    {users.map(user => {
                                        return (
                                            <div
                                                key={user.id}
                                                className="items-center px-4 py-3 sm:grid sm:grid-cols-10 sm:gap-4 sm:px-6">
                                                <div className="col-span-1 flex items-center justify-center">
                                                    <Avatar
                                                        user={user}
                                                        className="h-12 w-12"
                                                    />
                                                </div>
                                                <div className="col-span-3">
                                                    <div className="font-medium text-black">
                                                        {user.name}
                                                    </div>
                                                    <div className="text-sm text-gray-600">
                                                        {user.email}
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    {user.enabled ? (
                                                        <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-800">
                                                            Active
                                                        </span>
                                                    ) : (
                                                        <span className="rounded-full bg-red-100 px-2 py-1 text-xs text-red-800">
                                                            Inactive
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="col-span-2 text-sm">
                                                    {user.roles.map(
                                                        (role: Role) => {
                                                            return (
                                                                <span
                                                                    className="mr-2 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-800"
                                                                    key={
                                                                        role.id
                                                                    }>
                                                                    {role.name}
                                                                </span>
                                                            )
                                                        }
                                                    )}
                                                </div>
                                                <div className="col-span-2 text-right">
                                                    <EditUserModal
                                                        user={user}
                                                    />
                                                    <DeleteUserModal
                                                        user={user}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        ) : (
                            <div>Loading</div>
                        )}
                    </div>
                </div>
            </DefaultLayout>
        </>
    )
}

export default Index
