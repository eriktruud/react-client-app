import { Link } from 'react-router-dom'
import './Page.css'

function Home() {
  return (
    <section className="page">
      <div className="hero">
        <p className="eyebrow">Welcome</p>
        <h1>React Router Setup Complete</h1>
        <p className="intro">
          Your application now has client-side routing with React Router.
          Navigate between pages using the menu above.
        </p>
        <div className="button-group">
          <Link to="/about" className="button button-primary">Learn More</Link>
          <Link to="/contact" className="button button-secondary">Get in Touch</Link>
        </div>
      </div>
    </section>
  )
}

export default Home
