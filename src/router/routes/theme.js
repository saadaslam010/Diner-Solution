import { lazy } from 'react'

export const ThemeRoutes = [
        {
            path: '/home',
            component: lazy(() => import('../../views/theme/Home'))
          },
          {
            path: '/second-page',
            component: lazy(() => import('../../views/theme/SecondPage'))
          },
          {
            path: '/error',
            component: lazy(() => import('../../views/theme/Error')),
            layout: 'BlankLayout'
          },
          {
            path: '/listing',
            component: lazy(() => import('../../views/theme/Listing')),
            layout: 'VerticalLayout'
          }
]