
import styles from '../../styles/contact-form.module.css'

export default function ContactForm() {
  return (
    <section className='section'>
      <h1>How Can I Help You?</h1>
      <form className='form'>
      <div className='controls'>
        <div className='control'>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required />
        </div>
      </div>
      <div className="control">
        <label htmlFor='message'>Message</label>
        <textarea id="message" cols="30" rows="5"></textarea>
      </div>
      <div className='action'>
        <button>Send Message</button>
      </div>
      </form>
    </section>
  )
}