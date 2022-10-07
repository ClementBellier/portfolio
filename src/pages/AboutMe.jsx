import { ABOUT_ME, ANCHORS, NAVIGATION } from '../../public/text'

function AboutMe() {
  return (
    <section id={ANCHORS.ABOUT_ME}>
      <h2>{NAVIGATION.ABOUT_ME}</h2>
      <div className="wrapper aboutMe">
        <div className="container">
          <img
            src="/src/assets/Clément-BELLIER-400.jpg"
            alt="Portrait de Clément BELLIER"
          />
          <p>{ABOUT_ME.ME}</p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
