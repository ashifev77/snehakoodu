import { useState } from 'react'
import '../GalleryPage.css'

export default function AwardsPage() {
  const [selectedAward, setSelectedAward] = useState(null)
  
  const awards = [
    { id: 1, title: 'Community Service Award 2024', date: 'March 2024', image: '/images/awards/award1.jpg' },
    { id: 2, title: 'Excellence in Social Work', date: 'February 2024', image: '/images/awards/award2.jpg' },
    { id: 3, title: 'Best NGO Recognition', date: 'January 2024', image: '/images/awards/award3.jpg' },
    { id: 4, title: 'Humanitarian Service Award', date: 'December 2023', image: '/images/awards/award4.jpg' },
    { id: 5, title: 'Child Welfare Excellence', date: 'November 2023', image: '/images/awards/award5.jpg' },
    { id: 6, title: 'Senior Care Recognition', date: 'October 2023', image: '/images/awards/award6.jpg' },
    { id: 7, title: 'COVID Relief Service Award', date: 'September 2023', image: '/images/awards/award7.jpg' },
    { id: 8, title: 'Education Support Excellence', date: 'August 2023', image: '/images/awards/award8.jpg' },
    { id: 9, title: 'Medical Aid Recognition', date: 'July 2023', image: '/images/awards/award9.jpg' },
    { id: 10, title: 'Community Impact Award', date: 'June 2023', image: '/images/awards/award10.jpg' },
    { id: 11, title: 'Volunteer Excellence Award', date: 'May 2023', image: '/images/awards/award11.jpg' },
    { id: 12, title: 'Social Innovation Award', date: 'April 2023', image: '/images/awards/award12.jpg' },
    { id: 13, title: 'Outstanding Service Recognition', date: 'March 2023', image: '/images/awards/award13.jpg' },
    { id: 14, title: 'NGO Leadership Award', date: 'February 2023', image: '/images/awards/award14.jpg' },
    { id: 15, title: 'Community Builder Award', date: 'January 2023', image: '/images/awards/award15.jpg' },
  ]

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay">
          <h1 className="gallery-hero-title">Gallery - Awards</h1>
          <p className="gallery-hero-subtitle">RECOGNITIONS & ACHIEVEMENTS</p>
        </div>
      </section>

      <div className="container">

        {/* Awards Grid */}
        <div className="photos-grid">
          {awards.map((award) => (
            <div key={award.id} className="photo-card" onClick={() => setSelectedAward(award)}>
              <div className="photo-image">
                <img src="/images/projects/snehakoodu15.jpg" alt={award.title} />
                <div className="photo-overlay">
                  <h4>{award.title}</h4>
                  <p>{award.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedAward && (
        <div className="lightbox-modal" onClick={() => setSelectedAward(null)}>
          <button className="lightbox-close" onClick={() => setSelectedAward(null)}>×</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src="/images/projects/snehakoodu15.jpg" alt={selectedAward.title} />
            <div className="lightbox-info">
              <h3>{selectedAward.title}</h3>
              <p>{selectedAward.date}</p>
            </div>
          </div>
          <button className="lightbox-prev" onClick={(e) => {
            e.stopPropagation()
            const currentIndex = awards.findIndex(a => a.id === selectedAward.id)
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : awards.length - 1
            setSelectedAward(awards[prevIndex])
          }}>‹</button>
          <button className="lightbox-next" onClick={(e) => {
            e.stopPropagation()
            const currentIndex = awards.findIndex(a => a.id === selectedAward.id)
            const nextIndex = currentIndex < awards.length - 1 ? currentIndex + 1 : 0
            setSelectedAward(awards[nextIndex])
          }}>›</button>
        </div>
      )}
    </div>
  )
}
