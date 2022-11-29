import { useState } from 'react'
import styles from '../styles/contact-form.module.css'

export default function ContactForm() {
  const [body, setBody] = useState({email: '', name: '', message: ''})

  const onInputChange = (event) => {
    setBody(prevState => {
      return {
        ...prevState,
        [event.target.id]: event.target.value
      }
    })
  }

  const onSendMsgHandler = (event) => {
    event.preventDefault()
    if (!body.email || !body.name || !body.message) return
    
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(body),
      headers:  {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <section className={styles.section}>
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