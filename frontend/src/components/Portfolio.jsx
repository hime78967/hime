import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Linkedin, Award, Briefcase, GraduationCap } from 'lucide-react';
import { mockData } from '../data/mock';

const Portfolio = () => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % mockData.heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
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
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-display text-light-pink uppercase tracking-wider">
              Sandya Trivani
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="nav-link">About</a>
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        {mockData.heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide absolute inset-0 transition-all duration-700 ${
              index === currentHeroSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{ 
              background: `linear-gradient(135deg, ${slide.bgColor} 0%, ${slide.accentColor} 100%)` 
            }}
          >
            <div className="hero-grid h-full">
              <div className="flex flex-col justify-center p-8 md:p-16 text-white">
                <div className="hero-content">
                  <h2 className="text-xl md:text-2xl font-normal mb-4 opacity-90">
                    {slide.title}
                  </h2>
                  <h3 className="text-lg md:text-xl font-normal pb-6 opacity-70">
                    {slide.subtitle}
                  </h3>
                  <div className="flex items-center gap-3 flex-wrap mb-8">
                    {slide.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="service-button">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed opacity-80 max-w-xl">
                    {slide.description}
                  </p>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center p-8">
                <div className="relative">
                  <div className="w-80 h-80 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-display text-white/90 mb-4">
                        {slide.yearExperience}+
                      </div>
                      <div className="text-lg text-white/80">
                        Years Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 left-8 md:left-16">
              <p className="font-display uppercase text-6xl md:text-8xl lg:text-9xl leading-none text-white/10">
                {slide.brandText}
              </p>
            </div>
          </div>
        ))}
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/60 w-8 h-8" />
        </div>

        {/* Hero navigation dots */}
        <div className="absolute bottom-8 right-8 flex space-x-3">
          {mockData.heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentHeroSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-dark-blue to-mid-blue text-white">
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-6xl font-display uppercase mb-12 text-center">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-normal mb-6 text-light-blue">
                  Executive Administrative Professional
                </h3>
                <p className="text-lg leading-relaxed opacity-90 mb-6">
                  {mockData.personalInfo.summary}
                </p>
                <div className="flex items-center gap-4 text-light-blue">
                  <MapPin className="w-5 h-5" />
                  <span>{mockData.personalInfo.location}</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-normal mb-6 text-light-blue">
                  Core Expertise
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {mockData.coreSkills.map((skill, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-sm font-mono uppercase tracking-wide text-light-blue mb-1">
                        {skill.category}
                      </div>
                      <div className="text-lg">{skill.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 bg-gradient-to-br from-mid-purple to-dark-green">
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-6xl font-display uppercase mb-12 text-center text-white">
              Experience
            </h2>
            <div className="max-w-4xl mx-auto">
              {mockData.experience.map((exp, index) => (
                <div key={index} className="experience-card mb-8 last:mb-0">
                  <div className="grid md:grid-cols-4 gap-6 p-8 rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/15 transition-all duration-300">
                    <div className="md:col-span-1">
                      <div className="text-sm font-mono uppercase tracking-wide text-light-yellow mb-2">
                        {exp.period}
                      </div>
                      <div className="text-lg font-normal text-white mb-2">
                        {exp.position}
                      </div>
                      <div className="text-md text-light-pink">
                        {exp.company}
                      </div>
                      <div className="text-sm text-white/70 mt-1">
                        {exp.location}
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <ul className="space-y-2 text-white/90">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3">
                            <Briefcase className="w-4 h-4 mt-1 text-light-yellow flex-shrink-0" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <section id="skills" className="py-24 bg-gradient-to-br from-light-yellow to-mid-orange text-black">
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-6xl font-display uppercase mb-12 text-center">
              Skills & Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Skills */}
              <div>
                <h3 className="text-2xl font-normal mb-8 flex items-center gap-3">
                  <Briefcase className="w-8 h-8" />
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {mockData.skills.map((skill, index) => (
                    <div key={index} className="skill-card p-4 rounded-lg bg-black/10 hover:bg-black/20 transition-all duration-300">
                      <div className="font-normal mb-2">{skill.name}</div>
                      <div className="w-full bg-black/20 rounded-full h-2">
                        <div 
                          className="bg-dark-green h-2 rounded-full transition-all duration-1000"
                          style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-normal mb-8 flex items-center gap-3">
                  <Award className="w-8 h-8" />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {mockData.certifications.map((cert, index) => (
                    <div key={index} className="cert-card p-6 rounded-lg bg-black/10 hover:bg-black/20 transition-all duration-300">
                      <h4 className="font-normal text-lg mb-2">{cert.name}</h4>
                      <p className="text-black/70 mb-2">{cert.issuer}</p>
                      <p className="text-sm font-mono uppercase tracking-wide">{cert.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-black to-dark-grey text-white">
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-6xl font-display uppercase mb-12 text-center">
              Let's Connect
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-normal mb-8 text-light-pink">
                    Get In Touch
                  </h3>
                  <p className="text-lg leading-relaxed opacity-90 mb-8">
                    Ready to bring exceptional administrative expertise and international experience to your team. Let's discuss how I can contribute to your organization's success.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6 text-light-pink" />
                      <a href={`mailto:${mockData.contact.email}`} className="text-lg hover:text-light-pink transition-colors">
                        {mockData.contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6 text-light-pink" />
                      <a href={`tel:${mockData.contact.phone}`} className="text-lg hover:text-light-pink transition-colors">
                        {mockData.contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Linkedin className="w-6 h-6 text-light-pink" />
                      <a href={mockData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-light-pink transition-colors">
                        LinkedIn Profile
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="w-6 h-6 text-light-pink" />
                      <span className="text-lg">{mockData.contact.location}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="contact-form p-8 rounded-xl bg-white/5 backdrop-blur-sm">
                    <h3 className="text-xl font-normal mb-6">Send a Message</h3>
                    <form className="space-y-6">
                      <div>
                        <input 
                          type="text" 
                          placeholder="Your Name" 
                          className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-light-pink focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <input 
                          type="email" 
                          placeholder="Your Email" 
                          className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-light-pink focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <textarea 
                          rows="4" 
                          placeholder="Your Message" 
                          className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-light-pink focus:outline-none transition-colors resize-none"
                        ></textarea>
                      </div>
                      <button type="submit" className="cta-button w-full">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white/60 text-center">
        <div className="container mx-auto px-6">
          <p className="font-display uppercase text-2xl tracking-wider mb-4 text-light-pink">
            Sandya Trivani
          </p>
          <p>Executive Administrative Professional | International Remote Work Specialist</p>
          <p className="mt-2 text-sm">© 2025 Sandya Trivani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;