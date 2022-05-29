"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const feedback_repository_1 = require("./repository/feedback.repository");
const feedback_service_1 = require("./services/feedback.service");
const mailAdaptor_service_1 = require("./services/mailAdaptor-service");
exports.routes = express_1.default.Router();
exports.routes.post('/feedbacks', async (req, res) => {
    const { type, commet, screenshot } = req.body;
    const repository = new feedback_repository_1.FeedbackRepository();
    const mailAdapter = new mailAdaptor_service_1.MailAdaptor();
    const service = new feedback_service_1.FeedbackService(repository, mailAdapter);
    service.execute({ commet, type, screenshot });
    return res.status(201).send();
});
