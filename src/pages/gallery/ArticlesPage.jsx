import { useState } from 'react'
import '../GalleryPage.css'

export default function ArticlesPage() {
  const [selectedArticle, setSelectedArticle] = useState(null)
  
  const articles = [
    { id: 1, title: 'Snehakoodu Abhayamandiram Featured in Daily News', date: 'March 15, 2024', source: 'Daily News', image: '/images/articles/article1.jpg' },
    { id: 2, title: 'Community Service Excellence Award Coverage', date: 'March 10, 2024', source: 'Regional Times', image: '/images/articles/article2.jpg' },
    { id: 3, title: 'COVID Relief Efforts Recognized', date: 'February 28, 2024', source: 'Health Today', image: '/images/articles/article3.jpg' },
    { id: 4, title: 'Children Education Program Launch', date: 'February 20, 2024', source: 'Education Weekly', image: '/images/articles/article4.jpg' },
    { id: 5, title: 'Elder Care Facility Expansion', date: 'February 15, 2024', source: 'Senior Living', image: '/images/articles/article5.jpg' },
    { id: 6, title: 'Flood Relief Operations Coverage', date: 'January 30, 2024', source: 'Disaster Relief News', image: '/images/articles/article6.jpg' },
    { id: 7, title: 'Medical Camp Success Story', date: 'January 25, 2024', source: 'Healthcare Journal', image: '/images/articles/article7.jpg' },
    { id: 8, title: 'Volunteer Training Program Feature', date: 'January 20, 2024', source: 'NGO Magazine', image: '/images/articles/article8.jpg' },
    { id: 9, title: 'Annual Day Celebration Report', date: 'January 15, 2024', source: 'Community News', image: '/images/articles/article9.jpg' },
    { id: 10, title: 'Blood Donation Camp Coverage', date: 'January 10, 2024', source: 'Health Express', image: '/images/articles/article10.jpg' },
    { id: 11, title: 'New Infrastructure Development', date: 'December 28, 2023', source: 'Construction Today', image: '/images/articles/article11.jpg' },
    { id: 12, title: 'Festival Celebration Feature', date: 'December 20, 2023', source: 'Cultural Times', image: '/images/articles/article12.jpg' },
    { id: 13, title: 'Donation Drive Success', date: 'December 15, 2023', source: 'Charity News', image: '/images/articles/article13.jpg' },
    { id: 14, title: 'Children Talent Show Coverage', date: 'December 10, 2023', source: 'Youth Today', image: '/images/articles/article14.jpg' },
    { id: 15, title: 'Community Impact Report', date: 'December 5, 2023', source: 'Social Work Journal', image: '/images/articles/article15.jpg' },
    { id: 16, title: 'Healthcare Initiative Launch', date: 'November 30, 2023', source: 'Medical Tribune', image: '/images/articles/article16.jpg' },
    { id: 17, title: 'Education Support Program Feature', date: 'November 25, 2023', source: 'Learning Today', image: '/images/articles/article17.jpg' },
    { id: 18, title: 'Volunteer Recognition Event', date: 'November 20, 2023', source: 'NGO Times', image: '/images/articles/article18.jpg' },
    { id: 19, title: 'Disaster Relief Efforts Praised', date: 'November 15, 2023', source: 'Emergency News', image: '/images/articles/article19.jpg' },
    { id: 20, title: 'Social Innovation Award Coverage', date: 'November 10, 2023', source: 'Innovation Weekly', image: '/images/articles/article20.jpg' },
  ]

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay">
          <h1 className="gallery-hero-title">Gallery - Articles</h1>
          <p className="gallery-hero-subtitle">MEDIA COVERAGE & NEWS</p>
        </div>
      </section>

      <div className="container">
        

        {/* Articles Grid */}
        <div className="articles-grid">
          {articles.map((article) => (
            <div key={article.id} className="article-card" onClick={() => setSelectedArticle(article)}>
              <div className="article-image">
                <img src="/images/projects/snehakoodu15.jpg" alt={article.title} />
              </div>
              <div className="article-content">
                <h4>{article.title}</h4>
                <div className="article-meta">
                  <span className="article-source">{article.source}</span>
                  <span className="article-date">{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedArticle && (
        <div className="lightbox-modal" onClick={() => setSelectedArticle(null)}>
          <button className="lightbox-close" onClick={() => setSelectedArticle(null)}>×</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src="/images/projects/snehakoodu15.jpg" alt={selectedArticle.title} />
            <div className="lightbox-info">
              <h3>{selectedArticle.title}</h3>
              <p>{selectedArticle.source} • {selectedArticle.date}</p>
            </div>
          </div>
          <button className="lightbox-prev" onClick={(e) => {
            e.stopPropagation()
            const currentIndex = articles.findIndex(a => a.id === selectedArticle.id)
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : articles.length - 1
            setSelectedArticle(articles[prevIndex])
          }}>‹</button>
          <button className="lightbox-next" onClick={(e) => {
            e.stopPropagation()
            const currentIndex = articles.findIndex(a => a.id === selectedArticle.id)
            const nextIndex = currentIndex < articles.length - 1 ? currentIndex + 1 : 0
            setSelectedArticle(articles[nextIndex])
          }}>›</button>
        </div>
      )}
    </div>
  )
}
