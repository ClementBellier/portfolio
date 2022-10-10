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
    <div className="wrapper" style={{ flex: 3, paddingBottom: '20px' }}>
      <h3>{CONTACT.MY_NETWORKS.TITLE}</h3>
      <div className="container">
        {CONTACT.MY_NETWORKS.NETWORKS.map(network => (
          <a key={network.NAME} href={network.URL}>
            <div className="network">
              {network.SVG && (
                <svg>
                  <use href={network.SVG} />
                </svg>
              )}
              <p>{network.NAME}</p>
            </div>
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
  const [error, setError] = useState(false)
  const [mailSent, setMailSent] = useState(false)
  const handleChange = e => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  }
  const onSubmit = e => {
    e.preventDefault()
    send('service_kggt9wi', 'template_5iycs2s', toSend, 't1H_ElJlETv0zYWL0')
      .then(() => {
        setMailSent(true)
      })
      .catch(() => {
        setError(true)
      })
  }
  if (mailSent)
    return (
      <div className="wrapper" style={{ width: '100%' }}>
        <div className="container">
          <p className="successMessage">{CONTACT.MAIL_ME.SUCCESS_MESSAGE}</p>
        </div>
      </div>
    )
  return (
    <div className="wrapper" style={{ width: '100%' }}>
      {error && <p className="errorMessage">{CONTACT.MAIL_ME.ERROR_MESSAGE}</p>}
      <form onSubmit={onSubmit} className="contact-me">
        <input
          type="text"
          name="from_name"
          placeholder={CONTACT.MAIL_ME.NAME}
          aria-label={CONTACT.MAIL_ME.NAME}
          value={toSend.from_name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="reply_to"
          placeholder={CONTACT.MAIL_ME.EMAIL}
          aria-label={CONTACT.MAIL_ME.EMAIL}
          value={toSend.reply_to}
          onChange={handleChange}
          required
        />
        <textarea
          type="text"
          name="message"
          placeholder={CONTACT.MAIL_ME.MESSAGE}
          aria-label={CONTACT.MAIL_ME.MESSAGE}
          value={toSend.message}
          onChange={handleChange}
          rows="3"
          required
        />
        <button type="submit">{CONTACT.MAIL_ME.SUBMIT}</button>
      </form>
    </div>
  )
}
function Credits() {
  return (
    <div className="wrapper" style={{width: '100%', marginTop:'50px', paddingBlock: "20px"}}>
      <h3>Crédits</h3>
      <div className="container">
        {CONTACT.CREDITS.map(credit => (
          <div style={{flex: 1}}>
            {credit.TEXT}
            <a href={credit.URL} style={{textDecoration:"underline"}}>{credit.LINK_TEXT}</a>
          </div>
        ))}
      </div>
    </div>
  )
}
function Contact() {
  return (
    <section id={ANCHORS.CONTACT}>
      <h2>{CONTACT.TITLE}</h2>
      <div className="findMe">
        <Networks />
        <Resume resume={CONTACT.MY_RESUME} />
      </div>
      <h2>{CONTACT.MAIL_ME.TITLE}</h2>
      <Mail />
      <Credits />
      <div className="empty-for-scroll"></div>
    </section>
  )
}

export default Contact
