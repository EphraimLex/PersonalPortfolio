// Experience component: presents relevant professional experience.
function Experience() {
  return (
    // This ID matches the Experience link in the main navigation.
    <section id="experience">
      <h2>Experience</h2>

      {/* Summarise the engineering career and main responsibilities. */}
      <article>
        <h3>FEM Engineer</h3>
        <p>Over twelve years of engineering experience</p>

        <ul>
          <li>
            Performed structural analyses for projects with high
            safety requirements.
          </li>
          <li>
            Verified calculation results and prepared technical reports.
          </li>
          <li>
            Used Python and MATLAB to support engineering calculations
            and data analysis.
          </li>
          <li>
            Collaborated with specialists from different technical
            disciplines.
          </li>
        </ul>
      </article>
    </section>
  )
}

// Allow App.jsx to import and display this component.
export default Experience