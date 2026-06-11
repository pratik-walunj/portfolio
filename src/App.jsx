import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Competitive from './components/sections/Competitive'
import Education from './components/sections/Education'
import Achievements from './components/sections/Achievements'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import SectionDivider from './components/ui/SectionDivider'
import CustomCursor from './components/ui/CustomCursor'

export default function App() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Competitive />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
