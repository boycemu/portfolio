import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Categories from './components/Categories'
import Works from './components/Works'
import Skills from './components/Skills'
import Contact from './components/Contact'
import SpectralDrape from './components/SpectralDrape'
import CustomCursor from './components/CustomCursor'
import { useReveal } from './useReveal'

export default function App() {
  useReveal()
  return (
    <>
      <SpectralDrape />
      <CustomCursor />
      <Nav />
      <Hero />
      <About />
      <Categories />
      <Works />
      <Skills />
      <Contact />
    </>
  )
}
