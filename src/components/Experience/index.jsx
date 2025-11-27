import React from 'react';
import './index.css';

const Experience = () => {
    const experiences = [
        {
            company: "PT Telkom Indonesia Bandung",
            position: "Front End Developer",
            period: "Maret 2020 - Sekarang",
            description: "Mengembangkan UI responsif dengan React.js, Vue.js, dan Nuxt.js, berkolaborasi dengan tim desain, mengintegrasikan API, membangun komponen reusable, serta memastikan kualitas kode melalui testing, code review, dan penerapan best practices."
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="experience-container">
                <h2 className="section-title">5 YEARS OF EXPERIENCE</h2>
                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-dot"></div>
                            <div className="experience-content">
                                <div className="experience-header">
                                    <h3 className="experience-company">{exp.company}</h3>
                                    <span className="experience-period">{exp.period}</span>
                                </div>
                                <h4 className="experience-position">{exp.position}</h4>
                                <p className="experience-description">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

