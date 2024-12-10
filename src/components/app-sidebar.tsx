import {
    Box,
    ChartArea,
    ChevronUp,
    Home,
    LogOut,
    Package,
    ShoppingBasket,
    User2,
    Users
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import { LangSelect } from './lang-select'
import { ModeToggle } from './mode-toggle'
import { Separator } from './ui/separator'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar
} from '@/components/ui/sidebar'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { routes } from '@/config/routes'
import { useAuth } from '@/hooks/use-auth'
import { cn } from '@/lib/utils'

const items = [
    {
        title: 'Home',
        url: routes.home,
        icon: Home,
        tooltip: 'Home Page'
    },
    {
        title: 'Dashboard',
        url: routes.dashboard,
        icon: ChartArea
    },
    {
        title: 'Cart',
        url: routes.cart,
        icon: ShoppingBasket,
        tooltip: 'Cart Page'
    },
    {
        title: 'Products',
        url: routes.products,
        icon: Package,
        tooltip: 'Products Page'
    },
    {
        title: 'Users',
        url: routes.users,
        icon: Users,
        tooltip: 'Users Page'
    }
]

export const AppSidebar = () => {
    const { state } = useSidebar()
    const { pathname } = useLocation()

    return (
        <Sidebar
            collapsible='icon'
            variant='inset'>
            <AppSidebarHeader />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) =>
                                state === 'collapsed' ? (
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <SidebarMenuItem key={item.title}>
                                                <SidebarMenuButton
                                                    isActive={item.url === pathname}
                                                    asChild>
                                                    <Link to={item.url}>
                                                        <item.icon />
                                                        <span>{item.title}</span>
                                                    </Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        </TooltipTrigger>
                                        <TooltipContent className='ml-2'>
                                            <p>{item.tooltip}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                ) : (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            isActive={item.url === pathname}
                                            asChild>
                                            <Link to={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            )}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <AppSidebarFooter />
        </Sidebar>
    )
}

const AppSidebarHeader = () => {
    const { state } = useSidebar()

    return (
        <SidebarHeader className='border-b'>
            <SidebarMenu>
                <SidebarMenuItem
                    className={cn(
                        'flex items-center gap-x-2',
                        state === 'collapsed' ? 'mx-auto' : ''
                    )}>
                    <Box className='size-6 text-primary' />
                    <h1
                        className={cn(
                            'text-lg font-bold text-white',
                            state === 'collapsed' ? 'hidden' : ''
                        )}>
                        Fake Store
                    </h1>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
    )
}

const AppSidebarFooter = () => {
    const { logout } = useAuth()
    return (
        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton>
                                <User2 /> Username
                                <ChevronUp className='ml-auto' />
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            side='top'
                            className='w-[--radix-popper-anchor-width]'>
                            <Separator />
                            <DropdownMenuItem asChild>
                                <LangSelect />
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <ModeToggle />
                            </DropdownMenuItem>
                            <Separator />
                            <DropdownMenuItem
                                onClick={logout}
                                className='flex items-center gap-x-2'>
                                <LogOut className='size-4' />
                                <span>Sign out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
    )
}
