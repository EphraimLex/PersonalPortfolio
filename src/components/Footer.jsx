// Footer component: displays copyright information and a navigation link.
function Footer() {
  // Get the current year automatically.
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p>© {currentYear} Ephraim Zymann</p>

      {/* Return to the header, which has id="top". */}
      <a href="#top">Back to top</a>
    </footer>
  )
}

// Allow App.jsx to import and display this component.
export default Footer