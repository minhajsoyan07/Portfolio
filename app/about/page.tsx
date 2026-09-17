
import About from '@/sections/About'
import { getPortfolioData } from '@/lib/data'

export default async function AboutPage() {
    const data = await getPortfolioData()

    return (
        <main className="bg-dark-primary min-h-screen pt-20">
            <About data={data.about} />
        </main>
    )
}
