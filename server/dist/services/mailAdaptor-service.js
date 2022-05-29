"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailAdaptor = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "2ba0fce36732b5",
        pass: "bd8a6d4945d1e5"
    }
});
class MailAdaptor {
    async send(mail) {
        await transport.sendMail({
            from: 'equipe <equipe@gmai.com>',
            to: 'mateus alberigi <mateusalberigi@gmail.com>',
            subject: mail.subject,
            html: mail.body
        });
    }
}
exports.MailAdaptor = MailAdaptor;
