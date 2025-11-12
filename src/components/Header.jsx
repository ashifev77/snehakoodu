import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header(){
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(v => !v)
  const close = () => setOpen(false)
  useEffect(() => {
    if (open) {
      document.body.classList.add('disable-scroll')
    } else {
      document.body.classList.remove('disable-scroll')
    }
    return () => document.body.classList.remove('disable-scroll')
  }, [open])
  return (
    <header className={open ? 'nav-open' : ''}>
      <div className="topbar">
        <div className="container row">
          <div className="left">
            <div className="socials" aria-label="Social media">
              <a href="#" aria-label="Facebook" className="social-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M13 22v-7h2.5l.5-3H13V9.5c0-.9.3-1.5 1.6-1.5H16V5.2c-.3 0-1-.1-2-.1-2.3 0-3.8 1.4-3.8 3.9V12H8v3h2.2v7h2.8Z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="social-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M21 5.9c-.6.3-1.3.5-2 .6a3.4 3.4 0 0 0 1.5-1.8 6.6 6.6 0 0 1-2.1.8 3.3 3.3 0 0 0-5.7 2.3c0 .3 0 .6.1.8a9.4 9.4 0 0 1-6.8-3.5 3.3 3.3 0 0 0 1 4.4 3.3 3.3 0 0 1-1.5-.4v.1c0 1.6 1.1 3 2.6 3.3-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.2 3 2.2A6.6 6.6 0 0 1 3 18a9.2 9.2 0 0 0 5 1.5c6 0 9.4-5 9.4-9.4v-.4c.6-.4 1.2-1 1.6-1.6Z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="social-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4Zm5.4-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0ZM21 7.1c0-1.2-.2-2.1-.6-3a4.7 4.7 0 0 0-2.7-2.7C16.8 1 16 1 14.8 1H9.2C8 1 7.2 1 6.3 1.4a4.7 4.7 0 0 0-2.7 2.7C3 5 3 5.9 3 7.1v5.6c0 1.2 0 2 .4 2.9a4.7 4.7 0 0 0 2.7 2.7c.9.4 1.7.4 2.9.4h5.6c1.2 0 2 0 2.9-.4a4.7 4.7 0 0 0 2.7-2.7c.4-.9.4-1.7.4-2.9V7.1Zm-2 0v5.6c0 .9 0 1.5-.3 2a2.9 2.9 0 0 1-1.2 1.2c-.5.2-1 .3-2 .3H9.4c-.9 0-1.5 0-2-.3a2.9 2.9 0 0 1-1.2-1.2c-.2-.5-.3-1-.3-2V7.1c0-.9 0-1.5.3-2A2.9 2.9 0 0 1 7.4 4c.5-.2 1-.3 2-.3h5.2c.9 0 1.5 0 2 .3a2.9 2.9 0 0 1 1.2 1.2c.2.5.3 1 .3 2Z"/></svg>
              </a>
            </div>
            <div className="contact-inline">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M6.6 3.1 4.3 5.4c-.7.7-.8 1.9-.2 2.7 1.4 1.9 3.2 4.5 5.6 6.9 2.5 2.5 5.1 4.3 7 5.7.8.6 2 .5 2.7-.2l2.3-2.3c.7-.7.6-1.9-.1-2.6l-2.7-2.3c-.6-.6-1.6-.6-2.3 0l-1.4 1.4c-1.4-.8-3-2-4.6-3.6-1.5-1.5-2.7-3.1-3.5-4.5l1.4-1.4c.6-.7.6-1.7 0-2.3L9.2 3.2c-.7-.7-1.9-.8-2.6-.1Z"/></svg>
              <span>0481-2301555, 9605757179, 7012427454</span>
            </div>
          </div>
          <div className="right">
            <a href="mailto:info@snehakoodu.org">info@snehakoodu.org</a>
            <span className="divider" aria-hidden="true">|</span>
            <a href="#">Donate Online</a>
            <span className="divider" aria-hidden="true">|</span>
            <a href="#">Upcoming Events</a>
            <span className="divider" aria-hidden="true">|</span>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="container row">
          <Link className="logo" to="/">
            <img src="/logo-snehakoodu.png" alt="Snehakoodu Abhayamandiram" />
          </Link>
          <button className={`menu-toggle ${open ? 'open' : ''}`} aria-label="Toggle menu" aria-expanded={open} onClick={toggle}>
            <span></span><span></span><span></span>
          </button>
          <nav className={`nav ${open ? 'open' : ''}`}>
            <button className="close-nav" onClick={close} aria-label="Close menu">×</button>
            <Link to="/" onClick={close}>Home</Link>
            <Link to="/about" onClick={close}>About</Link>
            <div className="nav-item">
              <Link to="/projects">
                Projects
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" style={{marginLeft: '4px'}}>
                  <path d="M6 9L1 4h10z"/>
                </svg>
              </Link>
              <div className="dropdown-menu">
                <Link to="/projects/snehaveedu" onClick={close}>Snehaveedu</Link>
                <Link to="/projects/snehadisha" onClick={close}>Snehadisha</Link>
                <Link to="/projects/snehasena" onClick={close}>Snehasena</Link>
                <Link to="/projects/snehapadam" onClick={close}>Snehapadam</Link>
                <Link to="/projects/snehasanthwanam" onClick={close}>Snehasanthwanam</Link>
                <Link to="/projects/snehavandi" onClick={close}>Snehavandi</Link>
                <Link to="/projects/snehamangalyam" onClick={close}>Snehamangalyam</Link>
                <Link to="/projects/snehanam" onClick={close}>Snehanam</Link>
                <Link to="/projects/snehapuniyam" onClick={close}>Snehapuniyam</Link>
              </div>
            </div>
            <div className="nav-item">
              <Link to="/gallery/photos">
                Gallery
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" style={{marginLeft: '4px'}}>
                  <path d="M6 9L1 4h10z"/>
                </svg>
              </Link>
              <div className="dropdown-menu">
                <Link to="/gallery/certificates" onClick={close}>Certificates</Link>
                <Link to="/gallery/awards" onClick={close}>Awards</Link>
                <Link to="/gallery/photos" onClick={close}>Photos</Link>
                <Link to="/gallery/articles" onClick={close}>Articles</Link>
              </div>
            </div>
            <Link to="/media" onClick={close}>Media</Link>
            <Link to="/contact" onClick={close}>Contact</Link>
            <div className="nav-cta">
              <a className="btn btn-primary full" href="#">Donate Now</a>
            </div>
          </nav>
          <div className="nav-actions">
            <a className="btn btn-primary" href="#">Donate Now</a>
          </div>
        </div>
      </div>
    </header>
  )
}


