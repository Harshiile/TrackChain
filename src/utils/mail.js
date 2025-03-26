import nodemailer from "nodemailer";

// Create a transporter object
export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "theharshiile@gmail.com", // Your Gmail
        pass: process.env.MAIL_PASSKEY, // Use an App Password (not your actual password)
    },
});