import { Extend } from "../../global/components/Extend"
import workingLottie from "../../global/animations/working.json"
import { Toaster, toast } from 'sonner'
import Lottie from "lottie-react"
import MainButton from "../../global/components/buttons/MainButton"
import { signInViewModel } from "./viewModel/signInViewModel"

export const SignInPage = () => {
    const signInVM = signInViewModel()

    const  {searchText} = signInVM

    return (
        <Extend className='justify-center items-center flex min-h-screen w-full p-4'>
            <div className='flex flex-col md:flex-row gap-2 w-full'>
                <div className="hidden md:flex flex-col items-center justify-center bg-[url('assets/backgroundLogin.jpg')] bg-cover bg-center md:min-h-[720px] min-h-[384px] w-full p-4 rounded-2xl shadow-2xl">
                    <Lottie
                        className='max-w-[320px] max-h-[320px] h-full shadow-2xl rounded-2xl'
                        animationData={workingLottie}
                        loop={true}
                        autoplay={true}
                    />
                </div>

                <div className='flex flex-col items-center justify-center w-full md:max-w-[640px] p-4 bg-green-100 rounded-2xl shadow-2xl gap-4'>
                    <img
                        className='drop-shadow-2xl w-full max-w-[320px] h-full max-h-[320px] object-contain'
                        src='/fullLogo.png'
                        alt='fullLogo'
                    />
                    <form className='flex flex-col w-full items-center gap-2'>
                        <MainButton
                            onClick={() => { }}
                        >Ingresar
                        </MainButton>
                    </form>
                </div>
            </div>
            <Toaster richColors />
        </Extend >
    )
}
