import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter, ScrollRestoration } from 'react-router'
import { AppRouter } from './router/AppRouter'
import { TeachersProvider } from './presentation/context/teacherContext'

const router = createBrowserRouter([
  {
    path: '/*',
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <TeachersProvider>
          <AppRouter />
        </TeachersProvider>
      </>
    )
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
