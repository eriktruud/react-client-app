import './Page.css'

function About() {
  return (
    <section className="page">
      <div className="content-box">
        <h1>About This App</h1>
        <p>
          This React application is built with modern tools and best practices:
        </p>
        <ul>
          <li><strong>React 18</strong> - Latest React features and improvements</li>
          <li><strong>Vite</strong> - Fast build tool and dev server</li>
          <li><strong>React Router</strong> - Client-side routing for navigation</li>
        </ul>
        <h2>Features</h2>
        <ul>
          <li>Multi-page navigation</li>
          <li>Responsive design</li>
          <li>Modern styling with CSS</li>
          <li>Ready for component expansion</li>
        </ul>
        <p>
          You can extend this application by adding more pages, state management,
          API integrations, and custom components.
        </p>
      </div>
    </section>
  )
}

export default About
