import { useTranslation } from 'react-i18next'

export const HomePage = () => {
    const { t } = useTranslation()

    return (
        <>
            <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
                {t('welcomeMessage')}
            </h1>
            <div>
                {t('counter', {
                    count: 0
                })}
            </div>
        </>
    )
}
