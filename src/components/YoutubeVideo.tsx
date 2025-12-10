import clsx from "clsx";
import type { HTMLProps } from "react";

export type YoutubeVideoProps = HTMLProps<HTMLIFrameElement> & {
    videoId: string;
}

export default function YoutubeVideo({ videoId, className, ...rest }: YoutubeVideoProps) {
    return (
        <div className={clsx("aspect-video w-full", className)}>
            <iframe
            className="w-full h-full border-0"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
            title="Descriptive title of the video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            {...rest}>
        </iframe>
        </div>
    )
}