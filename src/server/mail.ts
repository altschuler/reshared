import { MailDataRequired } from '@sendgrid/helpers/classes/mail';
import sendgrid from '@sendgrid/mail';
import { TemplateExecutor } from 'lodash';
import { memoize, template as compileTemplate } from 'lodash-es';
import nodemailer from 'nodemailer';

// Templates
import newActivityHtml from '../emails/compiled/new_activity.html';
import newChatHtml from '../emails/compiled/new_chat.html';
import newActivityTxt from '../emails/new_activity.txt';
import newChatTxt from '../emails/new_chat.txt';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

type EmailTemplate = 'new_activity' | 'new_chat';

const getTemplate = memoize(
    (template: EmailTemplate): { text: TemplateExecutor; html: TemplateExecutor } => {
        switch (template) {
            case 'new_chat':
                return {
                    text: compileTemplate(newChatTxt),
                    html: compileTemplate(newChatHtml),
                };
            case 'new_activity':
                return {
                    text: compileTemplate(newActivityTxt),
                    html: compileTemplate(newActivityHtml),
                };
        }
    },
);

export interface MailData<T> {
    to: string;
    subject: string;
    template: EmailTemplate;
    data: T;
}

const makeEmail = <T>(data: MailData<T>): MailDataRequired => {
    const template = getTemplate(data.template);
    return {
        ...data,
        text: template.text(data.data as any),
        html: template.html(data.data as any),
        from: 'no-reply@reshared.org',
        replyTo: 'contact@reshared.org',
    };
};

// Dev
const makeDevTransport = memoize(() =>
    nodemailer.createTransport({
        port: 1025,
        secure: false,
        auth: {
            user: 'user',
            pass: 'password',
        },
    }),
);

export const sendMail = async <T>(data: MailData<T> | MailData<T>[]) => {
    const mails = (Array.isArray(data) ? data : [data]).map(makeEmail);

    if (process.env.NODE_ENV === 'production') {
        return sendgrid.send(mails);
    } else {
        mails.map((mail) => makeDevTransport().sendMail(mail as any));
    }
};
