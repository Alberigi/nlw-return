import { prisma } from "../prisma";
import { IFeedback, IFeedbackRepository } from "./feedback-repository.model";

export class FeedbackRepository implements IFeedbackRepository {
    async create(feedback: IFeedback): Promise<void> {
        await prisma.feedBack.create({
            data: feedback
        })
        
    }
}