function Card({title, text}){
  return (
    <div className="cta-card">
      <div className="cta-overlay"/>
      <div className="cta-content">
        <h3>{title}</h3>
        <p>{text}</p>
        <a className="btn btn-primary" href="#">Learn More</a>
      </div>
    </div>
  )
}

export default function VolunteerCTAs(){
  const copy = 'Provide resources such as reports, infographics, and educational materials related to the charity\'s causes. Use a clear and intuitive navigation menu to help users find information quickly.'
  return (
    <section className="vol-ctas container">
      <div className="vol-grid">
        <Card title="Become a volunteer" text={copy} />
        <Card title="Join Us volunteer" text={copy} />
      </div>
    </section>
  )
}


