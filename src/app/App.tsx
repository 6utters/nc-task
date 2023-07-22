import { MainLayout } from '@/shared/layouts/MainLayout'
import { AppRouter } from '@/app/providers/router'

export const App = () => {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  )
}
