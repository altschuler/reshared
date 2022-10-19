import { MailDataRequired } from '@sendgrid/helpers/classes/mail';
import sendgrid from '@sendgrid/mail';
import fs from 'fs';
import { TemplateExecutor } from 'lodash';
import { memoize, template as compileTemplate } from 'lodash-es';
import nodemailer from 'nodemailer';
import path from 'path';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

type EmailTemplate = 'new_activity' | 'new_chat';

const readString = async (filePath: string) =>
    (await fs.promises.readFile(path.join(process.cwd(), filePath), 'utf8')).toString();

const getTemplate = memoize(
    async (
        template: EmailTemplate,
    ): Promise<{ text: TemplateExecutor; html: TemplateExecutor }> => {
        const text = await readString(`emails/${template}.txt`);
        const html = await readString(`emails/compiled/${template}.html`);

        return {
            text: compileTemplate(text),
            html: compileTemplate(html),
        };
    },
);

export interface MailData<T> {
    to: string;
    subject: string;
    template: EmailTemplate;
    data: T;
}

const makeEmail = async <T>(data: MailData<T>): Promise<MailDataRequired> => {
    const template = await getTemplate(data.template);
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
    const mails = await Promise.all((Array.isArray(data) ? data : [data]).map(makeEmail));

    if (process.env.NODE_ENV === 'production') {
        return sendgrid.send(mails);
    } else {
        mails.map((mail) => makeDevTransport().sendMail(mail as any));
    }
};
