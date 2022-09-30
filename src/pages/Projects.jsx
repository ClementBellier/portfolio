import { ANCHORS, PROJECTS } from '../../public/text'

const Project = ({ project }) => {
  return (
    <div className="wrapper" style={{ width: '100%' }}>
      <h3>
        <a href={project.URL}>{project.TITLE}</a>
      </h3>
      <div className="category">{PROJECTS.CATEGORIES[project.CATEGORY]}</div>
      <a href={project.LIVE_URL}>
        <img src={project.IMAGE_URL} />
      </a>
      <div className="container">
        {project.LIVE_URL && (
          <a href={project.LIVE_URL}>
            <div
              style={{
                backgroundColor: 'var(--secondary-color)',
                color: 'var(--nav-text)',
              }}
            >
              {PROJECTS.LIVE_LINK}
            </div>
          </a>
        )}
        {project.CODE_URL && (
          <a href={project.CODE_URL}>
            <div
              style={{
                backgroundColor: 'var(--tertiary-color)',
                color: 'var(--nav-text)',
              }}
            >
              {PROJECTS.CODE_LINK}
            </div>
          </a>
        )}
        {project.DOC_URL && (
          <a href={project.DOC_URL}>
            <div
              style={{
                backgroundColor: 'var(--primary-color)',
                color: 'var(--nav-text)',
              }}
            >
              {PROJECTS.DOC_LINK}
            </div>
          </a>
        )}
      </div>
      <p>
        <strong>{project.SUBTITLE}</strong>
      </p>
      <p>{project.DESCRIPTION}</p>
      <div className="container">
        {project.SKILLS.map(skill => (
          <div style={{ fontSize: 'var(--font-size-p)' }} key={`${project.TITLE}-${skill}`}>
            {PROJECTS.SKILLS_NAMES[skill]}
          </div>
        ))}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id={ANCHORS.PROJECTS}>
      <h2>{PROJECTS.TITLE}</h2>
      {PROJECTS.PROJECTS_TO_DISPLAY.map(project => (
        <Project project={PROJECTS[project]} key={`project-${project}`} />
      ))}
    </section>
  )
}

export default Projects
