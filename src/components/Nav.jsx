import { useEffect, useState } from 'react'
import { ANCHORS, NAVIGATION } from '../../public/text'

const MenuItem = ({ itemName, active }) => {
  const [anchorTarget, setAnchorTarget] = useState(null)
  const anchorName = ANCHORS[itemName]
  const navigationName = NAVIGATION[itemName]
  useEffect(() => {
    setAnchorTarget(document.getElementById(anchorName))
  }, [itemName])
  const handleClick = e => {
    e.preventDefault()
    anchorTarget.scrollIntoView({ behavior: 'smooth' })
  }
  //console.log(itemName, active)
  return (
    <li className={active}>
      <a
        href={`#${anchorName}`}
        onClick={handleClick}
        aria-label={`${NAVIGATION.SCROLL_TO} ${navigationName}`}
      >
        {navigationName}
      </a>
    </li>
  )
}
let menuItems = {
  HOME: 0,
  SKILLS: null,
  PROJECTS: null,
  CSS_CHALLENGE: null,
  CONTACT: null,
}
function Nav() {
  const [activeItem, setActiveItem] = useState('Top')
  const handleScroll = () => {
    const currentPosition = document.querySelector('main').scrollTop
    let currentSection = null
    for (const section of Object.keys(menuItems)) {
      currentSection =
        currentPosition >= menuItems[section] ? section : currentSection
      if (currentSection !== section) break
    }
    if (currentSection !== activeItem) {
      setActiveItem(currentSection)
    }
  }
  const getAnchorPoints = () => {
    const currentScroll = document.querySelector('main').scrollTop - 140
    for (const key in menuItems) {
      const position =
        document.getElementById(ANCHORS[key]).getBoundingClientRect().top +
        currentScroll
      menuItems[key] = position > 0 ? position : 0
    }
    handleScroll()
  }

  useEffect(() => {
    const observer = new MutationObserver(getAnchorPoints)
    observer.observe(document.querySelector('main'), {
      childList: true,
      subtree: true,
    })
    document.querySelector('main').addEventListener('scroll', handleScroll)
    getAnchorPoints()
  }, [])

  const menuList = Object.keys(menuItems).map((e, i) => {
    return (
      <MenuItem
        itemName={e}
        key={`menuitem_${i}`}
        active={e === activeItem ? 'active-link' : undefined}
      />
    )
  })
  return (
    <nav>
      <ul>{menuList}</ul>
    </nav>
  )
}

export default Nav
