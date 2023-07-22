import { FC, memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routerConfig } from '../config/routerConfig'

export const AppRouter: FC = memo(() => {

  return (
    <Routes>{Object.values(routerConfig).map(route =>
      <Route
        key={route.path}
        path={route.path}
        element={route.children}
      />
    )}</Routes>
  )
})
