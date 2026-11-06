import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'
import Skills from './components/Skills'
import Contact from './components/Contact'
import SpectralDrape from './components/SpectralDrape'
import BackToTop from './components/BackToTop'
import { useReveal } from './useReveal'

export default function App() {
  useReveal()
  return (
    <>
      <a href="#works" className="skip-link">跳到作品内容</a>
      <SpectralDrape />
      <Nav />
      <Hero />
      <main>
        <About />
        <Works />
        <Skills />
        <Contact />
      </main>
      <BackToTop />
    </>
  )
}
