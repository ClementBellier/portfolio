import { ANCHORS, CSSCHALLENGE } from '../../public/text'
import { DayCssChallenge } from '../components/DayCssChallenge'

function CssChallenge() {
  return (
    <section id={ANCHORS.CSS_CHALLENGE}>
      <h2>{CSSCHALLENGE.TITLE}</h2>
      <p>{CSSCHALLENGE.TEXT}</p>
      <a href={CSSCHALLENGE.CHALLENGE_URL} className="container">
        <div
          style={{
            backgroundColor: 'var(--tertiary-color)',
            color: 'var(--nav-text)',
          }}
        >
          {CSSCHALLENGE.CHALLENGE_LINK}
        </div>
      </a>
      <div className="container days">
        {CSSCHALLENGE.DAYS.map((day, index) => (
          <DayCssChallenge day={day} index={index} key={`day-${index}`} />
        ))}
      </div>
    </section>
  )
}

export default CssChallenge
