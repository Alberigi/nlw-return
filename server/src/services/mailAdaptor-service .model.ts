export interface IMail {
    subject: string;
    body: string
}

export interface IMailAdaptor {
    send(mail: IMail): Promise<void>
}