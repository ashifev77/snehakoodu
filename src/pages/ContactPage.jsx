import './ContactPage.css'

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-subtitle">Get in touch</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-cards">
        <div className="container">
          <div className="contact-cards-grid">
            {/* Phone Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3>Phone</h3>
              <p>Always feel free to call us if you<br/>have any questions or concerns<br/>about our services.</p>
              <div className="contact-details">
                <a href="tel:04812301555">0481-2301555</a><br/>
                <a href="tel:9605757179">9605757179</a><br/>
                <a href="tel:7012427454">7012427454</a>
              </div>
            </div>

            {/* Email Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="M22 6l-10 7L2 6"/>
                </svg>
              </div>
              <h3>Email</h3>
              <p>Feel free to write to us</p>
              <div className="contact-details">
                <a href="mailto:info@snehakoodu.org">info@snehakoodu.org</a>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>Location</h3>
              <p>YWCA Lane, Baker Junction,<br/>Kottayam<br/>Kerala</p>
              <div className="contact-details">
                <a href="#map">View on Google Maps</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-header">
              <h2>Leave us your info</h2>
              <p>and we will get back to you</p>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Name*" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email*" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Message*" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">Send</button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section" id="map">
        <div className="map-container">
          <div className="map-overlay">
            <div className="map-info-box">
              <h4>Snehakoodu Abhayamandiram | Old Age Home Kottayam</h4>
              <p>Snehakoodu Abhayamandiram,<br/>kollad boat jetti kavala,<br/>Kottayam, Kerala 686004</p>
              <div className="map-rating">
                <span className="rating-stars">★★★★★</span>
                <span className="rating-score">5.0</span>
              </div>
              <p className="map-reviews">4,185 reviews</p>
              <a href="https://www.google.com/maps/dir//Snehakoodu+Abhayamandiram+%7C+Old+Age+Home+Kottayam+Snehakoodu+Abhayamandiram,kollad+boat+jetti+kavala+Kottayam,+Kerala+686004/@9.5643514,76.5491697" target="_blank" rel="noopener noreferrer" className="map-directions">Directions</a>
              <a href="https://www.google.com/maps/place/Snehakoodu+Abhayamandiram+%7C+Old+Age+Home+Kottayam/@9.5643514,76.5491697,17z" target="_blank" rel="noopener noreferrer" className="map-larger">View larger map</a>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d7868.716557806964!2d76.5491697!3d9.5643514!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3b062b6c56f6bd93%3A0x9d28df39e3345d27!2sSnehakoodu%20Abhayamandiram%20%7C%20Old%20Age%20Home%20Kottayam%20Snehakoodu%20Abhayamandiram%2Ckollad%20boat%20jetti%20kavala%20Kottayam%2C%20Kerala%20686004!3m2!1d9.5643514!2d76.5491697!5e0!3m2!1sen!2sin!4v1762881524585!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Snehakoodu Abhayamandiram Location"
          ></iframe>
          <div className="map-caption">
            <p>Use our e-mail above the map</p>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="social-section">
        <div className="container">
          <div className="social-links-row">
            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Google">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
