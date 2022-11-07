import { lazy } from 'react'

export const DinnerSolutionRoutes = [
          {
            path: '/favourite-meals',
            component: lazy(() => import('../../views/dinner-solution/favourite-meals'))
          },
]