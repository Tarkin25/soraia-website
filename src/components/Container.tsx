import type { PropsWithChildren } from "react";

export default function Container({children}: PropsWithChildren) {
    return (
        <main className="mx-12 text-gray-700">
            {children}
        </main>
    )
}