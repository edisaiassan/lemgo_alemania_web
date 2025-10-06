import { createContext, useContext, ReactNode } from 'react'
import { teachersViewModel } from '../pages/academicManagement/teachers/viewModel/teachersViewModel'

// Tipo inferido automáticamente a partir de teachersViewModel
type TeachersContextType = ReturnType<typeof teachersViewModel>

// Creamos el contexto con null como valor inicial posible
const TeachersContext = createContext<TeachersContextType | null>(null)

interface TeachersProviderProps {
  children: ReactNode
}

export const TeachersProvider = ({ children }: TeachersProviderProps) => {
  const teachers = teachersViewModel()

  return (
    <TeachersContext.Provider value={teachers}>
      {children}
    </TeachersContext.Provider>
  )
}

export const useTeachers = (): TeachersContextType => {
  const context = useContext(TeachersContext)
  if (!context) {
    throw new Error('useTeachers debe usarse dentro de un TeachersProvider')
  }
  return context
}
