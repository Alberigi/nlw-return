import html2canvas from "html2canvas"
import { Camera, Trash } from "phosphor-react"
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenShotButtonProps {
    screenshot: string | null;
    onScreenshotTook: (screenshot: string | null) => void
}

export function ScreenShotButton({onScreenshotTook,screenshot}: ScreenShotButtonProps) {
    const [isTakeScreenshot, setIsTakeScreenshot] = useState(false);

    async function handerTakeScreenshot() {
        setIsTakeScreenshot(true)

        const canvas = await  html2canvas(document.querySelector('html')!);
        const base64Image = canvas.toDataURL('image/png')
        onScreenshotTook(base64Image);

        setIsTakeScreenshot(false)
    }

    if(screenshot){
        return (
            <button
                type="button" 
                onClick={()=> onScreenshotTook(null)}
                style={{
                    backgroundImage: `url(${screenshot})`,
                    backgroundPosition: 'right bottom',
                    backgroundSize: 180,
                }}
                className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc 400 hover:text-zinc-100 transition-colors"
            >
                <Trash weight="fill"/>
            </button>
        )
    }

    return (

        <button
            type="button"
            onClick={handerTakeScreenshot}
            className="p-2 bg-zinc-800 rounded-md border-transparent houver:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-zinc-900 focus:ring-violet-900 focus:ring-1 focus:outline-none resize-none scrollbar"
        >
           {isTakeScreenshot ? <Loading/> : <Camera className="w-6 h-6" />} 
        </button>
    )
}