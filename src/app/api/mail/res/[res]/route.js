import { verify } from "jsonwebtoken"
import { redirect } from 'next/navigation'

export async function GET(request, { params }) {
    const { res } = await params
    const decoded = verify(res, process.env.JWT_SECRET)
    redirect(`/attedance/status/${res}`)
}


// date: new Date(y.date).toLocaleDateString('en-us', {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric'
// })