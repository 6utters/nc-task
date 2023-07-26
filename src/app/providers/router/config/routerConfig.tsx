import { RouteProps, createBrowserRouter, Navigate } from 'react-router-dom'
import { AppRoutes, getRouteNote } from '../consts/router'
import { NotePage } from '@/pages/NotePage'

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.NOTE]: {
    path: getRouteNote(':id'),
    element: <NotePage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <Navigate to='/notes/31241232352' replace />
  }
}

export const router = createBrowserRouter(
  Object.values(routerConfig).map((route) => ({
    path: route.path,
    element: route.element
  }))
)
