export interface IFeedback {
    type: string
    commet: string
    screenshot?: string
}

export interface IFeedbackRepository {
    create(feedback: IFeedback): Promise<void>
}