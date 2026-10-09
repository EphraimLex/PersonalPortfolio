// About component: describes the professional background and studies.
function About() {
  return (
    // This ID matches the About link in the main navigation.
    <section id="about">
      <h2>About Me</h2>

      {/* Present the engineering background and transferable skills. */}
      <p>
        I hold a Master of Science in Engineering Physics and have
        worked for over twelve years as a FEM engineer on projects
        with high safety requirements. My work has involved structural
        analysis, verification of results, and technical reporting.
      </p>

      {/* Explain the current studies and connection to engineering. */}
      <p>
        I am currently studying software development at Lexicon in
        Malmö, focusing on C# and .NET. I enjoy solving problems
        and am building on my engineering experience to develop
        clear, structured, and maintainable software.
      </p>
    </section>
  )
}

// Allow App.jsx to import and display this component.
export default About