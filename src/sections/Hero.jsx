import { useEffect, useState } from 'react'

const SLIDES = [
  {
    src: '/banners/hero-elder-1.jpg',
    title: 'Passion with Love',
    subtitle: 'We build strength, stability, and self reliance through shelter.'
  },
  {
    src: '/banners/hero-elder-2.jpg',
    title: 'We Believe.',
    subtitle: 'We build strength, stability, and self reliance through shelter.'
  }
]

export default function Hero(){
  const [index, setIndex] = useState(0)
  const next = () => setIndex(i => (i + 1) % SLIDES.length)
  const go = (i) => setIndex(i)

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero has-slides">
      <div className="slides" aria-hidden="true">
        {SLIDES.map((slide, i) => (
          <div key={i} className={`slide ${i === index ? 'active' : ''}`} style={{ backgroundImage: `url(${slide.src})` }} />
        ))}
      </div>
      <div className="brush"/>
      <div className="container inner">
        <div className="content">
          <div className="eyebrow">— Welcome to Snehakoodu Abhayamandiram —</div>
          <h1 className="title">{SLIDES[index].title}</h1>
          <p className="hero-subtitle">{SLIDES[index].subtitle}</p>
          <div className="cta-row">
            <a className="btn btn-ghost" href="#">Discover Now</a>
            <a className="btn btn-primary" href="#">Watch Video</a>
          </div>
        </div>
      </div>
      <div className="nav-dots" role="tablist" aria-label="Hero slides">
        {SLIDES.map((_, i) => (
          <button key={i} className={`dot ${i===index?'active':''}`} onClick={() => go(i)} aria-label={`Go to slide ${i+1}`}></button>
        ))}
      </div>
    </section>
  )
}


