import { ServerClient, Message } from 'postmark';
import { TemplateExecutor } from 'lodash';
import { memoize, template as compileTemplate } from 'lodash-es';
import nodemailer from 'nodemailer';

// Templates
import newActivityHtml from '../emails/compiled/new_activity.html';
import newChatHtml from '../emails/compiled/new_chat.html';
import newActivityTxt from '../emails/new_activity.txt';
import newChatTxt from '../emails/new_chat.txt';

var client = new ServerClient(process.env.POSTMARK_API_TOKEN!);

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

const makeEmail = <T>(data: MailData<T>): Message => {
    const template = getTemplate(data.template);
    return {
        To: data.to,
        Subject: data.subject,
        TextBody: template.text(data.data as any),
        HtmlBody: template.html(data.data as any),
        From: 'no-reply@reshared.org',
        ReplyTo: 'contact@reshared.org',
        MessageStream: 'outbound',
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

    if (process.env.SEND_REAL_EMAILS) {
        return client.sendEmailBatch(mails);
    } else {
        mails.map((mail) =>
            makeDevTransport().sendMail({
                to: mail.To,
                subject: mail.Subject,
                text: mail.TextBody,
                html: mail.HtmlBody,
                from: mail.From,
            }),
        );
    }
};
