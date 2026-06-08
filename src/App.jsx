import { useState, useEffect } from 'react'
import graLogo from './assets/logo.png'
import heroImg1 from './assets/hero_Section1.webp'
import heroImg2 from './assets/hero_Section2.webp'
import heroImg3 from './assets/hero_Section3.webp'
import serviceImg1 from './assets/Services/Q-icon-1.png.webp'
import serviceImg2 from './assets/Services/digital-marketing-300x223.png.webp'
import serviceImg3 from './assets/Services/Website-Development-300x223.png.webp'
import './App.css'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const heroImages = [heroImg1, heroImg2, heroImg3]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <>
      {/* Top Info Bar */}
      <div className="info-bar">
        <div className="info-bar-content">
          <span>✉ info@example.com</span>
          <span>📞 +208-6666-0112</span>
          <div className="social-icons">
            <a href="#">f</a>
            <a href="#">𝕏</a>
            <a href="#">in</a>
            <a href="#">▶</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <img src={graLogo} alt="Gratech Logo" className="logo-image" />
            <span>Gratech</span>
          </div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#pages">Pages</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
            <a href="#search" className="search-icon">🔍</a>
          </nav>
          <button className="cta-btn">Get A Quote →</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImages[currentSlide]})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <div className="badge-dot"></div>
            <span>BEST IT SOLUTION PROVIDER</span>
          </div>
          
          <h1 className="hero-title">
            Excellent It Services<br />for Your Success
          </h1>
          
          <p className="hero-description">
            Consectetur adipiscing elit aenean scelerisque at augue vitae consequat<br />
            quisque eget congue velit in cursus leo sed sodales est eget turpis.
          </p>
        </div>

        <div className="hero-decoration">
          <div className="geometric-shape"></div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-btn prev-btn" onClick={prevSlide}>❮</button>
        <button className="carousel-btn next-btn" onClick={nextSlide}>❯</button>

        {/* Dots Indicator */}
        <div className="carousel-dots">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services-container">
          <div className="services-header">
            <div className="services-title">
              <span className="services-label">🔵 WHAT WE OFFER</span>
              <h2>Excellent It Services</h2>
            </div>
            <button className="view-all-btn">View All Services →</button>
          </div>

          <div className="services-grid">
            {/* IT Management Card */}
            <div className="service-card">
              <div className="service-icon">
                <img src={serviceImg1} alt="IT Management" />
              </div>
              <h3>IT Management</h3>
              <p>Pellentesque nec the condimentum nec lorem nulla augue elt ultricies ac iaculus ut euismod quis sapien.</p>
            </div>

            {/* Cyber Security Card */}
            <div className="service-card">
              <div className="service-icon">
                <img src={serviceImg2} alt="Cyber Security" />
              </div>
              <h3>Cyber Security</h3>
              <p>Pellentesque nec the condimentum nec lorem nulla augue elt ultricies ac iaculus ut euismod quis sapien.</p>
            </div>

            {/* Web Development Card */}
            <div className="service-card">
              <div className="service-icon">
                <img src={serviceImg3} alt="Web Development" />
              </div>
              <h3>Web Development</h3>
              <p>Pellentesque nec the condimentum nec lorem nulla augue elt ultricies ac iaculus ut euismod quis sapien.</p>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button className="scroll-to-top">↑</button>
      </section>
    </>
  )
}

export default App
