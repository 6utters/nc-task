import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from '../config/routerConfig'

export const AppRouter: FC = () => {
  return <RouterProvider router={router} />
}
