import type { HTMLProps } from "react";

export type SectionProps = HTMLProps<HTMLDivElement> & { divider?: boolean; };

export default function Section({ children, divider = true, ...rest }: SectionProps) {
    return (
        <div {...rest}>
            <div className="mb-4">{children}</div>
            {divider && <hr className="mb-4" />}
        </div>
    )
}