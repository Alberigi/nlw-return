import { IMail, IMailAdaptor } from "./mailAdaptor-service .model"
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2ba0fce36732b5",
      pass: "bd8a6d4945d1e5"
    }
  });

export class MailAdaptor implements IMailAdaptor {
    async send(mail: IMail): Promise<void> {
        await transport.sendMail({
            from: 'equipe <equipe@gmai.com>',
            to: 'mateus alberigi <mateusalberigi@gmail.com>',
            subject: mail.subject,
            html:mail.body
        })
    }
}