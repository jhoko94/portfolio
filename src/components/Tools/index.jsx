import React from 'react';
import './index.css';

const Tools = () => {
    const tools = [
        { name: 'React.js', icon: 'icon-react.png' },
        { name: 'Vue.js', icon: 'icon-vue.png' },
        { name: 'Nuxt.js', icon: 'logo-nuxt.svg' },
        { name: 'Next.js', icon: 'logo-nextjs.svg' },
        { name: 'Node.js', icon: 'icon-javascript.png' },
        { name: 'JavaScript', icon: 'icon-javascript.png' },
        { name: 'HTML', icon: 'icon-html.png' },
        { name: 'CSS', icon: 'icon-css.png' },
        { name: 'PostgreSQL', icon: 'icon-css.png' },
        { name: 'SQL Server', icon: 'icon-css.png' },
        { name: 'Git', icon: 'logo-gitlab.svg' },
        { name: 'Tailwind CSS', icon: 'icon-tailwind.png' }
    ];

    return (
        <section id="tools" className="tools-section">
            <div className="tools-container">
                <h2 className="section-title">PREMIUM TOOLS</h2>
                <div className="tools-grid">
                    {tools.map((tool, index) => (
                        <div key={index} className="tool-card">
                            <div className="tool-icon">
                                <img src={`/image/${tool.icon}`} alt={tool.name} />
                            </div>
                            <h3 className="tool-name">{tool.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tools;

