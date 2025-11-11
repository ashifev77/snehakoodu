import React from 'react'
import '../sections-css/StorySection.css'

function StorySection() {
  return (
    <>
    <div className="container3">
        <div className="section3">
            <div className="content3">
                <div className="label3">THE STORY OF US</div>
                <h2 className="heading3">Know more about us..</h2>
                <p className="description3">
                    Help others without any reason and give without the expectation of receiving anything in return.
                </p>
                <button className="cta-button3" style={{cursor: 'pointer'}}>
                    <svg className="pdf-icon3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                        <path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3"/>
                    </svg>
                    DOWNLOAD PDF
                </button>
            </div>

            <div className="video-wrapper3">
                <iframe 
                    src="https://www.youtube.com/embed/EV807vrWD6c?si=NPvaAt8hh7JYu9lF" 
                    title="Snehakoodu Abhayamandiram Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    </div>
    </>
  )
}

export default StorySection