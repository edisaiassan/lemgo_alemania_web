import { useEffect } from "react"
import IconButton from "../../../global/components/buttons/IconButton"
import MainButton from "../../../global/components/buttons/MainButton"
import { Extend } from "../../../global/components/Extend"
import { Icon } from "../../../global/components/Icon"
import { TopBar } from "../../../global/components/TopBar"
import { add, excel, pdf, printIcon, refresh } from "../../../global/constants/icons"
import { useWindowWidth } from "../../../global/utils/getWidth"
import { ScrollArea, ScrollBar } from "../../../global/components/scroll-area"
import { useTeachers } from "../../../context/teacherContext"
import { Skeleton } from "../../../global/components/Skeleton"
import four04Lottie from '../../../global/animations/404.json'
import noResultFoundLottie from '../../../global/animations/noResultFound.json'
import { Messagesection } from "../../../global/sections/Messagesection"

export const TeachersPage = () => {
    const width = useWindowWidth()
    const { teachers, loading, error, onGetAllTeachers } = useTeachers()

    useEffect(() => {
        if (teachers.length === 0) {
            onGetAllTeachers()
        }
    }, [])

    return (
        <Extend className="h-full w-full flex flex-col">
            <TopBar
                title={<h3>Profesores</h3>}
                actions={
                    width >= 532 ? (
                        <>
                            <MainButton
                                gradientColors={["from-secondaryLite", "via-secondary", "to-secondaryHard"]}
                                leftChild={<Icon path={excel} />}
                            >
                                Excel
                            </MainButton>
                            <MainButton
                                gradientColors={["from-errorLite", "via-error", "to-errorHard"]}
                                leftChild={<Icon path={pdf} />}
                            >
                                PDF
                            </MainButton>
                            <MainButton leftChild={<Icon path={printIcon} />}>Imprimir</MainButton>
                        </>
                    ) : (
                        <>
                            <IconButton
                                gradientColors={["from-secondaryLite", "via-secondary", "to-secondaryHard"]}
                                icon={<Icon path={excel} />}
                            />
                            <IconButton
                                gradientColors={["from-errorLite", "via-error", "to-errorHard"]}
                                icon={<Icon path={pdf} />}
                            />
                            <IconButton icon={<Icon path={printIcon} />} />
                        </>
                    )
                }
            />
            <div>{`${teachers} - ${loading} - ${error}`}</div>
            {loading ? <div className='px-4 pt-4 pb-22 gap-2 flex flex-col'>{Array.from({ length: 16 }).map((_, i) => (
                <Skeleton className='h-18' />
            ))}</div> : error ? <Messagesection
                className='px-4 pt-4 pb-22'
                onClick={onGetAllTeachers}
                message={error}
                lottie={four04Lottie}
            /> : teachers.length === 0 ? <Messagesection
                className='px-4 pt-4 pb-22'
                onClick={onGetAllTeachers}
                message='No puedo se ha encontrado profesores'
                lottie={noResultFoundLottie}
            /> : <ScrollArea className='flex-1 overflow-y-auto h-full'>
                <div className="px-4 pt-4 pb-22 flex flex-col items-center">
                    <table className="w-full bg-primaryLite rounded-3xl">
                        <thead className="bg-primary sticky top-0 z-10">
                            <tr>
                                <th className="text-surface px-4 py-2 rounded-tl-3xl">DNI</th>
                                <th className="text-surface px-4 py-2">Nombre</th>
                                <th className="text-surface px-4 py-2">Apellidos</th>
                                <th className="text-surface px-4 py-2">Sexo</th>
                                <th className="text-surface px-4 py-2">Especialidad</th>
                                <th className="text-surface px-4 py-2">Teléfono</th>
                                <th className="text-surface px-4 py-2">Email</th>
                                <th className="text-surface px-4 py-2">Activo</th>
                                <th className="text-surface px-4 py-2 rounded-tr-3xl">Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teachers.map((t) => (
                                <tr key={t.id}>
                                    <td className="px-4 py-2 border-t border-outline text-center text-primaryHard">{t.dni}</td>
                                    <td className="px-4 py-2 border-t border-outline text-center text-primaryHard">{t.name}</td>
                                    <td className="px-4 py-2 border-t border-outline text-center text-primaryHard">{t.lastname}</td>
                                    <td className="px-4 py-2 border-t border-outline text-center text-primaryHard">{t.sex}</td>
                                    <td className="px-4 py-2 border-t border-outline text-center text-primaryHard">{t.specialty}</td>
                                    <td className="px-4 py-2 border-t border-outline text-center text-primaryHard">{t.phone ?? "-"}</td>
                                    <td className="px-4 py-2 border-t border-outline text-center text-primaryHard">{t.email ?? "-"}</td>
                                    <td className="px-4 py-2 border-t border-outline text-center text-primaryHard">{t.isActive ? "✅" : "❌"}</td>
                                    <td className="px-4 py-2 border-t border-outline text-center text-primaryHard">{new Date(t.date).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <ScrollBar thumbClassName="bg-outline" orientation="horizontal" />
                <ScrollBar thumbClassName="bg-outline" orientation="vertical" />
            </ScrollArea>}

            <div className='absolute md:bottom-8 bottom-22 right-8'>
                <MainButton
                    leftChild={<Icon path={add} />}
                    isFab={true}
                >
                    Agregar profesor
                </MainButton>
            </div>
        </Extend>
    )
}