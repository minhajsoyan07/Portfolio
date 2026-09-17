
import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data', 'content.json');

export async function getPortfolioData() {
    const fileContents = await fs.promises.readFile(dataPath, 'utf8');
    return JSON.parse(fileContents);
}

export async function savePortfolioData(data: any) {
    await fs.promises.writeFile(dataPath, JSON.stringify(data, null, 2));
}
