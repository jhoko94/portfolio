import React from 'react';
import './index.css';

const Experience = () => {
    const experiences = [
        {
            company: "PT Telkom Indonesia",
            position: "Software Engineer / Frontend Developer",
            period: "Maret 2020 - Maret 2025",
            description: "Mengintegrasikan internal services dan third-party components menggunakan RESTful API, mengembangkan 10+ aplikasi web dengan React.js, Vue.js, dan Nuxt.js, mengoptimalkan performa aplikasi, implementasi security measures, routine maintenance, API integration menggunakan Node.js, dan testing menggunakan Jest."
        },
        {
            company: "PT Jasamedika Saranatama",
            position: "Analis Programmer",
            period: "November 2016 - November 2017",
            description: "Setting dan installing SQL Server 2008R2, designing dan creating SIMRS programs menggunakan VB6, melakukan database migration dari SQL Server ke Informix, maintaining SIMRS applications, mengembangkan 3+ sistem SIMRS untuk rumah sakit, dan melakukan troubleshooting technical issues."
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

