

import Navbar from '@/components/Navbar'
import Hero from '@/sections/Hero'
import { getPortfolioData } from '@/lib/data'

export default async function Home() {
  const data = await getPortfolioData()

  return (
    <main className="bg-dark-primary">
      <Hero data={data.hero} />
    </main>
  )
}
