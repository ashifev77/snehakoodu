import '../ProjectPage.css'

export default function SnehanamPage() {
  return (
    <div className="project-detail-page">
      {/* Hero Section */}
      <section className="project-detail-hero">
        <div className="project-detail-hero-overlay">
          <h1 className="project-detail-hero-title">Snehanam</h1>
          <p className="project-detail-hero-subtitle">FIND A NEED AND FILL IT, FIND A HURT AND HEAL IT.</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container project-detail-content-wrapper">
        
        {/* About Section */}
        <section className="project-about-section">
          <div className="section-header">
            <h2 className="section-title">About Snehanam</h2>
          </div>
          
          <div className="project-description">
            <p className="content-paragraph">
              Snehakoodu's family's plan is to provide loans to Avoid sickness and their 
              youngsters who are admitted to Kottayam General Hospital every day, due to 
              the lack of food and accommodation for them. Snehanam is the name of the 
              inn in need of Kottayam which was assumed within food, and in addition a 
              government officers, Snehanam is a state Ayurveda department is at four bed 
              patient's inpatient is part of the project.
            </p>
          </div>
        </section>

        {/* Impact Section */}
        <section className="project-impact-section">
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-image">
                <img src="/images/projects/snehanam.jpg" alt="More People More Impact" />
              </div>
              <div className="impact-content">
                <h3>More People More Impact</h3>
                <p>
                  Charity law within the UK varies among England and Wales, 
                  Scotland and Northern Ireland, but the fundamental principles are 
                  the same. Most organizations.
                </p>
              </div>
            </div>

            <div className="impact-card">
              <div className="impact-image">
                <img src="/images/projects/snehapadam.jpg" alt="Children International" />
              </div>
              <div className="impact-content">
                <h3>Children International charity ratings</h3>
                <p>
                  Charity International has all other charity 
                  support and serves. You send any business 
                  interest so that international principles are 
                  the same. Most organizations.
                </p>
                <a href="#" className="read-more-link">READ MORE →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="project-features-section">
          <h3 className="features-title">Our Services</h3>
          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h4>Accommodation</h4>
              <p>Free lodging facilities for patients' families near Kottayam General Hospital</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                  <line x1="6" y1="1" x2="6" y2="4"/>
                  <line x1="10" y1="1" x2="10" y2="4"/>
                  <line x1="14" y1="1" x2="14" y2="4"/>
                </svg>
              </div>
              <h4>Food Support</h4>
              <p>Nutritious meals provided to patients and their families during hospital stays</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h4>Medical Care</h4>
              <p>Partnership with State Ayurveda Department for inpatient care services</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="project-cta-section">
          <div className="cta-box">
            <h2 className="cta-title">Want to get involved?</h2>
            <p className="cta-text">
              Pre-book donation to a charitable organization's online become counter charity 
              and to contribute to a charity.
            </p>
            <a href="#contact" className="btn btn-primary">Become a Volunteer</a>
          </div>
        </section>

      </div>
    </div>
  )
}
