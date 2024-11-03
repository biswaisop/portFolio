import { Resend } from "resend"
import Email from "@/app/email/Email"
const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST() {
    await resend.emails.send({
        from: 'rvit24bcs080@rvei.edu.in',
        to: 'biswadipmandal99@gmail.com',
        subject: 'hello world',
        react: Email(),
      });
}