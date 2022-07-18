import { FC, useEffect, useState } from 'react'
import { User } from '@/types/user'
import { columns } from '@/types/datatable'
import { createTable } from '@tanstack/react-table'
import DataTable from '@/components/ui/DataTable'
import Button from '@/components/ui/Button'
import Image from 'next/image'

const table = createTable().setRowType<User>()

const userColumns: columns = [
    {
        id: 'usersTable',
        header: 'Users',
        columns: [
            {
                id: 'avatar',
                header: '',
                accessorKey: 'avatar',
                cell: (info: { getValue: () => string }) => (
                    <Image
                        className="rounded-full"
                        width={40}
                        height={40}
                        src={info.getValue()}
                        alt={''}
                    />
                )
            },
            {
                id: 'name',
                header: 'Name',
                accessorKey: 'name',
                cell: (info: { getValue: () => string }) => info.getValue()
            },
            {
                id: 'email',
                header: 'Email',
                accessorKey: 'email',
                cell: (info: { getValue: () => string }) => info.getValue()
            },
            {
                id: 'action',
                header: '',
                accessorKey: 'id',
                cell: (info: { getValue: () => string }) => (
                    <Button onClick={() => console.log(info.getValue())}>
                        Edit
                    </Button>
                )
            }
        ]
    }
]

const UsersTable: FC = () => {
    const [data] = useState(null)
    const [isLoading] = useState(false)

    useEffect(() => {}, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No Data</p>

    return (
        <>
            <DataTable
                defaultColumns={userColumns}
                table={table}
                defaultData={data}
            />
        </>
    )
}

export default UsersTable
