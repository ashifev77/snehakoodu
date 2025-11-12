import '../ProjectPage.css'

export default function SnehasenaPage() {
  return (
    <div className="project-detail-page">
      <section className="project-detail-hero">
        <div className="project-detail-hero-overlay">
          <h1 className="project-detail-hero-title">Snehasena</h1>
          <p className="project-detail-hero-subtitle">FIND A NEED AND FILL IT, FIND A HURT AND HEAL IT.</p>
        </div>
      </section>

      <div className="container project-detail-content-wrapper">
        <section className="project-about-section">
          <div className="section-header">
            <h2 className="section-title">About Snehasena</h2>
          </div>
          <div className="project-description">
            <p className="content-paragraph">
              Snehakkoodu Snehakkoodu is a 24 year old of several people made a strong 
              based caring out the leading and other charitable activities in times the Covid 19 
              Incidence, even though. Over 400 lunch packs are being distributed daily in the 
              coast area of Kottayam District Hospital. The final primary weapon by Sneha 
              Sena's perseverance was appreciating 100 days.
            </p>
          </div>
        </section>

        <section className="project-gallery-section">
          <div className="gallery-grid-detail">
            <div className="gallery-item-detail">
              <img src="/images/projects/snehasana.jpg" alt="Snehasena service" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehakoodu15.jpg" alt="Snehasena outreach" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehanam.jpg" alt="Snehasena community" />
            </div>
          </div>
        </section>

        <section className="project-cta-section">
          <div className="cta-box">
            <h2 className="cta-title">Want to get involved?</h2>
            <p className="cta-text">Interested to become part of <strong>Snehakoodu Abhayamandiram?</strong></p>
            <p className="cta-subtext">Feel free to contact us!</p>
            <a href="#contact" className="btn btn-primary">Become a Volunteer</a>
          </div>
        </section>
      </div>
    </div>
  )
}
