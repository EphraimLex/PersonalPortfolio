// Import all the components used on the portfolio page.
import Header from './components/Header.jsx'
import Introduction from './components/Introduction.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

// Import the stylesheet for the portfolio layout.
import './App.css'

// Main component that brings the portfolio sections together.
function App() {
  return (
    <>
      {/* Display the portfolio title and main navigation. */}
      <Header />

      {/* Group the main content of the page. */}
      <main>
        <Introduction />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Display copyright information and the back-to-top link. */}
      <Footer />
    </>
  )
}

// Allow main.jsx to import and render this component.
export default App