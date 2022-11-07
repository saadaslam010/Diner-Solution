import { Mail, Home, User } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'listing',
    title: 'Listing',
    icon: <User size={20} />,
    navLink: '/listing'
  },
  {
    id: 'calendar',
    title: 'Calendar',
    icon: <User size={20} />,
    navLink: '/calendar'
  },
]
