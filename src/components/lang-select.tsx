import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import i18n from '@/lib/i18n'

export const LangSelect = () => {
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }

    return (
        <Select
            defaultValue={i18n.language}
            onValueChange={changeLanguage}>
            <SelectTrigger className='h-fit border-none focus:ring-0'>
                <SelectValue placeholder='Select theme' />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value='uk'>Ukrainian</SelectItem>
                <SelectItem value='en'>English</SelectItem>
            </SelectContent>
        </Select>
    )
}
