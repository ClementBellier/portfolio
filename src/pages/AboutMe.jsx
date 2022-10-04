import { ABOUT_ME, ANCHORS, NAVIGATION } from '../../public/text'

function AboutMe() {
  return (
    <section
      id={ANCHORS.ABOUT_ME}
      className="wrapper"
      style={{ width: '100%', padding: '15px' }}
    >
      <h3>{NAVIGATION.ABOUT_ME}</h3>
      <div className='container'>
        <img
          src="/src/assets/Clément-BELLIER-400.jpg"
          alt="Portrait de Clément BELLIER"
        />
        <p>{ABOUT_ME.ME}</p>
      </div>
    </section>
  )
}

export default AboutMe
