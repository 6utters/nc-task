export enum AppRoutes {
  NOTE = 'note',
  NOT_FOUND = 'not_found'
}

export const getRouteNote = (id: string) => `/notes/${id}`

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteNote('id')]: AppRoutes.NOTE
}

