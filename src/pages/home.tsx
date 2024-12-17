import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { getCities } from '@/api/delivery/delivery'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'

export const HomePage = () => {
    const { t } = useTranslation()

    const [citi, setCiti] = useState('')

    const { data: cities } = useQuery({
        queryKey: ['cities', citi],
        queryFn: () => getCities({ search: citi })
    })

    return (
        <section className='container mt-10'>
            <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
                {t('welcomeMessage')}
            </h1>

            <Input
                className='mt-10'
                placeholder={'Місто'}
                value={citi}
                onChange={(e) => setCiti(e.target.value)}
            />

            <ScrollArea className='mt-4 h-80 rounded-md border'>
                {cities?.data?.map((city) => (
                    <div
                        key={city.Ref}
                        className='border-b border-gray-200 p-4'>
                        {city.Description}
                    </div>
                ))}
            </ScrollArea>
        </section>
    )
}
