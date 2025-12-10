import type { PropsWithChildren } from "react";

export default function P({children}: PropsWithChildren) {
    return (
        <p className="">{children}</p>
    )
}