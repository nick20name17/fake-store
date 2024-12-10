import type { SortingState } from '@tanstack/react-table'
import { useEffect, useState } from 'react'

import { AddUserModal } from './components/modals/add-user'
import { columns } from './components/table/columns'
import { UsersTable } from './components/table/table'
import type { User } from '@/api/users/users.types'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'

const UsersPage = () => {
    const [, setSorting] = useState<SortingState>([])
    const [users, setUsers] = useState<User[]>([])

    // const currentSortingDirection = sorting[0]?.desc ? 'desc' : 'asc'

    // const { data: users, isLoading } = useGetUsersQuery({})

    useEffect(() => {
        fetch(`https://fakestoreapi.com/users`)
            .then((res) => res.json())
            .then((data) => setUsers(data))
    }, [])

    return (
        <section className='mt-10'>
            <div className='flex items-center justify-between gap-8 max-[475px]:flex-col'>
                <div className='flex items-center gap-x-4'>
                    <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
                        Users
                    </h1>
                    {false ? (
                        <Skeleton className='h-[22px] w-9 rounded-full' />
                    ) : (
                        <Badge>{users?.length}</Badge>
                    )}
                </div>
                <AddUserModal />
            </div>

            <UsersTable
                setSorting={setSorting}
                data={users || []}
                columns={columns}
            />
        </section>
    )
}

export default UsersPage
