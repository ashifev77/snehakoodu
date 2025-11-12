import '../ProjectPage.css'

export default function SnehaveeduPage() {
  return (
    <div className="project-detail-page">
      {/* Hero Section */}
      <section className="project-detail-hero">
        <div className="project-detail-hero-overlay">
          <h1 className="project-detail-hero-title">Snehaveedu</h1>
          <p className="project-detail-hero-subtitle">FIND A NEED AND FILL IT, FIND A HURT AND HEAL IT.</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container project-detail-content-wrapper">
        
        {/* About Section */}
        <section className="project-about-section">
          <div className="section-header">
            <h2 className="section-title">About Snehaveedu</h2>
          </div>
          
          <div className="project-description">
            <p className="content-paragraph">
              We see all children of God, there are some unfortunate people who are homeless or live 
              by some who have been given the gift to have care of them, but owing name to use 
              something less God has condolences.
            </p>
            <p className="content-paragraph">
              Houses of love. To share is the Divine path again. There is still a long way to go to 
              reach the goal of the organization. The organization aims to provide a safe home to them, 
              the relevance of Snehaveedu is increasing today. God has also planned to get individuals 
              now house how from one to seven God given love homes have been given to us by different people.
            </p>
            <p className="content-paragraph">
              Snehaveedu has the aim to construct of this style home for the homeless and homeless people. 
              For the will six years, Snehaveedu has been implementing the project with the objective of 
              providing housing to the needy and obviously, in people who have no place to live despite 
              having their own land, irrespective of caste or creed. So far seven houses have been allotted 
              under Snehaveedu's scheme.
            </p>
          </div>
        </section>

        {/* Project Gallery Section */}
        <section className="project-gallery-section">
          <div className="gallery-grid-detail">
            <div className="gallery-item-detail">
              <img src="/images/projects/snehakoodu15.jpg" alt="Snehaveedu house 1" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehanam.jpg" alt="Snehaveedu house 2" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehapadam.jpg" alt="Snehaveedu house 3" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehasana.jpg" alt="Snehaveedu house 4" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehaswanthanam.jpg" alt="Snehaveedu house 5" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehadisha.jpg" alt="Snehaveedu house 6" />
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="project-features-section">
          <h3 className="features-title">Program Highlights</h3>
          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h4>Permanent Housing</h4>
              <p>Building complete homes for families who have land but lack resources to construct</p>
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
              <h4>Inclusive Approach</h4>
              <p>Serving people irrespective of caste, creed, or religion with dignity and respect</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h4>Community Support</h4>
              <p>Built with love and support from generous donors and well-wishers</p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="impact-stats-section">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">7</div>
              <div className="stat-label">Houses Constructed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6+</div>
              <div className="stat-label">Years of Service</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">35+</div>
              <div className="stat-label">Lives Transformed</div>
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
