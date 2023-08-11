import ConfirmationEmail from '@/emails/index';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);

export async function POST(request) {
    const data = await request.json()
    await resend.sendEmail({
        from: 'noreply@brixnstones.in',
        to: data.email,
        subject: 'Brix N Stones Form Submission Confirmation Email',
        react: ConfirmationEmail({userFirstname: data.firstName, userLastname: data.lastName, message: data.message } ),
    })
    console.log(data.firstName)

    return NextResponse.json(data)
}