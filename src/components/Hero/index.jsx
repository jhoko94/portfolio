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
                        <h2 className="hero-title">FRONTEND DEVELOPER</h2>
                        <p className="hero-description">
                            Frontend Developer dengan 5+ tahun pengalaman dalam membangun UI responsif dan interaktif. 
                            Menguasai HTML, CSS, JavaScript, React.js, Vue.js, dan Nuxt.js. Berfokus pada performa, 
                            kualitas kode, dan pengalaman pengguna melalui kolaborasi dengan tim desain dan backend.
                        </p>
                        <div className="hero-skills">
                            <span className="skill-tag">RESPONSIVE DESIGN</span>
                            <span className="skill-tag">REACT, VUE, NUXT</span>
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

