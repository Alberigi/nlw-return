"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const feedback_service_1 = require("./feedback.service");
describe('Submit a feedback', () => {
    it('should submit a feedback', async () => {
        const submitFeedback = new feedback_service_1.FeedbackService({ create: async () => { } }, { send: async () => { } });
        expect(submitFeedback.execute({
            type: 'BUG',
            commet: 'comennt',
            screenshot: 'sadasd.jpg'
        })).resolves.not.toThrow();
    });
    it('should not submit a feedback without type', async () => {
        const submitFeedback = new feedback_service_1.FeedbackService({ create: async () => { } }, { send: async () => { } });
        expect(submitFeedback.execute({
            type: '',
            commet: 'comennt',
            screenshot: 'sadasd.jpg'
        })).rejects.toThrow();
    });
    it('should not submit a feedback without commet', async () => {
        const submitFeedback = new feedback_service_1.FeedbackService({ create: async () => { } }, { send: async () => { } });
        expect(submitFeedback.execute({
            type: 'BUG',
            commet: '',
            screenshot: 'sadasd.jpg'
        })).rejects.toThrow();
    });
});
