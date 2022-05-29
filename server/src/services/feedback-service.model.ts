export interface IFeedback {
    type: string
    commet: string
    screenshot?: string
}

export interface IFeedbackService {
    execute(feedback: IFeedback): Promise<void>
}