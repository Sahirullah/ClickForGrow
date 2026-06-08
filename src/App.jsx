import { useState, useEffect, useRef } from 'react'
import graLogo from './assets/logo.png'
import heroImg1 from './assets/hero_Section1.webp'
import heroImg2 from './assets/hero_Section2.webp'
import serviceImg2 from './assets/Services/digital-marketing-300x223.png.webp'
import aboutImg from './assets/About_Section1.webp'
import team1 from './assets/Team/1 (2).jpg'
import team2 from './assets/Team/2.jpg'
import team3 from './assets/Team/3.jpg'
import team4 from './assets/Team/4.jpg'
import team5 from './assets/Team/5.jpg'
import team6 from './assets/Team/6.jpg'
import workProcess1 from './assets/Work Process/reqirement.png'
import workProcess2 from './assets/Work Process/design.png'
import workProcess3 from './assets/Work Process/final work.png'
import './App.css'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [teamScrollPosition, setTeamScrollPosition] = useState(0)
  const teamScrollRef = useRef(null)
  const servicesScrollRef = useRef(null)
  
  const heroImages = [heroImg1, heroImg2]
  const teamMembers = 6
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const scrollContainer = teamScrollRef.current
    if (!scrollContainer) return

    const scrollInterval = setInterval(() => {
      const scrollAmount = 3
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth
      
      if (scrollContainer.scrollLeft >= maxScroll - 5) {
        scrollContainer.scrollLeft = 0
        setTeamScrollPosition(0)
      } else {
        scrollContainer.scrollLeft += scrollAmount
        const scrollPercent = scrollContainer.scrollLeft / maxScroll
        const dotPosition = Math.floor(scrollPercent * teamMembers) % teamMembers
        setTeamScrollPosition(dotPosition)
      }
    }, 25)

    return () => clearInterval(scrollInterval)
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

        <button className="carousel-btn prev-btn" onClick={prevSlide}>❮</button>
        <button className="carousel-btn next-btn" onClick={nextSlide}>❯</button>

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

          <div className="services-scroll-wrapper">
            <button className="services-scroll-btn prev-btn" onClick={() => {
              const wrapper = document.querySelector('.services-scroll-content');
              wrapper.scrollBy({ left: -300, behavior: 'smooth' });
            }}>❮</button>

            <div className="services-scroll-content">
              <div className="service-card square">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19.914A8.935 8.935 0 0 1 12 19c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4c0 1.042.372 2.022 1 2.84M7 14s1.5 1 5 1 5-1 5-1M7 14c-1.164.856-1.845 1.97-2 3.154M17 14c1.164.856 1.845 1.97 2 3.154"></path>
                  </svg>
                </div>
                <h3>Web Development</h3>
                <p>Pellentesque nec the condimentum nec lorem nulla augue elt ultricies ac iaculus ut euismod quis sapien.</p>
              </div>

              <div className="service-card square">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <path d="M12 18h.01"></path>
                  </svg>
                </div>
                <h3>App Development</h3>
                <p>Pellentesque nec the condimentum nec lorem nulla augue elt ultricies ac iaculus ut euismod quis sapien.</p>
              </div>

              <div className="service-card square">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                    <path d="M11 8v6M8 11h6"></path>
                  </svg>
                </div>
                <h3>SEO Optimization</h3>
                <p>Pellentesque nec the condimentum nec lorem nulla augue elt ultricies ac iaculus ut euismod quis sapien.</p>
              </div>

              <div className="service-card square">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3>UI/UX Design</h3>
                <p>Pellentesque nec the condimentum nec lorem nulla augue elt ultricies ac iaculus ut euismod quis sapien.</p>
              </div>

              <div className="service-card square">
                <div className="service-icon">
                  <img src={serviceImg2} alt="Digital Marketing" />
                </div>
                <h3>Digital Marketing</h3>
                <p>Pellentesque nec the condimentum nec lorem nulla augue elt ultricies ac iaculus ut euismod quis sapien.</p>
              </div>

              <div className="service-card square">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3>SaaS Solutions</h3>
                <p>Pellentesque nec the condimentum nec lorem nulla augue elt ultricies ac iaculus ut euismod quis sapien.</p>
              </div>
            </div>

            <button className="services-scroll-btn next-btn" onClick={() => {
              const wrapper = document.querySelector('.services-scroll-content');
              wrapper.scrollBy({ left: 300, behavior: 'smooth' });
            }}>❯</button>
          </div>
        </div>

        <button className="scroll-to-top">↑</button>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-wrapper">
          <div className="about-left">
            <div className="about-image-container">
              <img src={aboutImg} alt="About Gratech" className="about-main-img" />
              <div className="about-circle"></div>
              <div className="about-video-box">
                <img src={heroImg2} alt="Video" className="about-video-img" />
                <div className="about-play">
                  <svg viewBox="0 0 24 24" fill="white">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="about-right">
            <span className="about-tag">🔵 ABOUT GRATECH</span>
            <h2 className="about-heading">We Strive To Offer Intelligent Business Solutions</h2>
            
            <p className="about-text">
              Aonsectetur adipiscing elit aenean scelerisque augue vitae consequat aisque eget congue velit in cursus sodales the turpis euismod quis sapien the condimentum nec lorem nulla augue.
            </p>

            <div className="about-boxes">
              <div className="about-box">
                <div className="about-box-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                </div>
                <div>
                  <h4>Best Services</h4>
                  <p>Scelerisque augue the consequat sodales</p>
                </div>
              </div>

              <div className="about-box">
                <div className="about-box-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h4>24/7 Call Support</h4>
                  <p>Scelerisque augue the consequat sodales</p>
                </div>
              </div>
            </div>

            <div className="about-action">
              <button className="about-btn">Explore More →</button>
              
              <div className="about-profile">
                <img src={heroImg2} alt="Ronald Richards" className="profile-pic" />
                <div>
                  <p className="profile-name">Ronald Richards</p>
                  <p className="profile-role">Co-Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="white" strokeWidth="0">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="stat-content">
              <h3>6,561+</h3>
              <p>Satisfied Clients</p>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="white" strokeWidth="0">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
            </div>
            <div className="stat-content">
              <h3>600+</h3>
              <p>Finished Projects</p>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="white" strokeWidth="0">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div className="stat-content">
              <h3>250+</h3>
              <p>Skilled Experts</p>
            </div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <svg viewBox="0 0 24 24" fill="white" strokeWidth="0">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
            </div>
            <div className="stat-content">
              <h3>590+</h3>
              <p>Media Posts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="team">
        <div className="team-container">
          <div className="team-header">
            <div className="team-title">
              <span className="team-label">🔵 OUR TEAM</span>
              <h2>Meet Our Talented Experts</h2>
            </div>
            <button className="view-all-team-btn">View All Team →</button>
          </div>

          <div className="team-scroll-wrapper" ref={teamScrollRef}>
            <div className="team-grid">
              <div className="team-card">
                <div className="team-image">
                  <img src={team1} alt="Team Member 1" />
                  <div className="team-overlay">
                    <div className="team-info">
                      <span className="team-category">Technology</span>
                      <h3>Platform Integration</h3>
                      <a href="#" className="team-link">
                        <svg viewBox="0 0 24 24" fill="white">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-card">
                <div className="team-image">
                  <img src={team2} alt="Team Member 2" />
                  <div className="team-overlay">
                    <div className="team-info">
                      <span className="team-category">Solution</span>
                      <h3>IT Management</h3>
                      <a href="#" className="team-link">
                        <svg viewBox="0 0 24 24" fill="white">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-card">
                <div className="team-image">
                  <img src={team3} alt="Team Member 3" />
                  <div className="team-overlay">
                    <div className="team-info">
                      <span className="team-category">Technology</span>
                      <h3>Platform Integration</h3>
                      <a href="#" className="team-link">
                        <svg viewBox="0 0 24 24" fill="white">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-card">
                <div className="team-image">
                  <img src={team4} alt="Team Member 4" />
                  <div className="team-overlay">
                    <div className="team-info">
                      <span className="team-category">Solution</span>
                      <h3>Web Development</h3>
                      <a href="#" className="team-link">
                        <svg viewBox="0 0 24 24" fill="white">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-card">
                <div className="team-image">
                  <img src={team5} alt="Team Member 5" />
                  <div className="team-overlay">
                    <div className="team-info">
                      <span className="team-category">Design</span>
                      <h3>UI/UX Design</h3>
                      <a href="#" className="team-link">
                        <svg viewBox="0 0 24 24" fill="white">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-card">
                <div className="team-image">
                  <img src={team6} alt="Team Member 6" />
                  <div className="team-overlay">
                    <div className="team-info">
                      <span className="team-category">Development</span>
                      <h3>Full Stack Developer</h3>
                      <a href="#" className="team-link">
                        <svg viewBox="0 0 24 24" fill="white">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-card">
                <div className="team-image">
                  <img src={team1} alt="Team Member 1" />
                  <div className="team-overlay">
                    <div className="team-info">
                      <span className="team-category">Technology</span>
                      <h3>Platform Integration</h3>
                      <a href="#" className="team-link">
                        <svg viewBox="0 0 24 24" fill="white">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-card">
                <div className="team-image">
                  <img src={team2} alt="Team Member 2" />
                  <div className="team-overlay">
                    <div className="team-info">
                      <span className="team-category">Solution</span>
                      <h3>IT Management</h3>
                      <a href="#" className="team-link">
                        <svg viewBox="0 0 24 24" fill="white">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-card">
                <div className="team-image">
                  <img src={team3} alt="Team Member 3" />
                  <div className="team-overlay">
                    <div className="team-info">
                      <span className="team-category">Technology</span>
                      <h3>Platform Integration</h3>
                      <a href="#" className="team-link">
                        <svg viewBox="0 0 24 24" fill="white">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-card">
                <div className="team-image">
                  <img src={team4} alt="Team Member 4" />
                  <div className="team-overlay">
                    <div className="team-info">
                      <span className="team-category">Solution</span>
                      <h3>Web Development</h3>
                      <a href="#" className="team-link">
                        <svg viewBox="0 0 24 24" fill="white">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-card">
                <div className="team-image">
                  <img src={team5} alt="Team Member 5" />
                  <div className="team-overlay">
                    <div className="team-info">
                      <span className="team-category">Design</span>
                      <h3>UI/UX Design</h3>
                      <a href="#" className="team-link">
                        <svg viewBox="0 0 24 24" fill="white">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-card">
                <div className="team-image">
                  <img src={team6} alt="Team Member 6" />
                  <div className="team-overlay">
                    <div className="team-info">
                      <span className="team-category">Development</span>
                      <h3>Full Stack Developer</h3>
                      <a href="#" className="team-link">
                        <svg viewBox="0 0 24 24" fill="white">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="team-dots">
            {Array.from({ length: teamMembers }).map((_, index) => (
              <button
                key={index}
                className={`team-dot ${index === teamScrollPosition ? 'active' : ''}`}
                onClick={() => {
                  if (teamScrollRef.current) {
                    const cardWidth = 250 + 30
                    teamScrollRef.current.scrollLeft = index * cardWidth
                  }
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <div className="why-choose-container">
          <div className="why-choose-header">
            <span className="why-choose-label">EXCELLENCE</span>
            <h2>Why Choose <span className="highlight">Gratech</span>?</h2>
            <p>We combine technical excellence with business acumen to deliver solutions that drive real results</p>
          </div>

          <div className="why-choose-grid">
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
              </div>
              <div className="why-choose-badge">01</div>
              <h3>Rapid Deployment</h3>
              <p>Launch your product faster with our agile development methodology and streamlined workflows.</p>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="why-choose-badge">02</div>
              <h3>Security-First Mindset</h3>
              <p>Enterprise-grade security measures to protect your data and ensure compliance at every layer.</p>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </div>
              <div className="why-choose-badge">03</div>
              <h3>Scalable Architecture</h3>
              <p>Built to grow with your business. Our solutions scale seamlessly from startup to enterprise.</p>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <div className="why-choose-badge">04</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock technical support and maintenance to keep your systems running smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Working Procedure Section */}
      <section className="working-procedure">
        <div className="procedure-container">
          <div className="procedure-header">
            <span className="procedure-label">🔵 WORK PROCESS</span>
            <h2>Our Development Process</h2>
          </div>

          <div className="procedure-grid">
            <div className="procedure-card">
              <div className="procedure-image-wrapper">
                <img src={workProcess1} alt="Define Requirements" className="procedure-image" />
                <div className="procedure-badge">1</div>
              </div>
              <h3>Define Requirements</h3>
              <p>In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur</p>
            </div>

            <div className="procedure-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>

            <div className="procedure-card">
              <div className="procedure-image-wrapper">
                <img src={workProcess2} alt="Design & Prototyping" className="procedure-image" />
                <div className="procedure-badge">2</div>
              </div>
              <h3>Design & Prototyping</h3>
              <p>In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur</p>
            </div>

            <div className="procedure-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>

            <div className="procedure-card">
              <div className="procedure-image-wrapper">
                <img src={workProcess3} alt="Final Solution" className="procedure-image" />
                <div className="procedure-badge">3</div>
              </div>
              <h3>Final Solution</h3>
              <p>In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Gratech Section */}
      <section className="why-choose">
        <div className="why-choose-container">
          <div className="why-choose-header">
            <span className="why-choose-label">EXCELLENCE</span>
            <h2>Why Choose <span className="highlight">Gratech</span>?</h2>
            <p>We combine technical excellence with business acumen to deliver solutions that drive real results</p>
          </div>

          <div className="why-choose-grid">
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div className="why-choose-number">01</div>
              <h3>Rapid Deployment</h3>
              <p>Launch your product faster with our agile development methodology and streamlined workflows.</p>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.72-7 8.77V12H5V6.3l7-3.11v8.8z"/>
                </svg>
              </div>
              <div className="why-choose-number">02</div>
              <h3>Security-First Mindset</h3>
              <p>Enterprise-grade security measures to protect your data and ensure compliance at every layer.</p>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="why-choose-number">03</div>
              <h3>Scalable Architecture</h3>
              <p>Built to grow with your business. Our solutions scale seamlessly from startup to enterprise.</p>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
              </div>
              <div className="why-choose-number">04</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock technical support and maintenance to keep your systems running smoothly.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
