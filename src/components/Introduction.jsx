// Introduction component: presents the portfolio owner and main focus.
function Introduction() {
  return (
    // This ID matches the link on the name in Header.jsx.
    <section id="introduction" className="introduction">
      <h1>Ephraim Zymann</h1>

      {/* Summarise the professional background and current direction. */}
      <p className="subtitle">
        Engineer & Software Developer in training
      </p>

      <p>
        I am an engineer with over twelve years of experience in
        technical analysis. I am currently studying software development,
        focusing on C# and .NET, and building my skills in web development.
      </p>

      {/* Take visitors directly to examples of completed projects. */}
      <a href="#projects" className="button">
        View my projects
      </a>
    </section>
  )
}

// Allow App.jsx to import and display this component.
export default Introduction