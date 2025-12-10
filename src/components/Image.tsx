import clsx from "clsx";
import type { HTMLProps } from "react";

export type ImageProps = HTMLProps<HTMLImageElement> & { source?: string; }

export default function Image({src, className, source, ...rest}: ImageProps) {
    return <div className={clsx("", className)}>
        <img src={src} {...rest} />
        {source && <p className="text-sm" >Quelle: {source}</p>}
    </div>
}