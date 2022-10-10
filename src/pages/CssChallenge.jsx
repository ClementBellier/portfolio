import { useState } from 'react'
import { ANCHORS, CSSCHALLENGE } from '../../public/text'
import { DayCssChallenge } from '../components/DayCssChallenge'

function CssChallenge() {
  const [showChallenge, setShowChallenge] = useState(false)
  const handleClick = () => {
    setShowChallenge(!showChallenge)
    if (showChallenge) {
      document
        .querySelector(`#${ANCHORS.CSS_CHALLENGE}`)
        .scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section id={ANCHORS.CSS_CHALLENGE}>
      <h2>{CSSCHALLENGE.TITLE}</h2>
      <p>{CSSCHALLENGE.TEXT}</p>
      <a
        href={CSSCHALLENGE.CHALLENGE_URL}
        className="container"
        style={{ marginBlock: '20px' }}
      >
        <div
          style={{
            backgroundColor: 'var(--tertiary-color)',
            color: 'var(--nav-text)',
          }}
        >
          {CSSCHALLENGE.CHALLENGE_LINK}
        </div>
      </a>
      <div className="all-days">
        <div className="button-container">
          <button onClick={handleClick}>
            {showChallenge
              ? CSSCHALLENGE.HIDE_CHALLENGE
              : CSSCHALLENGE.SHOW_CHALLENGE}
          </button>
        </div>
        {showChallenge && (
          <div className="container days">
            {CSSCHALLENGE.DAYS.map((day, index) => (
              <DayCssChallenge day={day} index={index} key={`day-${index}`} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default CssChallenge
