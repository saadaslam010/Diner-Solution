

// ** Document title
const TemplateTitle = 'React Base Project'

import { AppRoutes } from './app'
import { AuthenticationRoutes } from './authentication'
//All Routes
import { ThemeRoutes } from './theme'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
    ...ThemeRoutes,
    ...AuthenticationRoutes,
    ...AppRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
