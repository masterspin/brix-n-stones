import ConfirmationEmail from '@/emails/index';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);

export async function GET() {
    await resend.sendEmail({
        from: 'onboarding@resend.dev',
        to: 'ritij.jutur@gmail.com',
        subject: 'Brix N Stones Form Submission Confirmation Email',
        react: ConfirmationEmail({userFirstname: 'ritij testing'}),
    })

    return NextResponse.json({
        status: 'ok'
    })
}