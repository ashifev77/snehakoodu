import '../ProjectPage.css'

export default function SnehadishaPage() {
  return (
    <div className="project-detail-page">
      <section className="project-detail-hero">
        <div className="project-detail-hero-overlay">
          <h1 className="project-detail-hero-title">Snehadisha</h1>
          <p className="project-detail-hero-subtitle">FIND A NEED AND FILL IT, FIND A HURT AND HEAL IT.</p>
        </div>
      </section>

      <div className="container project-detail-content-wrapper">
        <section className="project-about-section">
          <div className="section-header">
            <h2 className="section-title">About Snehadisha</h2>
          </div>
          <div className="project-description">
            <p className="content-paragraph">
              Children do not know the plight of their parents when they see children. They 
              see the parents, taking the freedom of parents they have treated and children 
              grow up in every home. They are taken, regardless we want us other dependent 
              parents must come, may benefit from our family in golden years in the light 
              of hope.
            </p>
            <p className="content-paragraph">
              Our counseling was provided to parents and their relatives was some 
              accompanied so that children and two aged old was provided also of course with 
              the help of expert device to our counselors, advice. Snehadisha with children's 
              advice to parents as individuals, and to know the will and they provide 
              proper care.
            </p>
          </div>
        </section>

        <section className="project-gallery-section">
          <div className="gallery-grid-detail">
            <div className="gallery-item-detail">
              <img src="/images/projects/snehadisha.jpg" alt="Snehadisha counseling" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehakoodu15.jpg" alt="Snehadisha support" />
            </div>
            <div className="gallery-item-detail">
              <img src="/images/projects/snehanam.jpg" alt="Snehadisha guidance" />
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
