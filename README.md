# Personal Portfolio

A responsive, single-page portfolio built with React and Vite.
It presents my software development studies, engineering background,
skills, and projects.

This training project builds on my earlier Modern CV website,
introducing React components and data-driven project cards.

## Technologies

- React and JavaScript
- HTML through JSX
- CSS with Flexbox, Grid, and media queries
- Vite for development and production builds

## Features

- Introduction, About, Skills, Projects, Experience, Education,
  and Contact sections
- Navigation links to each section
- Project cards with GitHub and live website links where available
- Responsive layouts for desktop, tablet, and mobile
- Visible keyboard focus outlines
- Footer with an automatic copyright year and a back-to-top link

## Featured Projects

- Inventory Management System
- Asset Tracking
- Modern CV
- Nordic Brew

## Project Structure

```text
src/
  components/
    Header.jsx
    Introduction.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Experience.jsx
    Education.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
  App.css
  index.css
  main.jsx
index.html
```

## How React Is Used

Each main section is defined in its own component. App.jsx imports
these components and combines them into the portfolio page.

Projects.jsx stores project details in an array. JavaScript's map()
method turns each entry into a project card. Conditional rendering
displays repository and website links only when their URLs are provided.

Footer.jsx uses JavaScript to display the current year automatically.

HTML and CSS alone could provide the layout and navigation, but project
cards would need to be written individually and the year updated manually.
React provides a component-based structure for organising and extending
the website.

## Scalability and Extensibility

Separating the page into components supports separation of concerns
and makes individual sections easier to maintain.

New projects can be added to the projects array without duplicating
the card layout. New sections can be created as components and added
to App.jsx.

Shared colours are defined as CSS variables in index.css, while
App.css contains the portfolio layout and responsive styles.

## Run Locally

Run these commands from the project folder containing package.json.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

## Production Build

Create the production files:

```bash
npm run build
```

The generated files are placed in the dist folder.

Preview the production build locally:

```bash
npm run preview
```

## Checks Completed

- Reviewed layouts at mobile, tablet, and desktop widths
- Checked navigation and project links
- Checked forward and backward keyboard navigation in the main menu
- Successfully built the production version
- Reviewed the production preview in the browser

## Contact

The email address my.name@example.com is a placeholder used for
this training project.

GitHub: https://github.com/EphraimLex

## Author

Ephraim Zymann