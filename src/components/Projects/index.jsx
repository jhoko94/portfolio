import React, { useState } from 'react';
import './index.css';

const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    
    const projects = [
        {
            title: "INDICAR",
            description: "Platform IoT yang mendigitalkan kendaraan menyediakan konektivitas dan pemantauan telemetri sehingga kendaraan dapat digunakan dengan nyaman, aman dan secara produktif.",
            image: "/image/img-indicar.png",
            tech: ["logo-jquery.svg", "logo-bootstrap.svg", "logo-leaflet.svg", "logo-postman.svg", "logo-gitlab.svg", "logo-jenkins.svg", "logo-jira.svg"]
        },
        {
            title: "KBM ONLINE",
            description: "Telkom memberikan fasilitas kepada karyawan untuk memesan KBM (kendaraan), aplikasi ini digunakan untuk memesan mobil, untuk memesan mobil harus disetujui oleh atasan karyawan dan terintegrasi dengan platform iFMS.",
            image: "/image/img-kbm.png",
            tech: ["logo-nuxt.svg", "logo-vuetify.svg", "logo-leaflet.svg", "logo-postman.svg", "logo-gitlab.svg", "logo-jenkins.svg", "logo-jira.svg"]
        },
        {
            title: "INTEGRATED FLEET MANAGEMENT SYSTEM (IFMS)",
            description: "iFMS adalah platform yang bertujuan untuk mengelola, memanfaatkan, menjaga armada Telkom sesuai fitur masing-masing. Fitur-fitur adalah ketertiban, pemeliharaan, pajak, dll.",
            image: "/image/img-ifms.png",
            tech: ["logo-nuxt.svg", "logo-vuetify.svg", "logo-leaflet.svg", "logo-postman.svg", "logo-gitlab.svg", "logo-jenkins.svg", "logo-jira.svg"]
        },
        {
            title: "DTP INTERNSHIP",
            description: "DTP Internship adalah platform digital yang mendukung pengelolaan program magang di Telkom Indonesia.",
            image: "/image/img-dtp.png",
            tech: ["logo-nextjs.svg", "logo-react.svg", "logo-antd.svg", "logo-legion.svg", "logo-postman.svg", "logo-gitlab.svg", "logo-jenkins.svg", "logo-jira.svg"]
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }
    };

    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <h2 className="section-title">RECENT PROJECTS</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    <h4>Teknologi yang digunakan:</h4>
                                    <div className="tech-logos">
                                        {project.tech.map((logo, logoIndex) => (
                                            <img 
                                                key={logoIndex} 
                                                src={`/image/${logo}`} 
                                                alt={logo} 
                                                width={logo.includes('jquery') || logo.includes('leaflet') || logo.includes('next') || logo.includes('legion') ? 70 : 25}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div 
                    className="projects-slider"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div 
                        className="projects-slider-wrapper"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {projects.map((project, index) => (
                            <div key={index} className="project-slide">
                                <div className="project-card">
                                    <div className="project-image">
                                        <img src={project.image} alt={project.title} />
                                    </div>
                                    <div className="project-content">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description">{project.description}</p>
                                        <div className="project-tech">
                                            <h4>Teknologi yang digunakan:</h4>
                                            <div className="tech-logos">
                                                {project.tech.map((logo, logoIndex) => (
                                                    <img 
                                                        key={logoIndex} 
                                                        src={`/image/${logo}`} 
                                                        alt={logo} 
                                                        width={logo.includes('jquery') || logo.includes('leaflet') || logo.includes('next') || logo.includes('legion') ? 70 : 25}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <button className="slider-btn prev-btn" onClick={prevSlide} aria-label="Previous slide">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6"/>
                        </svg>
                    </button>
                    <button className="slider-btn next-btn" onClick={nextSlide} aria-label="Next slide">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6"/>
                        </svg>
                    </button>
                    
                    <div className="slider-dots">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${currentSlide === index ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;

