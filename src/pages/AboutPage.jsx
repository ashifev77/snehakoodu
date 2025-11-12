import './AboutPage.css'

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <h1 className="about-hero-title">Snehakoodu Abhayamandiram</h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="container about-content-wrapper">
        {/* Organization Info Section */}
        <section className="org-info-section">
          <div className="org-info-grid">
            <div className="org-info-text">
              <h2 className="org-title">A Joint Secular Structured Organization for Orphans and Dependent Old Age People</h2>
              <p className="org-description">
                Snehakoodu Abhayamandiram, established in 1999, is a secular joint family structured organization 
                dedicated to protecting orphans and dependent elderly people. Our primary mission is to provide 
                shelter, care, and rehabilitation for those who have nowhere else to turn.
              </p>
              <p className="org-description">
                We operate on the fundamental belief that every individual deserves dignity, respect, and a loving 
                family environment. Our organization functions as a true joint family, where residents are not just 
                beneficiaries but cherished family members. We provide comprehensive legal protection, mental health 
                support, medical care, and work towards rehabilitating individuals with families whenever possible.
              </p>
              <p className="org-description">
                Over the years, we have touched hundreds of lives, providing not just physical shelter but emotional 
                support and a sense of belonging. Our dedicated team of staff and volunteers work tirelessly to ensure 
                that every person under our care receives personalized attention and the opportunity to live with dignity.
              </p>
              <a href="#contact" className="btn btn-primary">Get Involved</a>
            </div>
            <div className="org-info-media">
              <div className="media-card">
                <img src="/images/about/about1.jpg" alt="Organization activities" />
                <div className="media-caption">
                  <h4>Our Mission</h4>
                  <p>Providing shelter, care and dignity to those in need</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mission-section">
          <div className="mission-banner">
            <h2 className="mission-title">FIND A NEED AND FILL IT, FIND A HURT AND HEAL IT.</h2>
          </div>
        </section>

        {/* Detailed Content Section */}
        <section className="detailed-content-section">
          <div className="content-layout">
            <div className="main-content">
              <h3 className="content-heading">Our Story and Mission</h3>
              
              <p className="content-text">
                Snehakoodu Abhayamandiram was born out of a deep compassion for the most vulnerable members of our 
                society - orphaned children and elderly people without family support. Founded in 1999, our organization 
                has grown from a small shelter to a comprehensive care facility that serves as a true home for those in need.
              </p>

              <p className="content-text">
                The name "Snehakoodu" translates to "Home of Love," and this philosophy guides everything we do. We believe 
                that institutional care should never feel institutional. Instead, we have created a joint family structure 
                where residents, staff, and volunteers form genuine bonds of affection and support. Our residents don't just 
                receive care - they give and receive love, participate in family decisions, and contribute to the community 
                in meaningful ways.
              </p>

              <h4 className="sub-heading">What We Do</h4>
              
              <p className="content-text">
                Our work encompasses several critical areas of support and care. We provide immediate shelter and protection 
                to orphaned children and abandoned elderly people. Beyond basic needs, we offer comprehensive medical care, 
                mental health support, and legal assistance to ensure every resident's rights are protected.
              </p>

              <p className="content-text">
                For children, we provide education support, skill development, and work towards finding suitable adoptive 
                families or foster care arrangements. For elderly residents, we focus on maintaining their dignity, providing 
                medical care for age-related conditions, and creating opportunities for them to remain active and engaged.
              </p>

              <p className="content-text">
                We also run several specialized programs under different names - Snehakoodu (shelter), Snehanam (medical care), 
                Snehapadam (education), Snehasana (nutrition), Snehaswanthanam (rehabilitation), and Snehadisha (guidance and 
                counseling). Each program addresses specific needs while maintaining our holistic approach to care.
              </p>

              <h4 className="sub-heading">Our Approach</h4>

              <p className="content-text">
                What sets us apart is our secular, inclusive approach. We welcome people of all faiths, castes, and backgrounds. 
                Our only criterion is need. We believe that in times of vulnerability, what matters most is human compassion, 
                not religious or social divisions.
              </p>

              <p className="content-text">
                Our joint family structure means that residents participate in daily activities, celebrations, and decision-making. 
                We celebrate all festivals together, share meals as a family, and support each other through difficult times. 
                This creates a genuine sense of belonging that is crucial for emotional well-being.
              </p>

              <p className="content-text">
                We also emphasize rehabilitation and reintegration. Whenever possible, we work to reunite children with extended 
                family members or find suitable adoptive homes. For elderly residents, we facilitate visits with family members 
                and encourage reconciliation where appropriate.
              </p>

              <h4 className="sub-heading">Our Impact</h4>

              <p className="content-text">
                Over the past two decades, we have provided shelter and care to hundreds of individuals. Many children who grew 
                up in our care have gone on to lead successful, independent lives. They return to visit, volunteer, and support 
                our work, creating a beautiful cycle of giving back.
              </p>

              <p className="content-text">
                Our elderly residents often say that they have found peace and happiness here that they never expected in their 
                final years. They form deep friendships, participate in activities, and feel valued and respected. Many have 
                told us that Snehakoodu truly feels like home.
              </p>

              <h4 className="sub-heading">Looking Forward</h4>

              <p className="content-text">
                As we continue our work, we remain committed to our founding principles of compassion, dignity, and family. 
                We are constantly working to improve our facilities, expand our programs, and reach more people in need. 
                We believe that no one should face old age or childhood without the support of a loving family, and we strive 
                every day to make that belief a reality.
              </p>

              <p className="content-text">
                We invite you to join us in this mission. Whether through volunteering your time, making a donation, or simply 
                spreading awareness about our work, you can make a difference in the lives of vulnerable people in our community. 
                Together, we can ensure that everyone has a place to call home and a family to call their own.
              </p>
            </div>

            <div className="sidebar-content">
              <div className="info-card">
                <img src="/images/about/about2.jpg" alt="Our facility" />
                <h4>Our Facility</h4>
                <p>A safe, comfortable home environment for all residents</p>
              </div>

              <div className="info-card">
                <img src="/images/about/about3.jpg" alt="Community activities" />
                <h4>Community Life</h4>
                <p>Regular activities, celebrations, and family gatherings</p>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="gallery-section">
          <h2 className="headline center">Our Community</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/images/projects/snehakoodu15.jpg" alt="Community gathering" />
            </div>
            <div className="gallery-item">
              <img src="/images/projects/snehanam.jpg" alt="Care activities" />
            </div>
            <div className="gallery-item">
              <img src="/images/projects/snehapadam.jpg" alt="Family moments" />
            </div>
            <div className="gallery-item">
              <img src="/images/projects/snehasana.jpg" alt="Celebrations" />
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="get-involved-section">
          <h2 className="headline center">Want to get involved?</h2>
          <p className="get-involved-subtitle">Join us in making a difference in the lives of those who need it most</p>
          <div className="involvement-grid">
            <div className="involvement-card">
              <div className="involvement-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h3>Volunteer</h3>
              <p>Dedicate your time and skills to help our community members lead better lives.</p>
              <a href="#" className="btn btn-ghost">Learn More</a>
            </div>
            <div className="involvement-card">
              <div className="involvement-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20"/>
                </svg>
              </div>
              <h3>Donate</h3>
              <p>Your generous contributions help us provide essential care and support services.</p>
              <a href="#" className="btn btn-ghost">Donate Now</a>
            </div>
            <div className="involvement-card">
              <div className="involvement-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3>Spread the Word</h3>
              <p>Help us reach more people by sharing our mission with your network.</p>
              <a href="#" className="btn btn-ghost">Share</a>
            </div>
          </div>
        </section>

        {/* Three Pillars Section */}
        <section className="pillars-section">
          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Board of the Charity</h3>
              <p>Our dedicated board members bring decades of experience in social work, healthcare, and community service. They provide strategic guidance and ensure transparent governance.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Why We Are Best</h3>
              <p>Our joint family approach, secular values, and personalized care set us apart. We don't just provide shelter - we create a genuine home where every individual is valued and loved.</p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3>Our Volunteers</h3>
              <p>Over 100 active volunteers support our mission through their time, skills, and compassion. From medical professionals to teachers, our volunteers are the heart of our community.</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Lives Impacted</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">25+</div>
              <div className="stat-label">Years of Service</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Active Volunteers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">6</div>
              <div className="stat-label">Care Programs</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
