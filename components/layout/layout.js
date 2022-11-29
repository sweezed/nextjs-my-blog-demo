import { Fragment, useContext } from 'react'
import { NotificationContext } from '../../store/notification_context.js'
import MainNavigation from './main-navigation'
import Notification from '../notification'

export default function Layout({children}) {
  const { notification } = useContext(NotificationContext)

  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
      {notification && <Notification />}
    </Fragment>
  )
}