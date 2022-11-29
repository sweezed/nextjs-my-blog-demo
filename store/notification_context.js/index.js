import { createContext, useState} from 'react'

export const NotificationContext = createContext()

export default function NotificationProvider ({children}) {
  const [notification, setNotification] = useState()

  const context = {
    notification,
    setNotification
  }

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  )
}