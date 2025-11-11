const posts = [
  {
    id: 1,
    title: 'See Your Impact: Transparent',
    date: 'January 3, 2025',
    category: 'Donations',
    img: 'https://images.unsplash.com/photo-1509099803383-981b45430846?q=80&w=1400&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Every Contribution Counts',
    date: 'January 3, 2025',
    category: 'Education',
    img: 'https://images.unsplash.com/photo-1534755040016-1943f3f5a55f?q=80&w=1400&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Partner for Good: Corporate',
    date: 'January 3, 2025',
    category: 'Help',
    img: 'https://images.unsplash.com/photo-1589927986089-35812388d1ef?q=80&w=1400&auto=format&fit=crop'
  }
]

function PostCard({title, date, category, img}){
  return (
    <article className="news-card">
      <div className="thumb">
        <img src={img} alt=""/>
      </div>
      <div className="news-meta">
        <span className="dot"/>
        <span>{date}</span>
        <span>•</span>
        <span>{category}</span>
      </div>
      <h4 className="news-title">{title}</h4>
    </article>
  )
}

export default function News(){
  return (
    <section className="news">
      <div className="container">
        <div className="section-intro">
          <div className="eyebrow">News & Articles</div>
          <h2 className="headline center">Our Latest News & Articles</h2>
        </div>
        <div className="news-grid">
          {posts.map(p => <PostCard key={p.id} {...p} />)}
        </div>
      </div>
    </section>
  )
}


