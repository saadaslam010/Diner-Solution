

// ** Document title
const TemplateTitle = 'React Base Project'

import { AppRoutes } from './app'
import { AuthenticationRoutes } from './authentication'
import { DinnerSolutionRoutes } from './dinner-solution'
//All Routes
import { ThemeRoutes } from './theme'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
    ...ThemeRoutes,
    ...AuthenticationRoutes,
    ...AppRoutes,
    ...DinnerSolutionRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
