import { Navigate, Route, Routes } from "react-router"
import { Extend } from "../presentation/global/components/Extend"
import { MainNav } from "../presentation/global/components/MainNav"
import { useWindowWidth } from "../presentation/global/utils/getWidth"
import { DashboardPage } from "../presentation/pages/dashboard/DashboardPage"
import { RegistrationsPage } from "../presentation/pages/registrations/RegistrationsPage"
import { ReportsPage } from "../presentation/pages/reports/ReportsPage"
import { TeachersPage } from "../presentation/pages/academicManagement/teachers/TeachersPage"

export const NavRouter = () => {
    const width = useWindowWidth();

    return <div className='h-screen w-full bg-primaryLite'>
        <Extend>
            <div className="md:h-screen h-18 md:float-left md:static fixed bottom-0 left-0 text-white w-full md:w-18 flex">
                <MainNav
                    vertical={width >= 768 ? true : false}
                />
            </div>
            <div className='md:pl-18 pl-4 pr-4 pt-4 md:pb-4 pb-18 h-screen'>
                <div className='h-full w-full bg-surface dark:bg-black rounded-3xl overflow-hidden'>
                    <Routes>
                        <Route path='/' element={<DashboardPage />} />
                        <Route path='/registrations' element={<RegistrationsPage />} />
                        <Route path='/reports' element={<ReportsPage />} />
                        <Route path='/teachers' element={<TeachersPage />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </div>  
            </div>
        </Extend>
    </div>
}
