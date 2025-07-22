import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Linkedin, Award, Briefcase, GraduationCap, ExternalLink, ArrowRight, Star } from 'lucide-react';
import { mockData } from '../data/mock';

const Portfolio = () => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % mockData.heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('[id]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 100 ? 'bg-black/90 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white tracking-wider">
              <span className="text-purple-400">SANDYA</span> TRIVANI
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="nav-link text-gray-300 hover:text-purple-400 transition-colors">About</a>
              <a href="#experience" className="nav-link text-gray-300 hover:text-purple-400 transition-colors">Experience</a>
              <a href="#skills" className="nav-link text-gray-300 hover:text-purple-400 transition-colors">Skills</a>
              <a href="#contact" className="nav-link text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden min-h-screen flex items-center">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>

        {/* Hero Content Frame */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-purple-400 text-sm font-mono uppercase tracking-widest">
                Executive Administrative Professional
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                SANDYA
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  TRIVANI
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                10+ Years of International Administrative Excellence Across US, UK, Hong Kong & Indonesia
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">10+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">50+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">7</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Certifications</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex space-x-4">
              <a href="#experience" className="cta-button bg-purple-600 hover:bg-purple-700">
                View Experience
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#contact" className="cta-button-outline border-gray-400 text-gray-300 hover:border-purple-400 hover:text-purple-400">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Bogor, Indonesia</span>
                </div>
                <div className="space-y-3">
                  {mockData.coreSkills.slice(0, 4).map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Star className="w-4 h-4 text-purple-400 fill-purple-400" />
                      <span className="text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Background Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-400 w-8 h-8" />
        </div>
      </section>

      {/* About Section Frame */}
      <section id="about" className="section-frame bg-gray-900 relative">
        <div className="section-content">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="section-header">
              <span className="section-label">Who I Am</span>
              <h2 className="section-title">About Me</h2>
              <p className="section-subtitle">
                A seasoned administrative professional with expertise in international markets
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="content-card">
                <h3 className="text-2xl font-semibold text-white mb-6">Executive Summary</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {mockData.personalInfo.summary}
                </p>
                <div className="flex items-center space-x-4 text-purple-400">
                  <MapPin className="w-5 h-5" />
                  <span>{mockData.personalInfo.location}</span>
                </div>
              </div>
              
              <div className="content-card">
                <h3 className="text-2xl font-semibold text-white mb-6">Core Expertise</h3>
                <div className="grid grid-cols-1 gap-4">
                  {mockData.coreSkills.map((skill, index) => (
                    <div key={index} className="expertise-item">
                      <div className="flex items-center justify-between">
                        <span className="text-purple-400 font-medium">{skill.category}</span>
                        <Briefcase className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="text-gray-300 text-lg">{skill.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section Frame */}
      <section id="experience" className="section-frame bg-black relative">
        <div className="section-content">
          <div className={`transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="section-header">
              <span className="section-label">Professional Journey</span>
              <h2 className="section-title">Experience</h2>
              <p className="section-subtitle">
                A decade of excellence across international markets
              </p>
            </div>

            <div className="experience-timeline">
              {mockData.experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{exp.position}</h3>
                        <div className="text-purple-400 font-medium">{exp.company}</div>
                        <div className="text-gray-400 text-sm">{exp.location}</div>
                      </div>
                      <div className="text-right">
                        <div className="timeline-period">{exp.period}</div>
                      </div>
                    </div>
                    <div className="timeline-achievements">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="achievement-item">
                          <ArrowRight className="w-4 h-4 text-purple-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section Frame */}
      <section id="skills" className="section-frame bg-gray-900 relative">
        <div className="section-content">
          <div className={`transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="section-header">
              <span className="section-label">Capabilities</span>
              <h2 className="section-title">Skills & Certifications</h2>
              <p className="section-subtitle">
                Technical expertise and professional certifications
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Technical Skills */}
              <div className="content-card">
                <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                  <Briefcase className="w-6 h-6 mr-3 text-purple-400" />
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {mockData.skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-purple-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ 
                            width: isVisible.skills ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="content-card">
                <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-purple-400" />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {mockData.certifications.map((cert, index) => (
                    <div key={index} className="cert-card">
                      <div className="cert-icon">
                        <GraduationCap className="w-5 h-5 text-purple-400" />
                      </div>
                      <div className="cert-content">
                        <h4 className="text-white font-medium mb-1">{cert.name}</h4>
                        <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                        <p className="text-purple-400 text-xs font-mono uppercase">{cert.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Frame */}
      <section id="contact" className="section-frame bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
        <div className="section-content relative z-10">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="section-header">
              <span className="section-label">Get In Touch</span>
              <h2 className="section-title">Let's Connect</h2>
              <p className="section-subtitle">
                Ready to bring exceptional administrative expertise to your team
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="content-card">
                <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="contact-item">
                    <Mail className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="text-gray-400 text-sm">Email</div>
                      <a href={`mailto:${mockData.contact.email}`} className="text-white hover:text-purple-400 transition-colors">
                        {mockData.contact.email}
                      </a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <Phone className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="text-gray-400 text-sm">Phone</div>
                      <a href={`tel:${mockData.contact.phone}`} className="text-white hover:text-purple-400 transition-colors">
                        {mockData.contact.phone}
                      </a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <Linkedin className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="text-gray-400 text-sm">LinkedIn</div>
                      <a href={mockData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors flex items-center">
                        View Profile
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <MapPin className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="text-gray-400 text-sm">Location</div>
                      <span className="text-white">{mockData.contact.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="content-card">
                <h3 className="text-2xl font-semibold text-white mb-8">Send Message</h3>
                <form className="space-y-6">
                  <div className="form-group">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="text" 
                      placeholder="Subject" 
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <textarea 
                      rows="5" 
                      placeholder="Your Message" 
                      className="form-input resize-none"
                    ></textarea>
                  </div>
                  <button type="submit" className="cta-button bg-purple-600 hover:bg-purple-700 w-full">
                    Send Message
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="text-2xl font-bold text-white tracking-wider mb-2">
              <span className="text-purple-400">SANDYA</span> TRIVANI
            </div>
            <p className="text-gray-400">Executive Administrative Professional | International Remote Work Specialist</p>
          </div>
          <div className="flex justify-center space-x-8 mb-8">
            <a href={`mailto:${mockData.contact.email}`} className="text-gray-400 hover:text-purple-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href={mockData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-600 text-sm">© 2025 Sandya Trivani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;