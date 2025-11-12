import '../ProjectPage.css'

export default function SnehasanthwanamPage() {
  return (
    <div className="project-detail-page">
      <section className="project-detail-hero">
        <div className="project-detail-hero-overlay">
          <h1 className="project-detail-hero-title">Snehasanthwanam</h1>
          <p className="project-detail-hero-subtitle">FIND A NEED AND FILL IT, FIND A HURT AND HEAL IT.</p>
        </div>
      </section>

      <div className="container project-detail-content-wrapper">
        <section className="project-about-section">
          <div className="section-header">
            <h2 className="section-title">About Snehasanthanam</h2>
          </div>
          <div className="project-description">
            <p className="content-paragraph">
              Aid for the treatment of patients and their survivors of all medicines, dialysis and 
              seeking medicines for the children to illustrate their visit the time project has 
              benefited more many times functions especially including those provided by 
              kidney cases, eye vision etc. Assistance is being provided to needy patients of 
              Kottayam Medical College and Specialists.
            </p>
          </div>
        </section>

        <section className="project-gallery-section">
          <div className="gallery-grid-detail">
            <div className="gallery-item-detail">
              <img src="/images/projects/snehaswanthanam.jpg" alt="Snehasanthwanam rehabilitation" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehakoodu15.jpg" alt="Snehasanthwanam support" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehanam.jpg" alt="Snehasanthwanam care" />
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
