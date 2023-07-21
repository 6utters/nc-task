import { MainLayout } from './layouts/MainLayout'
import { AppRouter } from '@/providers/router/AppRouter'

export const App = () => {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  )
}
