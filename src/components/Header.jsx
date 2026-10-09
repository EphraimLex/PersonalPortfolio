// Header component: displays the name and main navigation.
function Header() {
  return (
    // The "top" ID is the destination for the back-to-top link.
    <header id="top" className="site-header">
      {/* Clicking the name takes visitors to the introduction section. */}
      <a href="#introduction" className="site-name">
        Personal Portfolio
      </a>

      {/* Give the navigation a descriptive label for screen readers. */}
      <nav aria-label="Main navigation">
        {/* Each link points to a section with a matching ID. */}
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

// Allow other files, such as App.jsx, to import this component.
export default Header