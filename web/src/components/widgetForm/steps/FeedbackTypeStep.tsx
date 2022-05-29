import { feedbackType, feedbackTypes } from ".."
import { ButtomClose } from "../../ButtomClose";

interface FeedbackTypeStepProps {
    onFeedbackTypeChange: (type: feedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChange }: FeedbackTypeStepProps) {
    return (
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu FeedBack</span>
                <ButtomClose />
            </header>
            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            className="bg-zinc-700 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-violet-800 focus:border-violet-800 focus:outline-none"
                            onClick={() => onFeedbackTypeChange(key as feedbackType)}
                        >
                            <img
                                src={value.image.source}
                                alt={value.image.alt}
                            />
                            <span>{value.title}</span>
                        </button>
                    )
                })}
            </div>
        </>
    )
}