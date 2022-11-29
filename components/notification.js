import ReactDOM from 'react-dom';
import { useContext, useEffect } from 'react';
import { NotificationContext } from '../store/notification_context.js'

import styles from '../styles/notification.module.css'

function Notification() {
  const { notification, setNotification } = useContext(NotificationContext)

  if (!notification) return

  const { title, message, status } = notification

  useEffect(() => {
    let timer
    if(status === 'error' || status === 'success' ) {
      timer = setTimeout(() => {
        setNotification(undefined)
      }, 3000)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [notification])

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = styles.success;
  }

  if (status === 'error') {
    statusClasses = styles.error;
  }

  if (status === 'pending') {
    statusClasses = styles.pending
  }
  
  const cssClasses = `${styles.notification} ${statusClasses}`;

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  )
}

export default Notification
