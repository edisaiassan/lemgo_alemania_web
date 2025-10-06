type MainCardType = {
    title?: string;
    subtitle?: string;
    bg?: string;
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const MainCard = ({
    onClick,
    title,
    subtitle,
    bg = 'bg-primaryLite',
    leading,
    trailing,
    children
}: MainCardType) => {
    return (
        <button
            type='button'
            onClick={onClick}
            className={`rounded-3xl ${bg} flex flex-col transition-all duration-400 ease-in-out hover:scale-[95%] active:scale-[90%] shadow-lg`}>
            <div className='flex px-2 py-2'>
                <>{leading}</>
                {title !== null && subtitle !== null && (<div className='px-2 flex-1 items-start justify-center flex flex-col'>
                    <h5 className='text-primaryHard'>{title}</h5>
                    <p className='text-outlineHard'>{subtitle}</p>
                </div>)}
                <>{trailing}</>
            </div>
            {children && <div className="px-4 pb-2 items-start flex flex-col">{children}</div>}
        </button>
    )
}
