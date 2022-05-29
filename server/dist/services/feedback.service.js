"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackService = void 0;
class FeedbackService {
    constructor(repository, mailAdapter) {
        this.repository = repository;
        this.mailAdapter = mailAdapter;
    }
    async execute(feedback) {
        if (!feedback.type || !feedback.commet) {
            throw new Error('Campos obrigatorios requeridos');
        }
        await this.repository.create(feedback);
        await this.mailAdapter.send({
            subject: 'novo feedback',
            body: [
                `<div>`,
                `<p>Feedback: ${feedback.type}</p>`,
                `<p>${feedback.commet}</p>`,
                feedback.screenshot ? `<image src"${feedback.screenshot}"/>` : '',
                `</div>`,
            ].join('\n')
        });
    }
}
exports.FeedbackService = FeedbackService;
