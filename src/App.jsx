import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import FooterSection from './sections/FooterSection.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import MediaPage from './pages/MediaPage.jsx'
import CertificatesPage from './pages/gallery/CertificatesPage.jsx'
import AwardsPage from './pages/gallery/AwardsPage.jsx'
import PhotosPage from './pages/gallery/PhotosPage.jsx'
import ArticlesPage from './pages/gallery/ArticlesPage.jsx'
import SnehaveeduPage from './pages/projects/SnehaveeduPage.jsx'
import SnehadishaPage from './pages/projects/SnehadishaPage.jsx'
import SnehasenaPage from './pages/projects/SnehasenaPage.jsx'
import SnehapadamPage from './pages/projects/SnehapadamPage.jsx'
import SnehasanthwanamPage from './pages/projects/SnehasanthwanamPage.jsx'
import SnehavandiPage from './pages/projects/SnehavandiPage.jsx'
import SnehamangalyamPage from './pages/projects/SnehamangalyamPage.jsx'
import SnehanamPage from './pages/projects/SnehanamPage.jsx'
import SnehapuniyamPage from './pages/projects/SnehapuniyamPage.jsx'

function App(){
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery/certificates" element={<CertificatesPage />} />
          <Route path="/gallery/awards" element={<AwardsPage />} />
          <Route path="/gallery/photos" element={<PhotosPage />} />
          <Route path="/gallery/articles" element={<ArticlesPage />} />
          <Route path="/projects/snehaveedu" element={<SnehaveeduPage />} />
          <Route path="/projects/snehadisha" element={<SnehadishaPage />} />
          <Route path="/projects/snehasena" element={<SnehasenaPage />} />
          <Route path="/projects/snehapadam" element={<SnehapadamPage />} />
          <Route path="/projects/snehasanthwanam" element={<SnehasanthwanamPage />} />
          <Route path="/projects/snehavandi" element={<SnehavandiPage />} />
          <Route path="/projects/snehamangalyam" element={<SnehamangalyamPage />} />
          <Route path="/projects/snehanam" element={<SnehanamPage />} />
          <Route path="/projects/snehapuniyam" element={<SnehapuniyamPage />} />
        </Routes>
        <FooterSection/>
      </div>
    </Router>
  )
}

export default App
