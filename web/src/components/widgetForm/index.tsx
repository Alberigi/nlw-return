import { useState } from "react";

import bugImageURL from '../../assets/bug.svg'
import ideaImageURL from '../../assets/idea.svg'
import thoughtImageURL from '../../assets/thought.svg'
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageURL,
            alt: 'imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageURL,
            alt: 'imagem de uma lampada'
        }
    },
    THOUGH: {
        title: 'Outro',
        image: {
            source: thoughtImageURL,
            alt: 'imagem de um balão de pensamento'
        }
    },
}

export type feedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null)
    const [sendFeedback, setSendFeedback] = useState(false)

    function handleRestartFeedback() {
        setFeedbackType(null)
        setSendFeedback(false)
    }

    return (
        <div className="bg-zinc-800 p-4 relative rounded-2xl mb-4 flex flex-col items-center shodow-lg w-[calc(100w-2rem)] md:w-auto">

            {sendFeedback ? <FeedbackSucessStep onFeedBackRestartRequest={handleRestartFeedback} /> : (
                <>
                    {
                        !feedbackType ? (
                            <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
                        )
                            : (
                                <FeedbackContentStep onFeedbackSend={() => setSendFeedback(true)} feedbackType={feedbackType} onFeedBackRestartRequest={handleRestartFeedback} />
                            )
                    }
                </>
            )}


            <footer className="text-xs text-neutral-400">
                Feito por <a className="underline underline-offset-2" href="">Mat Alberigi</a>
            </footer>
        </div>
    )
}