import { FC, useState } from 'react'
import {
    Table,
    Overwrite,
    ColumnDef,
    ColumnOrderState,
    ReactTableGenerics,
    getCoreRowModel,
    useTableInstance
} from '@tanstack/react-table'

const DataTable: FC<{
    defaultColumns: ColumnDef<ReactTableGenerics>[]
    table: Table<Overwrite<any, any>>
    defaultData: any[]
}> = ({ defaultColumns, table, defaultData }) => {
    const [data] = useState(() => defaultData)
    const [columns] = useState(() => [...defaultColumns])
    const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([])

    const instance = useTableInstance(table, {
        data,
        columns,
        state: {
            columnOrder
        },
        onColumnOrderChange: setColumnOrder,
        getCoreRowModel: getCoreRowModel(),
        debugTable: true,
        debugHeaders: true,
        debugColumns: true
    })

    return (
        <table className="w-full border-separate border-spacing-0 rounded p-3 text-left shadow-lg">
            <thead>
                {instance.getHeaderGroups().map((headerGroup, index) => (
                    <tr
                        key={headerGroup.id}
                        className={index === 0 ? 'hidden' : 'p-0'}>
                        {headerGroup.headers.map(header => (
                            <th
                                key={header.id}
                                colSpan={header.colSpan}
                                className={
                                    index === 0 ? '' : 'p-0 font-medium'
                                }>
                                {header.isPlaceholder
                                    ? null
                                    : header.renderHeader()}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {instance.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id} className="py-1">
                                {cell.renderCell()}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

// function createDynamicTable(header: string, data: any, table: Table<any>) {
//     const columnNames = Object.keys(data[0])
//     return [
//         table.createGroup({
//             header: header,
//             columns: columnNames.map((col: any) => {
//                 return table.createDataColumn(col, {
//                     id: col,
//                     cell: info => info.getValue(),
//                     header: col
//                 })
//             })
//         })
//     ]
// }

export default DataTable
