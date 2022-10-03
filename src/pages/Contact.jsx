import { useState } from 'react'
import { ANCHORS, CONTACT } from '../../public/text'
import { send } from 'emailjs-com'

function Resume({ resume }) {
  return (
    <div className="wrapper" style={{ flex: 1 }}>
      <h3>{resume.TITLE}</h3>
      <a href={resume.URL} className="resume">
        <img
          src={resume.IMAGE_URL}
          alt={resume.ALT_TXT}
          style={{ width: '100px' }}
        />
      </a>
    </div>
  )
}

function Networks() {
  return (
    <div className="wrapper" style={{ flex: 3 }}>
      <h3>{CONTACT.MY_NETWORKS.TITLE}</h3>
      <div className="container">
        {CONTACT.MY_NETWORKS.NETWORKS.map(network => (
          <a key={network.NAME} href={network.URL}>
            <div>{network.NAME}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
function Mail() {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Clément',
    message: '',
    reply_to: '',
  })
  const handleChange = e => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  }
  const onSubmit = e => {
    e.preventDefault()
    send('service_kggt9wi', 'template_5iycs2s', toSend, 't1H_ElJlETv0zYWL0')
      .then(response => {
        console.log('SUCCESS!', response.status, response.text)
      })
      .catch(err => {
        console.log('FAILED...', err)
      })
  }
  return (
    <div className="wrapper" style={{ width: '100%' }}>
      <form onSubmit={onSubmit} className="contact-me">
        <input
          type="text"
          name="from_name"
          placeholder={CONTACT.MAIL_ME.NAME}
          aria-label={CONTACT.MAIL_ME.NAME}
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="reply_to"
          placeholder={CONTACT.MAIL_ME.EMAIL}
          aria-label={CONTACT.MAIL_ME.EMAIL}
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="message"
          placeholder={CONTACT.MAIL_ME.MESSAGE}
          aria-label={CONTACT.MAIL_ME.MESSAGE}
          value={toSend.message}
          onChange={handleChange}
          rows="3"
        />
        <button type="submit">{CONTACT.MAIL_ME.SUBMIT}</button>
      </form>
    </div>
  )
}
function Contact() {
  return (
    <section id={ANCHORS.CONTACT}>
      <h2>{CONTACT.TITLE}</h2>
      <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
        <Networks />
        <Resume resume={CONTACT.MY_RESUME} />
      </div>
      <h2>{CONTACT.MAIL_ME.TITLE}</h2>
      <Mail />
    </section>
  )
}

export default Contact
