import express from "express";
import { FeedbackRepository } from "./repository/feedback.repository";
import { FeedbackService } from "./services/feedback.service";
import { MailAdaptor } from "./services/mailAdaptor-service";



  export const routes = express.Router();

  routes.post('/feedbacks',async (req, res) => {
    const {type, commet, screenshot } = req.body;

    const repository = new FeedbackRepository()
    const mailAdapter = new MailAdaptor()
    const service = new FeedbackService(repository,mailAdapter)

    service.execute({commet,type,screenshot})
    

    return res.status(201).send()
})