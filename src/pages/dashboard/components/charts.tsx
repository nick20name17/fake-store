import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Line,
    LineChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    XAxis,
    YAxis
} from 'recharts'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { cn } from '@/lib/utils'

const revenueData = [
    { month: 'Jan', revenue: 4000 },
    { month: 'Feb', revenue: 3000 },
    { month: 'Mar', revenue: 5000 },
    { month: 'Apr', revenue: 4500 },
    { month: 'May', revenue: 6000 },
    { month: 'Jun', revenue: 5500 }
]

const customerData = [
    { month: 'Jan', customers: 100 },
    { month: 'Feb', customers: 120 },
    { month: 'Mar', customers: 150 },
    { month: 'Apr', customers: 180 },
    { month: 'May', customers: 220 },
    { month: 'Jun', customers: 250 }
]

const productCategoryData = [
    { name: 'Electronics', value: 400 },
    { name: 'Clothing', value: 300 },
    { name: 'Food', value: 200 },
    { name: 'Books', value: 100 }
]

const expensesData = [
    { month: 'Jan', expenses: 3000 },
    { month: 'Feb', expenses: 3200 },
    { month: 'Mar', expenses: 3500 },
    { month: 'Apr', expenses: 3300 },
    { month: 'May', expenses: 3800 },
    { month: 'Jun', expenses: 3600 }
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export const Charts = ({ className }: { className?: string }) => {
    return (
        <div className={cn('grid h-screen grid-cols-2 grid-rows-2 gap-4', className)}>
            <Card className='h-full'>
                <CardHeader>
                    <CardTitle>Revenue Over Time</CardTitle>
                    <CardDescription>
                        Monthly revenue for the past 6 months
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer
                        config={{
                            revenue: { label: 'Revenue', color: 'hsl(var(--chart-1))' }
                        }}
                        className='h-[calc(100%-4rem)]'>
                        <ResponsiveContainer
                            width='100%'
                            height='100%'>
                            <LineChart data={revenueData}>
                                <CartesianGrid strokeDasharray='3 3' />
                                <XAxis dataKey='month' />
                                <YAxis />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Legend />
                                <Line
                                    type='monotone'
                                    dataKey='revenue'
                                    stroke='var(--color-revenue)'
                                    strokeWidth={2}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </CardContent>
            </Card>

            <Card className='h-full'>
                <CardHeader>
                    <CardTitle>Customer Growth</CardTitle>
                    <CardDescription>Monthly customer acquisition</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer
                        config={{
                            customers: {
                                label: 'Customers',
                                color: 'hsl(var(--chart-2))'
                            }
                        }}
                        className='h-[calc(100%-4rem)]'>
                        <ResponsiveContainer
                            width='100%'
                            height='100%'>
                            <BarChart data={customerData}>
                                <CartesianGrid strokeDasharray='3 3' />
                                <XAxis dataKey='month' />
                                <YAxis />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Legend />
                                <Bar
                                    dataKey='customers'
                                    fill='var(--color-customers)'
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </CardContent>
            </Card>

            <Card className='h-full'>
                <CardHeader>
                    <CardTitle>Product Category Sales</CardTitle>
                    <CardDescription>
                        Distribution of sales by product category
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer
                        config={{}}
                        className='h-[calc(100%-4rem)]'>
                        <ResponsiveContainer
                            width='100%'
                            height='100%'>
                            <PieChart>
                                <Pie
                                    data={productCategoryData}
                                    cx='50%'
                                    cy='50%'
                                    labelLine={false}
                                    outerRadius={80}
                                    fill='#8884d8'
                                    dataKey='value'>
                                    {productCategoryData.map((_, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </CardContent>
            </Card>

            <Card className='h-full'>
                <CardHeader>
                    <CardTitle>Monthly Expenses</CardTitle>
                    <CardDescription>
                        Expense trends over the past 6 months
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer
                        config={{
                            expenses: { label: 'Expenses', color: 'hsl(var(--chart-3))' }
                        }}
                        className='h-[calc(100%-4rem)]'>
                        <ResponsiveContainer
                            width='100%'
                            height='100%'>
                            <AreaChart data={expensesData}>
                                <CartesianGrid strokeDasharray='3 3' />
                                <XAxis dataKey='month' />
                                <YAxis />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Legend />
                                <Area
                                    type='monotone'
                                    dataKey='expenses'
                                    stroke='var(--color-expenses)'
                                    fill='var(--color-expenses)'
                                    fillOpacity={0.3}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
    )
}
