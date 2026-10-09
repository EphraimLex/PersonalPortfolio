// Education component: presents current studies and qualifications.
function Education() {
  return (
    // This ID matches the Education link in the main navigation.
    <section id="education">
      <h2>Education</h2>

      {/* Present the current software development training first. */}
      <article>
        <h3>Software Development Training</h3>
        <p>Lexicon, Malmö | 2026–2027</p>
        <p>
          Currently studying software development, focusing on C#,
          .NET, frontend, and backend development.
        </p>
      </article>

      {/* Present the university qualifications and specialisations. */}
      <article>
        <h3>Master of Science in Engineering Physics</h3>
        <p>Lund University | 2004–2010</p>
        <p>Specialisation: Mathematical Physics.</p>
      </article>

      <article>
        <h3>Master of Science in Civil Engineering</h3>
        <p>Chang’an University, China | 1990–1997</p>
        <p>Specialisation: Structural Engineering.</p>
      </article>
    </section>
  )
}

// Allow App.jsx to import and display this component.
export default Education