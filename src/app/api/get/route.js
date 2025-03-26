import { prisma } from '@/lib/prisma'

export async function GET() {
    return Response.json({ data: await prisma.workPlace.findMany() })
}