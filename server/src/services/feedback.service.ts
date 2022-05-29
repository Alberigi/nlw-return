import { IFeedbackRepository } from "../repository/feedback-repository.model";
import { IFeedback, IFeedbackService } from "./feedback-service.model";
import { IMailAdaptor } from "./mailAdaptor-service .model";

export class FeedbackService implements IFeedbackService {

    constructor(
        private repository: IFeedbackRepository,
        private mailAdapter: IMailAdaptor
    ){}

    async execute(feedback: IFeedback): Promise<void> {

        if(!feedback.type || !feedback.commet){
            throw new Error('Campos obrigatorios requeridos');
            
        }

        await this.repository.create(feedback)

        await this.mailAdapter.send({
            subject: 'novo feedback',
            body:[
                `<div>`,
                `<p>Feedback: ${feedback.type}</p>`,
                `<p>${feedback.commet}</p>`,
                feedback.screenshot ? `<image src"${feedback.screenshot}"/>` : '',
                `</div>`,
            ].join('\n')
        })
    }
}