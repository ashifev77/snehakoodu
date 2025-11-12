import { useState } from 'react'
import '../GalleryPage.css'

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState(null)
  
  const certificates = [
    { id: 1, title: 'OCB Certificate', category: 'Registration', image: '/images/certificates/ocb.jpg' },
    { id: 2, title: '12A Certificate', category: 'Tax Exemption', image: '/images/certificates/12a.jpg' },
    { id: 3, title: '80G Certificate', category: 'Tax Exemption', image: '/images/certificates/80g.jpg' },
    { id: 4, title: 'FCRA Certificate', category: 'Foreign Contribution', image: '/images/certificates/fcra.jpg' },
    { id: 5, title: 'ISO Certification', category: 'Quality Management', image: '/images/certificates/iso.jpg' },
    { id: 6, title: 'National NGOs Confederation Certificate', category: 'Recognition', image: '/images/certificates/ngos.jpg' },
  ]

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay">
          <h1 className="gallery-hero-title">Certificates & Accreditations</h1>
          <p className="gallery-hero-subtitle">SNEHAKOODU ABHAYAMANDIRAM</p>
        </div>
      </section>

      <div className="container">

        {/* Certificates Grid */}
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card" onClick={() => setSelectedCert(cert)}>
              <div className="certificate-image">
                <img src="/images/projects/snehakoodu15.jpg" alt={cert.title} />
              </div>
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <p className="certificate-category">{cert.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div className="lightbox-modal" onClick={() => setSelectedCert(null)}>
          <button className="lightbox-close" onClick={() => setSelectedCert(null)}>×</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src="/images/projects/snehakoodu15.jpg" alt={selectedCert.title} />
            <div className="lightbox-info">
              <h3>{selectedCert.title}</h3>
              <p>{selectedCert.category}</p>
            </div>
          </div>
          <button className="lightbox-prev" onClick={(e) => {
            e.stopPropagation()
            const currentIndex = certificates.findIndex(c => c.id === selectedCert.id)
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : certificates.length - 1
            setSelectedCert(certificates[prevIndex])
          }}>‹</button>
          <button className="lightbox-next" onClick={(e) => {
            e.stopPropagation()
            const currentIndex = certificates.findIndex(c => c.id === selectedCert.id)
            const nextIndex = currentIndex < certificates.length - 1 ? currentIndex + 1 : 0
            setSelectedCert(certificates[nextIndex])
          }}>›</button>
        </div>
      )}
    </div>
  )
}
