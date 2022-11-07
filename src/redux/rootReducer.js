// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import calendar from "../views/apps/calendar/store"

const rootReducer = {
  auth,
  navbar,
  layout,
  calendar
}

export default rootReducer
