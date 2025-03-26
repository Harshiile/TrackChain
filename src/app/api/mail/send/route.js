import { transporter } from "@/utils/mail"



export async function POST(req) {
    const { email } = await req.json()
    const mailOptions = {
        from: "theharshiile@gmail.com",
        to: email,
        subject: "Hello Frsssssom Habibi",
        text: "Hello, this is a test email sent from my Node.js app!",
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error: ", error);
            return Response.json({ error })
        } else {
            console.log("Email sent: " + info.response);
            return Response.json({ data: info })
        }
    });
    return Response.json({ data: "Mail is sent !" })
}