import React from 'react'
import '../sections-css/about2.css'

function About2() {
  return (
    <>
    <div className="container2">
        <div className="section2">
            <div className="images-grid2">
        
                <div className="decoration2 decoration-12">
                    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40 10 L60 40 L50 45 L70 70 L60 75 L80 100" stroke="#003366" stroke-width="12" stroke-linecap="round"/>
                        <path d="M60 15 L80 45 L70 50 L90 75 L80 80 L100 105" stroke="#003366" stroke-width="12" stroke-linecap="round"/>
                        <path d="M80 20 L100 50 L90 55 L110 80" stroke="#003366" stroke-width="12" stroke-linecap="round"/>
                    </svg>
                </div>
                <div className="decoration2 decoration-22">
                    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 20 L30 10 L35 30 L55 25 L50 45 L70 50" stroke="#003366" stroke-width="10" stroke-linecap="round"/>
                        <path d="M15 45 L35 35 L40 55 L60 50 L55 70 L75 75" stroke="#003366" stroke-width="10" stroke-linecap="round"/>
                    </svg>
                </div>

                <div className="image-wrapper2 large2">
                    <img src="/images/about/about1.jpg" alt="Person in wheelchair with partner"/>
                </div>
                <div className="image-wrapper2 small2">
                    <img src="/images/about/about2.jpg" alt="Wheelchair accessible environment"/>
                </div>
                <div className="image-wrapper2 small2">
                    <img src="/images/about/about3.jpg" alt="Professional working at desk"/>
                </div>
            </div>

            <div className="content2">
                <div className="label2">How we work</div>
                <h1>Changing Lives Through Compassion and Access.</h1>
                <p className="mission2">
                    Our mission is to break down barriers & inclusive environments where people of all abilities can thrive. With a focus driven by compassion and expertise, we provide personalized support.
                </p>

                <div className="features2">
                    <div className="feature2">
                        <svg className="feature-icon2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span className="feature-text2">Breaking Barriers Building Possibilities</span>
                    </div>
                    <div className="feature2">
                        <svg className="feature-icon2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                        <span className="feature-text2">Empowering Abilities Enriching Lives</span>
                    </div>
                    <div className="feature2">
                        <svg className="feature-icon2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                        </svg>
                        <span className="feature-text2">Your Strength Our Commitment</span>
                    </div>
                </div>

                <button className="cta-button2">Contact Us</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default About2