import { cloneElement, HTMLAttributes, ReactElement } from "react";

export function SocialIcon({ icon }: { icon: ReactElement }) {
    return (
        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 text-white">
            {cloneElement(icon, { className: "w-full h-full" } as HTMLAttributes<HTMLElement>)}
        </div>
    );
}
