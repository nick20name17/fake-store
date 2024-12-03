import Helmet from 'react-helmet'
import { useTranslation } from 'react-i18next'

import { usePageTitle } from '@/hooks/use-page-title'

interface MetaHeadProps {
    title?: string
    description?: string
}

export const MetaHead: React.FC<MetaHeadProps> = ({
    title,
    description = 'some description'
}) => {
    const pageTitle = usePageTitle()
    const { i18n } = useTranslation()

    return (
        <Helmet htmlAttributes={{ lang: i18n.language }}>
            <meta charSet='utf-8' />
            <title>{title ? title : pageTitle}</title>
            <meta
                name='description'
                content={description}
            />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0'
            />
        </Helmet>
    )
}
