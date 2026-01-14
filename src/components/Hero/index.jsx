import React from 'react';
import './index.css';

const Hero = () => {
    const handleClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <section id="home" className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-avatar">
                        <img src="/image/foto.png" alt="Joko Priyono" />
                    </div>
                    <div className="hero-text">
                        <h1 className="hero-name">Joko Priyono</h1>
                        <h2 className="hero-title">SOFTWARE ENGINEER</h2>
                        <p className="hero-description">
                            Software Engineer dengan 5+ tahun pengalaman dalam pengembangan aplikasi software dan web full-stack. 
                            Berpengalaman dalam pengelolaan database (SQL Server, PostgreSQL), database migration, serta pengembangan 
                            aplikasi menggunakan React.js, Vue.js, dan Node.js. Terbiasa dengan integrasi berbagai internal services 
                            dan third-party components, implementasi RESTful API, Git workflow, testing & debugging, dan security best practices.
                        </p>
                        <div className="hero-skills">
                            <span className="skill-tag">FULL-STACK DEVELOPMENT</span>
                            <span className="skill-tag">REACT, VUE, NODE.JS</span>
                        </div>
                        <div className="hero-contact">
                            <button 
                                className="contact-btn"
                                onClick={() => handleClick("https://www.linkedin.com/in/joko-priyono-b49a0b14a")}
                            >
                                LinkedIn
                            </button>
                            <button 
                                className="contact-btn"
                                onClick={() => handleClick("mailto:jhoko94@gmail.com")}
                            >
                                Email
                            </button>
                            <button 
                                className="contact-btn"
                                onClick={() => handleClick("https://wa.me/6285333271526")}
                            >
                                WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

