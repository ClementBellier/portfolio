import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Projects from './pages/Projects'
import CssChallenge from './pages/CssChallenge'
import Contact from './pages/Contact'
import Skills from './pages/Skills'

function App() {
  return (
    <>
      <Nav />
      <main className="content">
        <Home />
        <Skills />
        <Projects />
        <CssChallenge />
        <Contact />
      </main>
    </>
  )
}

export default App
