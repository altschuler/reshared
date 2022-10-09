﻿import { MailDataRequired } from '@sendgrid/helpers/classes/mail';
import sendgrid from '@sendgrid/mail';
import fs from 'fs';
import { TemplateExecutor } from 'lodash';
import { template as compileTemplate, memoize } from 'lodash-es';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

type EmailTemplate = 'new_activity' | 'new_chat';

const readString = async (path: string) => (await fs.promises.readFile(path)).toString();

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

export const sendMail = async <T>(data: MailData<T> | MailData<T>[]) => {
    const mails = await Promise.all((Array.isArray(data) ? data : [data]).map(makeEmail));
    return sendgrid.send(mails);
};
