import { prisma } from '@/lib/prisma'
import { PrismaClient } from '@prisma/client'

export async function POST(req) {
    try {
        const result = await prisma.workPlace.create({ data: await req.json() })
        return Response.json({ result })
    } catch (error) {
        return Response.json({ error })
    }
}

export async function DELETE(req) {
    const { id } = await req.json();
    try {
        const result = await prisma.workPlace.delete({ where: { id } })
        return Response.json({ result })
    } catch (error) {
        return Response.json({ error })
    }
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id")
    try {
        const result = await prisma.workPlace.findMany({ where: { userId: id } })
        return Response.json({ result })
    } catch (error) {
        return Response.json({ error })
    }
}