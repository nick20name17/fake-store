import { useTranslation } from 'react-i18next'

export const HomePage = () => {
    const { t } = useTranslation()

    return (
        <section className='container mt-10'>
            <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
                {t('welcomeMessage')}
            </h1>
        </section>
    )
}
