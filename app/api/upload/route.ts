
import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(request: Request) {
    const data = await request.formData()
    const file: File | null = data.get('file') as unknown as File

    if (!file) {
        return NextResponse.json({ success: false, error: 'No file provided' }, { status: 400 })
    }

    const { searchParams } = new URL(request.url)
    const customFilename = searchParams.get('filename')

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    let finalPath;
    let finalUrl;

    if (customFilename) {
        // Save directly to public folder with custom name (e.g. profile.jpg)
        const publicDir = path.join(process.cwd(), 'public')
        finalPath = path.join(publicDir, customFilename)
        finalUrl = `/${customFilename}`
    } else {
        // Save to public/uploads with timestamp
        const uploadDir = path.join(process.cwd(), 'public', 'uploads')
        // Ensure directory exists
        const fs = require('fs')
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        const filename = `${Date.now()}-${file.name.replace(/\s/g, '-')}`
        finalPath = path.join(uploadDir, filename)
        finalUrl = `/uploads/${filename}`
    }

    try {
        await writeFile(finalPath, buffer)
        return NextResponse.json({ success: true, url: finalUrl })
    } catch (e) {
        console.error('Upload Error:', e)
        return NextResponse.json({ success: false, error: 'File save failed' }, { status: 500 })
    }
}
