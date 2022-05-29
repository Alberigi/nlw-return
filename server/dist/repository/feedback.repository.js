"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackRepository = void 0;
const prisma_1 = require("../prisma");
class FeedbackRepository {
    async create(feedback) {
        await prisma_1.prisma.feedBack.create({
            data: feedback
        });
    }
}
exports.FeedbackRepository = FeedbackRepository;
