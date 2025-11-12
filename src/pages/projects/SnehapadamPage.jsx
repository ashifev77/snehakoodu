import '../ProjectPage.css'

export default function SnehapadamPage() {
  return (
    <div className="project-detail-page">
      <section className="project-detail-hero">
        <div className="project-detail-hero-overlay">
          <h1 className="project-detail-hero-title">Snehapadam</h1>
          <p className="project-detail-hero-subtitle">FIND A NEED AND FILL IT, FIND A HURT AND HEAL IT.</p>
        </div>
      </section>

      <div className="container project-detail-content-wrapper">
        <section className="project-about-section">
          <div className="section-header">
            <h2 className="section-title">About Snehapadam</h2>
          </div>
          <div className="project-description">
            <p className="content-paragraph">
              Every year more than 100 children whose parents have died and are in are 
              benefiting from the scheme. In the poor economic year, the children are given 
              the opportunity to continue their studies with the with school bags, umbrella, 
              with books and learning materials, under the classroom scheme.
            </p>
          </div>
        </section>

        {/* Snehakoodu Snehapadam 2022 Section */}
        <section className="project-event-section">
          <div className="event-header">
            <h3 className="event-title">Snehakoodu Snehapadam 2022</h3>
            <p className="event-description">
              We are of happy that Snehakoodu have successfully delivered School kits for 
              more than 100 in the list for the children (1) to the students.
            </p>
          </div>
        </section>

        <section className="project-gallery-section">
          <div className="gallery-grid-detail">
            <div className="gallery-item-detail">
              <img src="/images/projects/snehapadam.jpg" alt="Snehapadam education" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehakoodu15.jpg" alt="Snehapadam learning" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehanam.jpg" alt="Snehapadam skills" />
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
