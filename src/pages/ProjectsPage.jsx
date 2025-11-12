import './ProjectsPage.css'

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="projects-hero-overlay">
          <h1 className="projects-hero-title">Snehaveedu</h1>
          <p className="projects-hero-subtitle">FIND A NEED AND FILL IT, FIND A HURT AND HEAL IT.</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container projects-content-wrapper">
        
        {/* About Snehaveedu Section */}
        <section className="about-snehaveedu-section">
          <div className="section-header">
            <h2 className="section-title">About Snehaveedu</h2>
          </div>
          
          <div className="content-grid">
            <div className="content-main">
              <p className="content-paragraph">
                We see all children of God, there are some unfortunate people who are homeless or live by some who have been given the gift to have care of them, but owing name to use something less God has condolences.
              </p>
              
              <p className="content-paragraph">
                Houses of love. To share is the Divine path again. There is still a long way to go to 
                reach the goal of the organization. The organization aims to provide a safe home 
                to them, the relevance of Snehaveedu is increasing today. God has also planned 
                to get individuals now house how from one to seven God given love homes 
                have been given to us by different people.
              </p>
              
              <p className="content-paragraph">
                Snehaveedu has the aim to construct of this style home for the homeless and 
                homeless people. For the will six years, Snehaveedu has been implementing the 
                project with the objective of providing housing to the needy and obviously, in 
                people who have no place to live despite having their own land, irrespective of 
                caste or creed. So far seven houses have been allotted under Snehaveedu's 
                scheme.
              </p>
            </div>
          </div>
        </section>

        {/* Project Gallery Section */}
        <section className="project-gallery-section">
          <div className="gallery-grid-projects">
            <div className="gallery-item-project">
              <img src="/images/projects/snehakoodu15.jpg" alt="Snehaveedu house 1" />
              <div className="gallery-overlay">
                <p>Snehaveedu Home 1</p>
              </div>
            </div>
            <div className="gallery-item-project">
              <img src="/images/projects/snehanam.jpg" alt="Snehaveedu house 2" />
              <div className="gallery-overlay">
                <p>Snehaveedu Home 2</p>
              </div>
            </div>
            <div className="gallery-item-project">
              <img src="/images/projects/snehapadam.jpg" alt="Snehaveedu house 3" />
              <div className="gallery-overlay">
                <p>Snehaveedu Home 3</p>
              </div>
            </div>
            <div className="gallery-item-project">
              <img src="/images/projects/snehasana.jpg" alt="Snehaveedu house 4" />
              <div className="gallery-overlay">
                <p>Snehaveedu Home 4</p>
              </div>
            </div>
            <div className="gallery-item-project">
              <img src="/images/projects/snehaswanthanam.jpg" alt="Snehaveedu house 5" />
              <div className="gallery-overlay">
                <p>Snehaveedu Home 5</p>
              </div>
            </div>
            <div className="gallery-item-project">
              <img src="/images/projects/snehadisha.jpg" alt="Snehaveedu house 6" />
              <div className="gallery-overlay">
                <p>Snehaveedu Home 6</p>
              </div>
            </div>
          </div>
        </section>

        {/* All Projects Section */}
        <section className="all-projects-section">
          <div className="section-header">
            <h2 className="headline center">Our Programs</h2>
            <p className="section-subtitle">Comprehensive care through specialized programs</p>
          </div>

          <div className="projects-grid">
            {/* Snehakoodu */}
            <div className="project-card-detailed">
              <div className="project-card-image">
                <img src="/images/projects/snehakoodu15.jpg" alt="Snehakoodu" />
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Snehakoodu</h3>
                <p className="project-card-description">
                  Our flagship shelter program providing safe, loving homes for orphaned children and 
                  abandoned elderly people. Snehakoodu operates as a joint family structure where 
                  residents receive comprehensive care, education, and emotional support in a nurturing 
                  environment.
                </p>
                <div className="project-features">
                  <div className="feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span>Safe Shelter</span>
                  </div>
                  <div className="feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <span>Family Environment</span>
                  </div>
                  <div className="feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    <span>24/7 Care</span>
                  </div>
                </div>
                <a href="#" className="btn btn-ghost">Learn More</a>
              </div>
            </div>

            {/* Snehanam */}
            <div className="project-card-detailed">
              <div className="project-card-image">
                <img src="/images/projects/snehanam.jpg" alt="Snehanam" />
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Snehanam</h3>
                <p className="project-card-description">
                  Comprehensive medical care program providing healthcare services to our residents and 
                  the wider community. We offer regular health checkups, medication management, specialist 
                  consultations, and emergency medical support to ensure the well-being of everyone under 
                  our care.
                </p>
                <div className="project-features">
                  <div className="feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                    <span>Health Monitoring</span>
                  </div>
                  <div className="feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <line x1="9" y1="9" x2="15" y2="9"/>
                      <line x1="9" y1="15" x2="15" y2="15"/>
                    </svg>
                    <span>Medical Records</span>
                  </div>
                  <div className="feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                    <span>Expert Care</span>
                  </div>
                </div>
                <a href="#" className="btn btn-ghost">Learn More</a>
              </div>
            </div>

            {/* Snehapadam */}
            <div className="project-card-detailed">
              <div className="project-card-image">
                <img src="/images/projects/snehapadam.jpg" alt="Snehapadam" />
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Snehapadam</h3>
                <p className="project-card-description">
                  Educational support program ensuring every child receives quality education and skill 
                  development opportunities. We provide school enrollment assistance, tutoring, educational 
                  materials, and vocational training to help children build a bright future and become 
                  self-reliant.
                </p>
                <div className="project-features">
                  <div className="feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                    </svg>
                    <span>Education Support</span>
                  </div>
                  <div className="feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                    <span>Skill Training</span>
                  </div>
                  <div className="feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                    <span>Career Guidance</span>
                  </div>
                </div>
                <a href="#" className="btn btn-ghost">Learn More</a>
              </div>
            </div>

            {/* Snehasana */}
            <div className="project-card-detailed">
              <div className="project-card-image">
                <img src="/images/projects/snehasana.jpg" alt="Snehasana" />
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Snehasana</h3>
                <p className="project-card-description">
                  Nutrition and food security program ensuring all residents receive balanced, nutritious 
                  meals daily. We focus on dietary requirements based on age and health conditions, providing 
                  three wholesome meals plus snacks, prepared with care and hygiene in our community kitchen.
                </p>
                <div className="project-features">
                  <div className="feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                      <line x1="6" y1="1" x2="6" y2="4"/>
                      <line x1="10" y1="1" x2="10" y2="4"/>
                      <line x1="14" y1="1" x2="14" y2="4"/>
                    </svg>
                    <span>Nutritious Meals</span>
                  </div>
                  <div className="feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span>Regular Schedule</span>
                  </div>
                  <div className="feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <span>Quality Assured</span>
                  </div>
                </div>
                <a href="#" className="btn btn-ghost">Learn More</a>
              </div>
            </div>

            {/* Snehaswanthanam */}
            <div className="project-card-detailed">
              <div className="project-card-image">
                <img src="/images/projects/snehaswanthanam.jpg" alt="Snehaswanthanam" />
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Snehaswanthanam</h3>
                <p className="project-card-description">
                  Rehabilitation and reintegration program working to reunite children with extended family 
                  members or find suitable adoptive homes. We provide counseling, legal support, and follow-up 
                  care to ensure successful transitions and long-term well-being of all parties involved.
                </p>
                <div className="project-features">
                  <div className="feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span>Family Reunification</span>
                  </div>
                  <div className="feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                    <span>Legal Support</span>
                  </div>
                  <div className="feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    <span>Counseling</span>
                  </div>
                </div>
                <a href="#" className="btn btn-ghost">Learn More</a>
              </div>
            </div>

            {/* Snehadisha */}
            <div className="project-card-detailed">
              <div className="project-card-image">
                <img src="/images/projects/snehadisha.jpg" alt="Snehadisha" />
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Snehadisha</h3>
                <p className="project-card-description">
                  Guidance and counseling program providing mental health support, life skills training, and 
                  emotional well-being services. Our trained counselors work with residents to address trauma, 
                  build resilience, develop coping strategies, and foster positive mental health.
                </p>
                <div className="project-features">
                  <div className="feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                      <line x1="9" y1="9" x2="9.01" y2="9"/>
                      <line x1="15" y1="9" x2="15.01" y2="9"/>
                    </svg>
                    <span>Mental Health</span>
                  </div>
                  <div className="feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                    <span>Life Skills</span>
                  </div>
                  <div className="feature-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    <span>Emotional Support</span>
                  </div>
                </div>
                <a href="#" className="btn btn-ghost">Learn More</a>
              </div>
            </div>
          </div>
        </section>

        {/* Snehaveedu Housing Section */}
        <section className="snehaveedu-housing-section">
          <div className="section-header">
            <h2 className="headline center">Snehaveedu Housing Initiative</h2>
            <p className="section-subtitle">Building homes, restoring dignity</p>
          </div>

          <div className="housing-content">
            <div className="housing-description">
              <p className="content-paragraph">
                The Snehaveedu housing project represents our commitment to providing permanent shelter 
                solutions for homeless individuals and families. Over the past six years, we have successfully 
                constructed and allocated seven houses to deserving families who had land but lacked the 
                resources to build homes.
              </p>
              <p className="content-paragraph">
                Each house is built with love and care, designed to provide a safe, comfortable living 
                environment. We work closely with beneficiaries to understand their needs and ensure the 
                homes meet their family requirements. The project is secular and inclusive, serving people 
                regardless of caste, creed, or religion.
              </p>
              <p className="content-paragraph">
                Our goal is to continue expanding this initiative, building more homes and bringing the 
                joy of secure shelter to more families. Every house we build represents hope, dignity, 
                and a fresh start for a family in need.
              </p>
            </div>

            <div className="housing-stats">
              <div className="housing-stat-card">
                <div className="stat-number-large">7</div>
                <div className="stat-label-large">Houses Built</div>
              </div>
              <div className="housing-stat-card">
                <div className="stat-number-large">35+</div>
                <div className="stat-label-large">Lives Changed</div>
              </div>
              <div className="housing-stat-card">
                <div className="stat-number-large">6</div>
                <div className="stat-label-large">Years Active</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="projects-cta-section">
          <div className="cta-box">
            <h2 className="cta-title">Want to get involved?</h2>
            <p className="cta-text">
              Interested to become part of <strong>Snehakoodu Abhayamandiram?</strong>
            </p>
            <p className="cta-subtext">Feel free to contact us!</p>
            <a href="#contact" className="btn btn-primary">Become a Volunteer</a>
          </div>
        </section>

      </div>
    </div>
  )
}
