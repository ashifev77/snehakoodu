const items = [
  { id:1, title:'Snehakoodu', img:'/images/projects/snehakoodu15.jpg'},
  { id:2, title:'Snehanam', img:'/images/projects/snehanam.jpg'},
  { id:3, title:'Snehapadam', img:'/images/projects/snehapadam.jpg' },
  { id:4, title:'Snehasana', img:'/images/projects/snehasana.jpg' },
  { id:5, title:'Snehaswanthanam', img:'/images/projects/snehaswanthanam.jpg' },
  { id:5, title:'Snehadisha', img:'/images/projects/snehadisha.jpg' }


]

function CauseCard({title,img,percent}){
  return (
    <article className="cause-card">
      <div className="media">
        <img src={img} alt=""/>
      </div>
      <div className="meta">
        <h4>{title}</h4>
        <div className="actions">
          <a className="btn btn-ghost" href="#">Details</a>
        </div>
      </div>
    </article>
  )
}

export default function Causes(){
  return (
    <section className="causes" id="causes">
      <div className="container">
        <div className="section-intro">
          <div className="eyebrow">Lets Start Donating</div>
          <h2 className="headline center">See Your Impact: Transparent Donation Causes</h2>
        </div>
        <div className="cause-grid">
          {items.map(i => <CauseCard key={i.id} {...i} />)}
        </div>
      </div>
    </section>
  )
}


