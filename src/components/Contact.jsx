// Contact component: provides email and GitHub links.
function Contact() {
  return (
    // This ID matches the Contact link in the main navigation.
    <section id="contact">
      <h2>Contact</h2>

      <p>
        Feel free to contact me about job opportunities or
        software development projects.
      </p>

      {/* Replace the placeholder in both places with your email address. */}
      <p>
        Email: <a href="mailto:my.name@example.com">my.name@example.com</a>
      </p>

      {/* Link to the GitHub profile containing your repositories. */}
      <p>
        GitHub: <a href="https://github.com/ephraimlex">ephraimlex</a>
      </p>
    </section>
  )
}

// Allow App.jsx to import and display this component.
export default Contact