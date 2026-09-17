
import Services from '@/sections/Services'
import { getPortfolioData } from '@/lib/data'

export default async function ServicesPage() {
    const data = await getPortfolioData()

    return (
        <main className="bg-dark-primary min-h-screen pt-20">
            <Services data={data.services} />
        </main>
    )
}
