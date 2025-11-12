import '../ProjectPage.css'

export default function SnehamangalyamPage() {
  return (
    <div className="project-detail-page">
      {/* Hero Section */}
      <section className="project-detail-hero">
        <div className="project-detail-hero-overlay">
          <h1 className="project-detail-hero-title">Snehamangalyam</h1>
          <p className="project-detail-hero-subtitle">FIND A NEED AND FILL IT, FIND A HURT AND HEAL IT.</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container project-detail-content-wrapper">
        
        {/* About Section */}
        <section className="project-about-section">
          <div className="section-header">
            <h2 className="section-title">About Snehamangalyam</h2>
          </div>
          
          <div className="project-description">
            <p className="content-paragraph">
              Sneha Mangalyam is a masterpiece project of the Snehakodu family, which was 
              formed with the objective of making the marriage of parents' dreams come to full 
              cap, which has been limited to girls' dreams due to financial constraints.
            </p>
            <p className="content-paragraph">
              This program aims to fulfill the marriage dreams of young women from economically 
              disadvantaged backgrounds. We provide comprehensive support including financial 
              assistance, wedding arrangements, and guidance to ensure that every girl can have 
              a dignified and joyful wedding ceremony.
            </p>
            <p className="content-paragraph">
              Through Snehamangalyam, we believe that financial constraints should never be a 
              barrier to celebrating one of life's most important milestones. We work closely 
              with families to understand their needs and provide support that respects their 
              dignity and cultural traditions.
            </p>
          </div>
        </section>

        {/* Project Gallery Section */}
        <section className="project-gallery-section">
          <div className="gallery-grid-detail">
            <div className="gallery-item-detail">
              <img src="/images/projects/snehakoodu15.jpg" alt="Snehamangalyam ceremony 1" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehanam.jpg" alt="Snehamangalyam ceremony 2" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehapadam.jpg" alt="Snehamangalyam ceremony 3" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehasana.jpg" alt="Snehamangalyam ceremony 4" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehaswanthanam.jpg" alt="Snehamangalyam ceremony 5" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehadisha.jpg" alt="Snehamangalyam ceremony 6" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehakoodu15.jpg" alt="Snehamangalyam ceremony 7" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehanam.jpg" alt="Snehamangalyam ceremony 8" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehapadam.jpg" alt="Snehamangalyam ceremony 9" />
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
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h4>Financial Assistance</h4>
              <p>Comprehensive financial support to cover wedding expenses for deserving families</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h4>Wedding Arrangements</h4>
              <p>Complete support in organizing dignified wedding ceremonies with cultural respect</p>
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
              <h4>Family Support</h4>
              <p>Guidance and counseling for families throughout the wedding planning process</p>
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
