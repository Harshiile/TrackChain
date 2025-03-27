import { verify } from "jsonwebtoken"

export async function POST(req) {
    const { res } = await req.json()
    return Response.json(verify(res, process.env.JWT_SECRET))
}