import { ANCHORS, SKILLS } from '../../public/text'

function Skill({ categorie }) {
  return (
    <div className="wrapper">
      <h3>{categorie.TITLE}</h3>
      <div className="container">
        {categorie.SKILL.map(skill => (
          <div key={`skill-${skill.NAME}`}>
            {skill.SVG && (
              <svg>
                <use href={skill.SVG} key={skill.NAME} />
              </svg>
            )}
            <p>{skill.NAME}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section id={ANCHORS.SKILLS}>
      <h2>{SKILLS.TITLE}</h2>
      <Skill categorie={SKILLS.LOVE} />
      <Skill categorie={SKILLS.HARD_SKILLS} />
      <Skill categorie={SKILLS.SENSITIZED} />
      <Skill categorie={SKILLS.SOFT_SKILLS} />
      <Skill categorie={SKILLS.LEARNING} />
      <div className='empty-for-scroll'></div>
    </section>
  )
}

export default Skills
