import type { PropsWithChildren } from "react";

export default function UL({ children }: PropsWithChildren) {
    return <ul className="list-disc pl-6 *:ml-4">{children}</ul>
}