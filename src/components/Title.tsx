import clsx from "clsx";
import type { HTMLProps } from "react";

export default function Title({children, className, ...rest}: HTMLProps<HTMLHeadingElement>) {
    return (
        <h1 className={clsx("text-2xl font-semibold mb-2", className)} {...rest}>{children}</h1>
    )
}