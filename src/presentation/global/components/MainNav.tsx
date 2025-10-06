import { NavLink } from "react-router"
import { chartPie, chartPieFill, glasses, glassesFill, histogram, listCheck, nextMini } from "../constants/icons"
import IconButton, { IconButtonType } from "./buttons/IconButton"
import { ScrollArea, ScrollBar } from "./scroll-area"
import { Icon } from "./Icon"

type MainNavProps = {
    vertical?: boolean
}

export const MainNav = ({ vertical = false }: MainNavProps) => {
    return (
        <ScrollArea className="w-full overflow-x-auto h-full">
            <div className="flex gap-2 flex-row md:flex-col items-center justify-center h-18 md:h-full md:py-2 px-2">
                {vertical && (
                    <div className='sticky top-2 z-10 bg-primaryLite rounded-full'>
                        <IconButton
                            icon={<Icon path={nextMini} />}
                            type={IconButtonType.simple}
                            iconColor='fill-primaryHard'
                        />
                    </div>
                )}
                <MainTab
                    to='/'
                    path={chartPie}
                    pathFill={chartPieFill}
                />
                <MainTab
                    to='/registrations'
                    path={listCheck}
                />
                <MainTab
                    to='/reports'
                    path={histogram}
                />
                <MainTab
                    to='/teachers'
                    path={glasses}
                    pathFill={glassesFill}
                />
            </div>
            <ScrollBar thumbClassName="bg-outline" orientation={vertical ? "vertical" : "horizontal"} />
        </ScrollArea>
    )
}

type MainTabProps = {
    path: string;
    pathFill?: string; // color opcional cuando está activo
    to: string;
};

export const MainTab = ({ path, pathFill, to }: MainTabProps) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `p-2 transition-all duration-400 ease-in-out hover:scale-[95%] active:scale-[90%] ${isActive ? "bg-primary rounded-full" : "bg-transparent"
                }`
            }
        >
            {({ isActive }) => (
                <Icon
                    path={isActive ? (pathFill ?? path) : path}
                    // si está activo usa pathFill, sino un default
                    iconColor={isActive ? 'fill-primaryLite' : 'fill-primaryHard'}
                />
            )}
        </NavLink>
    )
}