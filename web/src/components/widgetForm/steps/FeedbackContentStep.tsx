import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { feedbackType, feedbackTypes } from "..";
import { api } from "../../../lib/api";
import { ButtomClose } from "../../ButtomClose";
import { Loading } from "../../Loading";
import { ScreenShotButton } from "../ScreenShotButton"

interface FeedbackContentStepProps {
    feedbackType: feedbackType
    onFeedBackRestartRequest: () => void;
    onFeedbackSend: () => void;
}

export function FeedbackContentStep({ onFeedBackRestartRequest, feedbackType,onFeedbackSend }: FeedbackContentStepProps) {
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('');
    const [isSendingFeedback, setIsSendingFeedback] = useState(false);
    const feedbackInfo = feedbackTypes[feedbackType]

    async function handleSubmitFeedback(event: FormEvent) {
        setIsSendingFeedback(true);
        event.preventDefault();
        await api.post('/feedbacks',{
            type: feedbackType,
            commet: comment,
            screenshot,
        })
        onFeedbackSend();
    }

    return (
        <>
            <header>
                <button type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" onClick={onFeedBackRestartRequest}>
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackInfo.image.source} alt={feedbackInfo.image.alt} className="w-6 h-6" />
                    {feedbackInfo.title}
                </span>
                <ButtomClose />
            </header>
            <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
                <textarea
                    className="bg-zinc-800 min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-violet-900 focus:ring-1 focus:outline-none resize-none"
                    placeholder="Deixe sua mensagem..."
                    onChange={event => setComment(event.target.value)}
                />
                <footer className="flex gap-2 mt-2">
                    <ScreenShotButton onScreenshotTook={setScreenshot} screenshot={screenshot} />
                    <button
                        type="submit"
                        disabled={comment.length === 0 || isSendingFeedback}
                        className="p-2 bg-violet-900 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 focus:ring-violet-900 transition-colors disabled:opacity-50 disabled:hover:gb-violet-900"
                    >
                        {isSendingFeedback? <Loading/> : 'Enviar Feedback'}
                    </button>
                </footer>
            </form>
        </>
    )
}