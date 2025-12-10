import type { PropsWithChildren } from "react";

export default function Section({children, divider = true}: PropsWithChildren<{divider?: boolean;}>) {
    return (
        <>
            <div className="mb-4">{children}</div>
            {divider && <hr className="mb-4 last:hidden" />}
        </>
    )
}