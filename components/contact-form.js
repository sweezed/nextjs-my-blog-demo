import { useState, useContext } from 'react'
import { NotificationContext } from '../store/notification_context.js'

import styles from '../styles/contact-form.module.css'

async function callApi(body) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(body),
    headers:  {
      'Content-Type': 'application/json'
    }
  })
  if (!response.ok){
    const error = await response.json()
    throw new Error (error.message)
  }

  return await response.json()
}

export default function ContactForm() {
  const [body, setBody] = useState({email: '', name: '', message: ''})
  const { setNotification } =useContext(NotificationContext)

  const onInputChange = (event) => {
    setBody(prevState => {
      return {
        ...prevState,
        [event.target.id]: event.target.value
      }
    })
  }

  const onSendMsgHandler = async (event) => {
    let response

    event.preventDefault()
    if (!body.email || !body.name || !body.message) return

    setNotification({title: 'Messages', message: 'Sending Message...', status: 'pending'})
    try {
      response = await callApi(body)
    } catch (error) {
      return setNotification({title: 'Messages', message: error.message, status: 'error'})
    }

    setNotification({title: 'Messages', message: response.message, status: 'success'})
  }

  return (
    <section className={styles.contact}>
      <h1>How Can I Help You?</h1>
      <form className={styles.form} onSubmit={onSendMsgHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor='email'>Your Email</label>
          <input 
            type='email' id='email' 
            value={body.email} onChange={onInputChange}
            required 
          />
        </div>
        <div className={styles.control}>
          <label htmlFor='name'>Your Name</label>
          <input 
            type='text' id='name' 
            value={body.name} onChange={onInputChange} 
            required 
          />
        </div>
      </div>
      <div className={styles.control}>
        <label htmlFor='message'>Message</label>
        <textarea 
          id="message" cols="30" rows="5" 
          value={body.message} onChange={onInputChange} 
          required
        />
      </div>
      <div className={styles.action}>
        <button>Send Message</button>
      </div>
      </form>
    </section>
  )
}