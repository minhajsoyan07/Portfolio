
import { NextResponse } from 'next/server'
import { getPortfolioData, savePortfolioData } from '@/lib/data'

export async function GET() {
    const data = await getPortfolioData()
    return NextResponse.json(data)
}

export async function POST(request: Request) {
    try {
        const data = await request.json()
        await savePortfolioData(data)
        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to save data' }, { status: 500 })
    }
}
