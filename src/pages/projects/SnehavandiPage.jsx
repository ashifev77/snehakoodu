import '../ProjectPage.css'

export default function SnehavandiPage() {
  return (
    <div className="project-detail-page">
      {/* Hero Section */}
      <section className="project-detail-hero">
        <div className="project-detail-hero-overlay">
          <h1 className="project-detail-hero-title">Snehavandi</h1>
          <p className="project-detail-hero-subtitle">FIND A NEED AND FILL IT, FIND A HURT AND HEAL IT.</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container project-detail-content-wrapper">
        
        {/* About Section */}
        <section className="project-about-section">
          <div className="section-header">
            <h2 className="section-title">About Snehavandi</h2>
          </div>
          
          <div className="project-description">
            <p className="content-paragraph">
              If of Nehruji, Snehavandi is a multi-purpose vehicle. It is that mobile family that 
              provides free assistance or needy conveniences to get to the hospital or to other 
              homes, use it for other awareness purpose of need and to organize awareness for events 
              like the women's cultural and other organizations.
            </p>
          </div>
        </section>

        {/* Project Gallery Section */}
        <section className="project-gallery-section">
          <div className="gallery-grid-detail">
            <div className="gallery-item-detail">
              <img src="/images/projects/snehakoodu15.jpg" alt="Snehavandi service 1" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehanam.jpg" alt="Snehavandi service 2" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehapadam.jpg" alt="Snehavandi service 3" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehasana.jpg" alt="Snehavandi service 4" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehaswanthanam.jpg" alt="Snehavandi service 5" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehadisha.jpg" alt="Snehavandi service 6" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehakoodu15.jpg" alt="Snehavandi service 7" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehanam.jpg" alt="Snehavandi service 8" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehapadam.jpg" alt="Snehavandi service 9" />
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="project-features-section">
          <h3 className="features-title">Key Services</h3>
          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 17H7A5 5 0 0 1 7 7h2"/>
                  <path d="M15 7h2a5 5 0 1 1 0 10h-2"/>
                  <line x1="8" y1="12" x2="16" y2="12"/>
                </svg>
              </div>
              <h4>Free Transportation</h4>
              <p>Providing free vehicle assistance to needy families for hospital visits and essential travel</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h4>Medical Support</h4>
              <p>Emergency medical transportation services available 24/7 for residents and community members</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h4>Community Outreach</h4>
              <p>Mobile platform for awareness programs and cultural events in the community</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="project-cta-section">
          <div className="cta-box">
            <h2 className="cta-title">Want to get involved?</h2>
            <p className="cta-text">
              Interested to become part of <strong>Snehakoodu Abhayamandiram?</strong>
            </p>
            <p className="cta-subtext">Feel free to contact us!</p>
            <a href="#contact" className="btn btn-primary">Become a Volunteer</a>
          </div>
        </section>

      </div>
    </div>
  )
}
