import { Icon } from '../components/Icon'
import Lottie from 'lottie-react'
import { ScrollArea, ScrollBar } from '../../global/components/scroll-area'
import MainButton from '../components/buttons/MainButton'
import { refresh } from '../constants/icons'

type MessageSectionType = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    message: string,
    lottie?: object,
    className?: string,
}

export const Messagesection = ({ onClick, message, lottie, className }: MessageSectionType) => {
    return (
        <ScrollArea className='flex-1 overflow-y-auto' isVerticalCenter={true} >
            <div className={`w-full items-center flex flex-col gap-2 ${className}`} >
                {lottie && <Lottie
                    className=' items-center flex w-full h-full max-w-64 max-h-64'
                    animationData={lottie}
                />}
                <h4 className='text-primary'>{message}</h4>
                <MainButton
                    onClick={onClick}
                    leftChild={< Icon path={refresh} />}
                >
                    Actualizar
                </MainButton>
            </div>
        </ScrollArea>
    )
}
