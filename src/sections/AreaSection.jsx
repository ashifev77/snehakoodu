import React from 'react'
import '../sections-css/AreaSection.css'

function AreaSection() {
  return (
   <>
   <div className="container4">
        <section className="hero-section4">
            <div className="wave-decoration4">
                <div className="wave4 wave-14"></div>
                <div className="wave4 wave-24"></div>
                <div className="wave4 wave-34"></div>
            </div>

            <div className="hero-content4">
                <div className="icon-wrapper4">
                    <div className="icon-bg4"></div>
                    <svg className="hands-icon4" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 45L20 50L22 55L15 58L18 65L25 62L30 70L35 65L40 70L45 60L42 55L48 52L45 45L40 48L35 42L30 45Z" 
                              stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                        <path d="M70 45L80 50L78 55L85 58L82 65L75 62L70 70L65 65L60 70L55 60L58 55L52 52L55 45L60 48L65 42L70 45Z" 
                              stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                        <circle cx="50" cy="50" r="8" fill="#1a1a1a"/>
                        <path d="M42 50C42 48 44 46 50 46C56 46 58 48 58 50" 
                              stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" fill="none"/>
                    </svg>
                </div>

                <h1 className="main-heading4">Snehakoodu Abhayamandiram</h1>

                <a href="#about" className="cta-link4">
                    Learn More
                    <svg className="arrow-icon4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>
        </section>
    </div>
   </>
  )
}

export default AreaSection