
import Contact from '@/sections/Contact'
import { getPortfolioData } from '@/lib/data'

export default async function ContactPage() {
    const data = await getPortfolioData()

    return (
        <main className="bg-dark-primary min-h-screen pt-20">
            <Contact data={data.contact} />
        </main>
    )
}
