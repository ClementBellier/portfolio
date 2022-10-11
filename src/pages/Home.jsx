import { ANCHORS, HOME } from '../../public/text'
import AboutMe from './AboutMe'

function Home() {
  return (
    <>
      <section id={ANCHORS.HOME}>
        <h1>{HOME.WELCOME}</h1>
        <h2>{`${HOME.I_AM} ${HOME.FULLNAME}`}</h2>
        <h3>{HOME.TITLE}</h3>
        <svg className="home-scroll-down">
          <use href="#chevron-down" />
        </svg>
      </section>
      <AboutMe />
    </>
  )
}

export default Home
