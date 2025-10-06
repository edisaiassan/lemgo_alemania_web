import { MouseEventHandler, ReactNode } from "react";

interface ExtendProps {
    children?: ReactNode;
    min?: boolean;
    className?: string;
    id?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

export const Extend = ({
    children,
    min = false,
    className,
    id, onClick,
}: ExtendProps) => {
    return (
        <div className={`mx-auto ${min ? 'max-w-[768px]' : 'max-w-[1920px]'} ${className} w-full`} id={id} onClick={onClick}>
            {children}
        </div>
    );
};