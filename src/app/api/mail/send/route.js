import { transporter } from "@/utils/mail"
import { sign } from "jsonwebtoken"

const encodedUrl = (answer) => {
    const enc = sign({
        date: Date.now(),
        wsId: "cm8qpjptt000145p15rg2i0u3",
        response: answer
    }, process.env.JWT_SECRET)
    return `http://localhost:3000/api/mail/res/${enc}`
}

export async function POST(req) {
    const { email } = await req.json()
    const mailOptions = {
        from: "theharshiile@gmail.com",
        to: email,
        subject: "Hello Frsssssom Habibi",
        html: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meeting Attendance Confirmation</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background-color: #1A1F2C;
            color: #FFFFFF;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        .email-container {
            background-color: #2A2F3C;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            max-width: 600px;
            margin: 20px;
            padding: 30px;
            text-align: center;
        }
        .header {
            margin-bottom: 20px;
        }
        .event-details {
            background-color: #3A3F4C;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
        }
        .event-detail {
            margin-bottom: 10px;
            color: #B0B8C0;
        }
        .buttons {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 30px;
        }
        .button {
            padding: 12px 24px;
            border: none;
            border-radius: 30px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .button-present {
            background-color: #4CAF50;
            color: white;
        }
        .button-present:hover {
            background-color: #45a049;
        }
        .button-absent {
            background-color: #F44336;
            color: white;
        }
        .button-absent:hover {
            background-color: #d32f2f;
        }
        .footer {
            margin-top: 20px;
            color: #7A7E8A;
            font-size: 0.8em;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Quarterly Planning Meeting</h1>
        </div>
        <div class="event-details">
            <div class="event-detail"><strong>Date:</strong> Monday, November 20, 2023</div>
            <div class="event-detail"><strong>Time:</strong> 10:00 AM - 11:30 AM (PST)</div>
            <div class="event-detail"><strong>Location:</strong> Conference Room A / Zoom Meeting</div>
            <div class="event-detail"><strong>Organizer:</strong> John Smith (john.smith@company.com)</div>
        </div>
        <div class="buttons">
        <a href=${encodedUrl(true)}>
        <button class="button button-present">Present</button>
        </a>
        <a href=${encodedUrl(false)}>
        <button class="button button-absent">Absent</button>
        <div class="footer">
            Please confirm your attendance by clicking the appropriate button above.
        </div>
    </div>
</body>
</html>

        `
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