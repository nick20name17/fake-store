import { Charts } from './components/charts'

const DashboardPage = () => {
    return (
        <section className='mt-10'>
            <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
                Dashboard
            </h1>
            <Charts />
        </section>
    )
}

export default DashboardPage
