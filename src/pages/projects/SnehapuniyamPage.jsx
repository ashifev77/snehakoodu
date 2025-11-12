import '../ProjectPage.css'

export default function SnehapuniyamPage() {
  return (
    <div className="project-detail-page">
      {/* Hero Section */}
      <section className="project-detail-hero">
        <div className="project-detail-hero-overlay">
          <h1 className="project-detail-hero-title">Snehapuniyam</h1>
          <p className="project-detail-hero-subtitle">FIND A NEED AND FILL IT, FIND A HURT AND HEAL IT.</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container project-detail-content-wrapper">
        
        {/* About Section */}
        <section className="project-about-section">
          <div className="section-header">
            <h2 className="section-title">About Snehapuniyam</h2>
          </div>
          
          <div className="project-description">
            <p className="content-paragraph">
              Dhaan is a guideline in order, who is deprived out of school building, through law 
              of the land, the children who are unable to continue their education, who are unable 
              to be not being able to pay fees fees due to the financial constraints, 
              who are in the digital equipment for the students who have to become a victim 
              help of well-wishers. Every year more than 100 children whose parents have 
              died and are in are benefiting from the scheme. In the poor economic year, 
              the children are given the opportunity to continue their studies with the 
              with school bags, umbrella, with books and learning materials, under the 
              classroom scheme.
            </p>
            <p className="content-paragraph">
              This program ensures that no child is denied education due to financial constraints. 
              We provide comprehensive support including school fees, uniforms, books, bags, 
              umbrellas, and digital equipment. Our focus is on children who have lost parents 
              or come from economically disadvantaged backgrounds, giving them the opportunity 
              to continue their studies and build a better future.
            </p>
          </div>
        </section>

        {/* Project Gallery Section */}
        <section className="project-gallery-section">
          <div className="gallery-grid-detail">
            <div className="gallery-item-detail">
              <img src="/images/projects/snehakoodu15.jpg" alt="Snehapuniyam education support 1" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehanam.jpg" alt="Snehapuniyam education support 2" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehapadam.jpg" alt="Snehapuniyam education support 3" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehasana.jpg" alt="Snehapuniyam education support 4" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehaswanthanam.jpg" alt="Snehapuniyam education support 5" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehadisha.jpg" alt="Snehapuniyam education support 6" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehakoodu15.jpg" alt="Snehapuniyam education support 7" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehanam.jpg" alt="Snehapuniyam education support 8" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehapadam.jpg" alt="Snehapuniyam education support 9" />
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="project-features-section">
          <h3 className="features-title">What We Provide</h3>
          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <h4>Educational Materials</h4>
              <p>School bags, books, umbrellas, and all necessary learning materials for students</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <h4>Digital Equipment</h4>
              <p>Providing digital devices and equipment to support modern education needs</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h4>Fee Support</h4>
              <p>Financial assistance for school fees to ensure uninterrupted education</p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="impact-stats-section">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Children Supported Annually</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Educational Materials Distributed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Continuation Rate</div>
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
