import { type ColumnDef } from '@tanstack/react-table'

import { AddressCell } from './cells/address'
import type { User } from '@/api/users/users.types'
import { DataTableColumnHeader } from '@/components/data-table-column-header'

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: 'name',
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title='Name'
            />
        ),
        cell: ({ row }) => (
            <div className='flex items-center gap-x-2'>
                {row.original.name.firstname} {row.original.name.lastname}
            </div>
        )
    },
    {
        accessorKey: 'address',
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title='Address'
                className='w-52'
            />
        ),
        cell: ({ row }) => <AddressCell user={row.original} />
    },
    {
        accessorKey: 'email',
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title='Email'
            />
        )
    },
    {
        accessorKey: 'phone',
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title='Phone'
            />
        )
    }
]
