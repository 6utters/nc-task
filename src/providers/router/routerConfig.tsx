import { AppRoutes, getRouteNote } from './router'
import { RouteProps, Navigate } from 'react-router-dom'
import { NotePage } from '@/pages/NotePage/NotePage'

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.NOTE]: {
    path: getRouteNote(':id'),
    children: <NotePage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    children: <Navigate to='/notes/1' replace />
  }
}
