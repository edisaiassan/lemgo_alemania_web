import IconButton from "../../global/components/buttons/IconButton"
import { MainCard } from "../../global/components/cards/MainCard"
import { Extend } from "../../global/components/Extend"
import { Icon } from "../../global/components/Icon"
import { TopBar } from "../../global/components/TopBar"
import { home } from "../../global/constants/icons"
import { ScrollArea, ScrollBar } from "../../global/components/scroll-area"

export const DashboardPage = () => {

  return <ScrollArea className="w-full h-full">
    <Extend>
      <TopBar
        className='sticky top-0 z-10'
        title={<h3>Dashboard</h3>}
      />
      <div className='p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
        <MainCard
          leading={
            <IconButton
              icon={<Icon path={home} />}
              gradientColors={["from-indigo-100", "via-indigo-400", "to-indigo-700"]}
            />}
          title="Alumnos inscritos"
          trailing={<IconButton
            icon={<h3 className='text-surface'>1</h3>}
            gradientColors={["from-indigo-100", "via-indigo-400", "to-indigo-700"]}
          />}
          bg='bg-indigo-100'
        />
        <MainCard
          leading={<IconButton icon={<Icon path={home} />}
            gradientColors={["from-green-100", "via-green-400", "to-green-700"]}
          />}
          title="Profesores activos"
          trailing={<IconButton
            icon={<h3 className='text-surface'>1</h3>}
            gradientColors={["from-green-100", "via-green-400", "to-green-700"]}
          />
          }
          bg='bg-secondaryLite'
        />
        <MainCard
          leading={<IconButton icon={<Icon path={home} />} />}
          title="Aulas registradas"
          trailing={<IconButton icon={<h3 className='text-surface'>1</h3>} />}
        />
        <MainCard
          leading={<IconButton icon={<Icon path={home} />}
            gradientColors={["from-yellow-100", "via-yellow-400", "to-yellow-700"]}
          />}
          title="Inscripciones de 30 días"
          trailing={<IconButton icon={<h3 className='text-surface'>1</h3>}
            gradientColors={["from-yellow-100", "via-yellow-400", "to-yellow-700"]}
          />}
          bg='bg-yellow-100'
        />
        <MainCard
          bg={'bg-errorLite'}
          leading={<IconButton icon={<Icon path={home} />}
            gradientColors={["from-red-100", "via-red-400", "to-red-700"]}
          />}
          title="Alumnos pendietes"
          trailing={<IconButton icon={<h3 className='text-surface'>1</h3>}
            gradientColors={["from-red-100", "via-red-400", "to-red-700"]}
          />}
        />
        <MainCard
          bg='bg-purple-100'
          leading={<IconButton icon={<Icon path={home} />}
            gradientColors={["from-purple-100", "via-purple-400", "to-purple-700"]}
          />}
          title="Apoderados activos"
          trailing={<IconButton icon={<h3 className='text-surface'>1</h3>}
            gradientColors={["from-purple-100", "via-purple-400", "to-purple-700"]}
          />}
        />
        <MainCard
          bg='bg-outlineLite'
          leading={<IconButton icon={<Icon path={home} />}
            gradientColors={["from-outlineLite", "via-slate-400", "to-outlineHard"]}
          />}
          title="Material por nivel"
          trailing={<IconButton icon={<h3 className='text-surface'>1</h3>}
            gradientColors={["from-outlineLite", "via-slate-400", "to-outlineHard"]}
          />}
        />
        <MainCard
          bg='bg-gray-100'
          leading={<IconButton icon={<Icon path={home} />}
            gradientColors={["from-gray-200", "via-gray-400", "to-gray-700"]}
          />}
          title="Total de usuarios"
          trailing={<IconButton icon={<h3 className='text-surface'>1</h3>}
            gradientColors={["from-gray-200", "via-gray-400", "to-gray-700"]}
          />}
        />
      </div>
    </Extend>
    <ScrollBar thumbClassName="bg-outline" />
  </ScrollArea>
}

