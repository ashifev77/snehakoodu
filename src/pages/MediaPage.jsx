import './MediaPage.css'

export default function MediaPage() {
  const videos = [
    { id: 1, title: 'അന്ധതയുടെ ലോകത്തിൽ നിന്നും വെളിച്ചത്തിന്റെ നിറവിലേക്ക്', date: '25 Sept', videoId: 'n97ipYGIhsA' },
    { id: 2, title: 'ദുരന്തത്തിന്റെ നടുക്കത്തില്‍ കൂട്ടിക്കല്‍-സഹായഹസ്തവുമായി സ്നേഹക്കൂട് അഭയമന്ദിരവും MAUKയും', date: '23 Sept', videoId: 'JteZJNIGAso' },
    { id: 3, title: 'കൂട്ടിക്കൽ ദുരന്ത ഭൂമിയിൽ കരുതലോടെ സ്നേഹസേന', date: '21 Sept', videoId: 'SpSOSk28YhY' },
    { id: 4, title: 'കൂട്ടിക്കൽ ദുരന്ത ഭൂമിയിൽ കരുതലോടെ സ്നേഹസേന!', date: '20 Oct', videoId: 'SRkSIDUMIqw' },
    { id: 5, title: 'സ്നേഹസേനയുടെ സന്നദ്ധ രക്തദാനം', date: '02 Oct', videoId: 'JR1F4RQQtvk' },
    { id: 6, title: 'ലോക വയോജന ദിനാഘോഷങ്ങൾ', date: '01 Oct', videoId: '6TgglZPakfM' },
    { id: 7, title: '2021ലെ സംസ്ഥാന ടെലിവിഷൻ അവാർഡ് ജേതാവ് ശാലു കുര്യൻ സ്നേഹക്കൂട് കുടുംബത്തിൽ', date: '29 Sept', videoId: 'WfTclFIWeEE' },
    { id: 8, title: 'Mammootty vs Mohanalal ആരെയാണ് സന്തോഷ് പണ്ഡിറ്റിന് കൂടുതൽ ഇഷ്ടം?', date: '25 Sept', videoId: 'WxA2d8eohgU' },
    { id: 9, title: 'മംഗലശ്ശേരി കടവിലെ ആമ്പൽ വസന്തം നിങ്ങൾ കണ്ടിട്ടുണ്ടോ?', date: '21 Sept', videoId: 'Hn0FiSfldJk' },
    { id: 10, title: 'ഇതൊക്കെ പോരെ മച്ചാനെ KERALA POLICEന് ഒരു സല്യൂട്ട് അടിക്കാൻ!', date: '20 Sept', videoId: 'aGeSxU5iS1A' },
    { id: 11, title: 'നാല്പത്തിമല ഇടവകയുടെ സ്നേഹം സ്നേഹക്കൂട് കുടുംബത്തിൽ', date: '10 Sept', videoId: 'F1VdMeWtOkE' },
    { id: 12, title: 'ഈ പുരോഹിതന്‍റെ വാക്കുകള്‍ കേള്‍ക്കാതെ പോയാല്‍..', date: '20 Sept', videoId: 'Hh-7r_apquc' },
    { id: 13, title: 'Santhosh Pandit at Snehakoodu Abhayamandiram', date: '27 Aug', videoId: '9-5UOf6nLUE' },
    { id: 14, title: 'സ്നേഹക്കൂട് അഭയമന്ദിരം കുട്ടികളുടെ ആശംസകൾ', date: '15 Aug', videoId: 'qP3vF8K0234' },
    { id: 15, title: 'സ്നേഹക്കൂട് അഭയമന്ദിരം ആദിവാസി കുട്ടികൾ', date: '10 Aug', videoId: 'mK8vL9Z9qYo' },
    { id: 16, title: 'Snehakoodu Abhayamandiram Documentary', date: '05 Aug', videoId: 'dP3vF8K0234' },
    { id: 17, title: 'കുട്ടികളുടെ പ്രതിഭ പ്രകടനം', date: '01 Aug', videoId: 'xP3vF8K0234' },
    { id: 18, title: 'വിഷു ആഘോഷം 2024', date: '14 Apr', videoId: 'yP3vF8K0234' },
  ]

  return (
    <div className="media-page">
      {/* Hero Section */}
      <section className="media-hero">
        <div className="media-hero-overlay">
          <h1 className="media-hero-title">Snehakoodu Media</h1>
          <p className="media-hero-subtitle">FIND A NEED AND FILL IT, FIND A HURT AND HEAL IT.</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container media-content-wrapper">
        
        {/* Updates Section */}
        <section className="media-updates-section">
          <div className="updates-header">
            <p className="updates-subtitle">Follow us on Social Media</p>
            <h2 className="updates-title">NEVER MISS OUT ANY UPDATES FROM SNEHAKOODU ABHAYAMANDIRAM</h2>
            <p className="updates-description">
              Stay connected with us through our social media channels to get the latest updates, 
              stories, and events from Snehakoodu Abhayamandiram.
            </p>
            <a href="#" className="btn btn-primary">Subscribe</a>
          </div>
        </section>

        {/* Featured Video Section */}
        <section className="featured-video-section">
          <div className="featured-content">
            <div className="featured-text">
              <span className="featured-subtitle">The Story of us</span>
              <h3>How did this come to our attention?</h3>
              <p>
                Help others without any reason and give without the expectation of receiving 
                anything in return.
              </p>
              <a href="https://www.youtube.com/channel/UC0HJ3dGYy7QcIjxpkI7lAfA" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                Download PDF
              </a>
            </div>
            <div className="featured-video">
              <div className="video-embed">
                <iframe
                  src="https://www.youtube.com/embed/EV807vrWD6c"
                  title="Snehakoodu Featured Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Video Grid Section */}
        <section className="video-grid-section">
          <div className="video-grid">
            {videos.map((video) => (
              <div key={video.id} className="video-card">
                <div className="video-card-embed">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="video-date-badge">{video.date}</div>
                </div>
                <div className="video-card-content">
                  <h4>{video.title}</h4>
                  <p className="video-meta">{video.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
