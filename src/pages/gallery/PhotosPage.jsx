import { useState } from 'react'
import '../GalleryPage.css'

export default function PhotosPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  
  const photos = [
    { id: 1, title: 'Children\'s Day Celebration', category: 'Events', image: '/images/gallery/photo1.jpg' },
    { id: 2, title: 'Onam Festival 2024', category: 'Festivals', image: '/images/gallery/photo2.jpg' },
    { id: 3, title: 'Medical Camp', category: 'Healthcare', image: '/images/gallery/photo3.jpg' },
    { id: 4, title: 'Education Support Program', category: 'Education', image: '/images/gallery/photo4.jpg' },
    { id: 5, title: 'Christmas Celebration', category: 'Festivals', image: '/images/gallery/photo5.jpg' },
    { id: 6, title: 'Elder Care Activities', category: 'Care', image: '/images/gallery/photo6.jpg' },
    { id: 7, title: 'Volunteer Training', category: 'Training', image: '/images/gallery/photo7.jpg' },
    { id: 8, title: 'Food Distribution', category: 'Relief', image: '/images/gallery/photo8.jpg' },
    { id: 9, title: 'Art Competition', category: 'Events', image: '/images/gallery/photo9.jpg' },
    { id: 10, title: 'Republic Day', category: 'National Days', image: '/images/gallery/photo10.jpg' },
    { id: 11, title: 'Independence Day', category: 'National Days', image: '/images/gallery/photo11.jpg' },
    { id: 12, title: 'Vishu Celebration', category: 'Festivals', image: '/images/gallery/photo12.jpg' },
    { id: 13, title: 'Blood Donation Camp', category: 'Healthcare', image: '/images/gallery/photo13.jpg' },
    { id: 14, title: 'Sports Day', category: 'Events', image: '/images/gallery/photo14.jpg' },
    { id: 15, title: 'Annual Day 2024', category: 'Events', image: '/images/gallery/photo15.jpg' },
    { id: 16, title: 'Talent Show', category: 'Events', image: '/images/gallery/photo16.jpg' },
    { id: 17, title: 'Flood Relief Work', category: 'Relief', image: '/images/gallery/photo17.jpg' },
    { id: 18, title: 'Wedding Support', category: 'Support', image: '/images/gallery/photo18.jpg' },
    { id: 19, title: 'House Inauguration', category: 'Infrastructure', image: '/images/gallery/photo19.jpg' },
    { id: 20, title: 'Community Gathering', category: 'Events', image: '/images/gallery/photo20.jpg' },
    { id: 21, title: 'Kitchen Activities', category: 'Daily Life', image: '/images/gallery/photo21.jpg' },
    { id: 22, title: 'Prayer Meeting', category: 'Spiritual', image: '/images/gallery/photo22.jpg' },
    { id: 23, title: 'Birthday Celebration', category: 'Events', image: '/images/gallery/photo23.jpg' },
    { id: 24, title: 'Visitor Group', category: 'Visits', image: '/images/gallery/photo24.jpg' },
    { id: 25, title: 'Donation Distribution', category: 'Support', image: '/images/gallery/photo25.jpg' },
    { id: 26, title: 'Cultural Program', category: 'Events', image: '/images/gallery/photo26.jpg' },
    { id: 27, title: 'Health Checkup', category: 'Healthcare', image: '/images/gallery/photo27.jpg' },
    { id: 28, title: 'Garden Activities', category: 'Daily Life', image: '/images/gallery/photo28.jpg' },
    { id: 29, title: 'Music Class', category: 'Education', image: '/images/gallery/photo29.jpg' },
    { id: 30, title: 'Yoga Session', category: 'Wellness', image: '/images/gallery/photo30.jpg' },
  ]

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay">
          <h1 className="gallery-hero-title">Gallery</h1>
          <p className="gallery-hero-subtitle">MOMENTS & MEMORIES</p>
        </div>
      </section>

      <div className="container">

        {/* Photos Grid */}
        <div className="photos-grid">
          {photos.map((photo) => (
            <div key={photo.id} className="photo-card" onClick={() => setSelectedPhoto(photo)}>
              <div className="photo-image">
                <img src="/images/projects/snehakoodu15.jpg" alt={photo.title} />
                <div className="photo-overlay">
                  <h4>{photo.title}</h4>
                  <p>{photo.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="lightbox-modal" onClick={() => setSelectedPhoto(null)}>
          <button className="lightbox-close" onClick={() => setSelectedPhoto(null)}>×</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src="/images/projects/snehakoodu15.jpg" alt={selectedPhoto.title} />
            <div className="lightbox-info">
              <h3>{selectedPhoto.title}</h3>
              <p>{selectedPhoto.category}</p>
            </div>
          </div>
          <button className="lightbox-prev" onClick={(e) => {
            e.stopPropagation()
            const currentIndex = photos.findIndex(p => p.id === selectedPhoto.id)
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1
            setSelectedPhoto(photos[prevIndex])
          }}>‹</button>
          <button className="lightbox-next" onClick={(e) => {
            e.stopPropagation()
            const currentIndex = photos.findIndex(p => p.id === selectedPhoto.id)
            const nextIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0
            setSelectedPhoto(photos[nextIndex])
          }}>›</button>
        </div>
      )}
    </div>
  )
}
