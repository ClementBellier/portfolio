import { useRef } from 'react'
import useIntersectionObserver from '@react-hook/intersection-observer'
import { CSSCHALLENGE } from '../../public/text'

export function DayCssChallenge({ day, index }) {
  const containerRef = useRef()
  const lockRef = useRef(false)
  const { isIntersecting } = useIntersectionObserver(containerRef)
  if (isIntersecting) {
    lockRef.current = true
  }
  const iframeSrc = `//codepen.io/clementbellier/embed/${day.PEN}/?height=400&theme-id=22129&default-tab=result&editable=false`
  return (
    <div className="day" ref={containerRef}>
      <div className="penContainer">
        {lockRef.current && (
          <iframe
            id={`day-${index}`}
            loading="lazy"
            className="pen"
            src={iframeSrc}
            scrolling="no"
            allowFullScreen={true}
            sandbox="allow-scripts allow-same-origin"
            frameBorder="0"
          ></iframe>
        )}
      </div>
      <div className="penText">
        <p>{day.TITLE}</p>
        <div className="penActions">
          <a
            href={`https://codepen.io/clementbellier/full/${day.PEN}`}
            className="penLink"
            aria-label={`${CSSCHALLENGE.CODEPEN_LINK_ALT_TXT}${day.TITLE}`}
          >
            <svg>
              <use href="#codepen" />
            </svg>
          </a>
          <svg
            type="button"
            className="refresh"
            aria-label="Rafraichir le défi du jour"
            onClick={() =>
              (document.getElementById(`day-${index}`).src = iframeSrc)
            }
          >
            <use href="#refresh" />
          </svg>
        </div>
      </div>
    </div>
  )
}
