import sendgrid from '@sendgrid/mail';
import { MailDataRequired } from '@sendgrid/helpers/classes/mail';

export enum MailTemplate {
    VerifyEmail = 'd-167a7e7d45484e608e35f6a8c0e8f3f8',
}

export interface MailData extends Omit<MailDataRequired, 'templateId' | 'from'> {
    templateId: MailTemplate;
    from?: string;
}

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

const makeEmail = (data: MailData): MailDataRequired => ({
    ...data,
    from: data.from || 'info@reshared.org',
});

export const sendMail = (data: MailData | MailData[]) =>
    sendgrid.send(Array.isArray(data) ? data.map(makeEmail) : makeEmail(data));
