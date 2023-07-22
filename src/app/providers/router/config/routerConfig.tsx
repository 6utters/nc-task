import { AppRoutes, getRouteNote } from '@/shared/consts/router'
import { RouteProps, Navigate } from 'react-router-dom'
import { NotePage } from '@/pages/NotePage'

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
