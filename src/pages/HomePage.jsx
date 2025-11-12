import Hero from '../sections/Hero.jsx'
import About from '../sections/About.jsx'
import VolunteerCTAs from '../sections/VolunteerCTAs.jsx'
import Causes from '../sections/Causes.jsx'
import News from '../sections/News.jsx'
import About2 from '../sections/About2.jsx'
import StorySection from '../sections/StorySection.jsx'
import AreaSection from '../sections/AreaSection.jsx'
import FormSection from '../sections/FormSection.jsx'

function HomePage(){
  return (
    <div>
      <Hero />
      <About />
      <VolunteerCTAs />
      <Causes />
      <About2/>
      <AreaSection/>
      <StorySection />
      <News />
      <FormSection/>
    </div>
  )
}

export default HomePage
