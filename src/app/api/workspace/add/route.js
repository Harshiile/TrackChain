import { prisma } from '@/lib/prisma'

export async function POST(req) {
    try {
        const result = await prisma.workPlace.create({ data: await req.json() })
        return Response.json({ result })
    } catch (error) {
        return Response.json({ error })
    }
}