import { ANCHORS, PROJECTS } from '../../public/text'

const Project = ({ project }) => {
  let categoryColor = '--tertiary-color'
  if (project.CATEGORY === 1) categoryColor = '--secondary-color'
  if (project.CATEGORY === 2) categoryColor = '--primary-color'
  return (
    <div className="wrapper" style={{ width: '100%' }}>
      <h3>
        <a href={project.URL}>{project.TITLE}</a>
      </h3>
      <div
        className="category"
        style={{ backgroundColor: `var(${categoryColor})` }}
      >
        {PROJECTS.CATEGORIES[project.CATEGORY]}
      </div>
      <a href={project.LIVE_URL}>
        <img
          src={project.IMAGE_URL}
          alt={`${PROJECTS.IMG_LINK_ALT_TXT}${project.TITLE}`}
        />
      </a>
      <div className="container">
        {project.LIVE_URL && (
          <a
            href={project.LIVE_URL}
            aria-label={`${PROJECTS.ARIA_LABEL_LINK}${project.TITLE}`}
          >
            <div
              className="project-url"
              style={{
                backgroundColor: 'var(--secondary-color)',
                color: 'var(--nav-text)',
              }}
            >
              <svg>
                <use href="#external-link" />
              </svg>
              {PROJECTS.LIVE_LINK}
            </div>
          </a>
        )}
        {project.CODE_URL && (
          <a href={project.CODE_URL}>
            <div
              className="project-url"
              style={{
                backgroundColor: 'var(--tertiary-color)',
                color: 'var(--nav-text)',
              }}
            >
              <svg>
                <use href="#external-link" />
              </svg>
              {PROJECTS.CODE_LINK}
            </div>
          </a>
        )}
        {project.DOC_URL && (
          <a href={project.DOC_URL}>
            <div
              className="project-url"
              style={{
                backgroundColor: 'var(--primary-color)',
                color: 'var(--nav-text)',
              }}
            >
              <svg>
                <use href="#external-link" />
              </svg>
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
          <div
            style={{ fontSize: 'var(--font-size-p)' }}
            key={`${project.TITLE}-${skill}`}
          >
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
      <div className='empty-for-scroll'></div>
    </section>
  )
}

export default Projects
