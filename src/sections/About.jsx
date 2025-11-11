export default function About(){
  return (
    <section className="about container" id="about">
      <div className="about-grid">
        <div className="about-media">
          <div className="photo-frame">
            <img src="/images/about/about-collage.jpg" alt="Volunteer sharing a meal and embracing an elder" loading="lazy"/>
            <span className="corner"/>
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">About Us</p>
          <h2 className="headline">Our Core Value. <br/>
          Our Foundation.</h2>
          <p className="lede">Snehakkodu Abhayamandiram, A Secular Joint Family Structured Organization. The main motive of ours is to Protect the Orphans, Dependent Old Age People, and to rehabilitate them with families, and provide them with all possible Legal Protection. We also care to provide them with True Mental Support for leading a better life.</p>
          <a className="btn btn-ghost" href="#">About More</a>
        </div>
      </div>
    </section>
  )
}


