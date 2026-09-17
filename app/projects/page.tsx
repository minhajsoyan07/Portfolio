
import Projects from '@/sections/Projects'
import { getPortfolioData } from '@/lib/data'

export default async function ProjectsPage() {
    const data = await getPortfolioData()

    return (
        <main className="bg-dark-primary min-h-screen pt-20">
            <Projects data={data.projects} />
        </main>
    )
}
