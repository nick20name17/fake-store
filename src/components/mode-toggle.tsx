import { Monitor, Moon, Sun } from 'lucide-react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import { useTheme } from '@/provider/theme'

export const ModeToggle = () => {
    const { theme, setTheme } = useTheme()

    return (
        <Select
            value={theme}
            onValueChange={setTheme}>
            <SelectTrigger className='h-fit border-none focus:ring-0'>
                <SelectValue placeholder='Select theme' />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value='light'>
                    <div className='flex items-center gap-2'>
                        <Sun className='h-4 w-4' />
                        <span>Light</span>
                    </div>
                </SelectItem>
                <SelectItem value='dark'>
                    <div className='flex items-center gap-2'>
                        <Moon className='h-4 w-4' />
                        <span>Dark</span>
                    </div>
                </SelectItem>
                <SelectItem value='system'>
                    <div className='flex items-center gap-2'>
                        <Monitor className='h-4 w-4' />

                        <span>System</span>
                    </div>
                </SelectItem>
            </SelectContent>
        </Select>
    )
}
