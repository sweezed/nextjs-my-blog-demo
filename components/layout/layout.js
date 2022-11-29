import { Fragment, useContext } from 'react'
import MainNavigation from './main-navigation'
import Notification from '../notification'

export default function Layout({children}) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
      <Notification />
    </Fragment>
  )
}