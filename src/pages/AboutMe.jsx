import { ABOUT_ME, ANCHORS, NAVIGATION } from '../../public/text'

function AboutMe() {
  return (
    <section id={ANCHORS.ABOUT_ME}>
      <img
        src="/src/assets/Clément-BELLIER-400.jpg"
        alt="Portrait de Clément BELLIER"
      />
      <div className="text"></div>
      <h2>{NAVIGATION.ABOUT_ME}</h2>
      <p>{ABOUT_ME.ME}</p>
    </section>
  )
}

export default AboutMe
