// Skills component: groups skills by area.
function Skills() {
  return (
    // This ID matches the Skills link in the main navigation.
    <section id="skills">
      <h2>Skills</h2>

      {/* Group the skill categories for a responsive grid layout. */}
      <div className="skills-grid">
        <div>
          <h3>Software Development</h3>
          <ul>
            <li>C# and .NET</li>
            <li>Object-oriented programming</li>
            <li>Git and GitHub</li>
            <li>SQL fundamentals</li>
          </ul>
        </div>

        <div>
          <h3>Web Development</h3>
          <ul>
            <li>HTML and CSS</li>
            <li>Responsive web design</li>
            <li>JavaScript — currently learning</li>
            <li>React — currently learning</li>
          </ul>
        </div>

        <div>
          <h3>Engineering and Analysis</h3>
          <ul>
            <li>Python and MATLAB</li>
            <li>Finite element analysis (FEM)</li>
            <li>Verification and validation</li>
            <li>Technical reporting</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

// Allow App.jsx to import and display this component.
export default Skills