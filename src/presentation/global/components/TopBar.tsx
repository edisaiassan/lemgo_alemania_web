import { ReactNode } from "react";
import { Extend } from "./Extend";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "./scroll-area";

interface TopBarProps {
    leading?: ReactNode;
    title?: ReactNode;
    actions?: ReactNode;
    background?: string;
    textColor?: string;
    titlePosition?: string;
    hTopBar?: string;
    className?: string;
}

export const TopBar: React.FC<TopBarProps> = ({
    leading,
    title,
    actions,
    background = 'bg-surface dark:bg-black',
    textColor = "text-white",
    titlePosition = "justify-start",
    hTopBar = "h-14",
    className = "",
}) => {
    const hFull = "h-full";
    const itemsCenter = "items-center";
    const flex = "flex";
    const gap2 = "gap-2";

    return (
        <nav
            className={`text-white ${background} ${textColor} ${hTopBar} whitespace-nowrap ${className}`}
        >
            <Extend className={`${flex} px-4 ${hFull} ${gap2}`}>
                {leading && (
                    <div className={`${flex} ${gap2} ${hFull} ${itemsCenter}`}>
                        {leading}
                    </div>
                )}
                <ScrollArea className="w-full overflow-x-auto">
                    <div
                        className={`${flex} ${gap2} w-full text-primaryHard ${itemsCenter} ${hTopBar} ${titlePosition}`}
                    >
                        {title}
                    </div>
                    <ScrollBar orientation="horizontal" className="px-4" />
                </ScrollArea>
                {actions && (
                    <div className={`${flex} ${gap2} ${hFull} ${itemsCenter}`}>
                        {actions}
                    </div>
                )}
            </Extend>
        </nav>
    );
};
