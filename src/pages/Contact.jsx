import './Page.css'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted! (This is a demo - no data is being sent)')
  }

  return (
    <section className="page">
      <div className="content-box">
        <h1>Contact Us</h1>
        <p>Have questions or feedback? Fill out the form below.</p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Your message here..."
              rows="5"
              required
            ></textarea>
          </div>
          
          <button type="submit" className="button button-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
