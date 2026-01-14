import React from 'react';
import './index.css'

const About = () => {
    const arrKeahlian = [
        {title: 'Vue.js', image: 'icon-vue.png'},
        {title: 'React.js', image: 'icon-react.png'},
        {title: 'Nuxt.js', image: 'logo-nuxt.svg'},
        {title: 'Next.js', image: 'logo-nextjs.svg'},
        {title: 'Node.js', image: 'icon-javascript.png'},
        {title: 'JavaScript', image: 'icon-javascript.png'},
        {title: 'HTML', image: 'icon-html.png'},
        {title: 'CSS', image: 'icon-css.png'},
        {title: 'PostgreSQL', image: 'icon-css.png'},
        {title: 'SQL Server', image: 'icon-css.png'},
        {title: 'Git', image: 'logo-gitlab.svg'},
        {title: 'Tailwind', image: 'icon-tailwind.png'}
    ]

    const handleClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <section className="bg-about">
            <div className="about-me">
                <h1>Tentang Saya</h1>
                <h4>Software Engineer dengan 5+ tahun pengalaman dalam pengembangan aplikasi software dan web full-stack. Berpengalaman dalam pengelolaan database (SQL Server, PostgreSQL), database migration, serta pengembangan aplikasi menggunakan React.js, Vue.js, dan Node.js. Terbiasa dengan integrasi berbagai internal services dan third-party components, implementasi RESTful API, Git workflow, testing & debugging, dan security best practices.</h4>
                <div className="other">
                    <div onClick={() => handleClick("https://maps.app.goo.gl/t1hBU9Q3M3wvERQx6")} style={{ cursor: 'pointer' }}>
                        <img src="/image/icon-about-1.png" alt='about-1' width={16} height={16} />
                        <h4>Perumahan Seroja Home Residence 2 Blok B No 9, Soreang, Kab. Bandung</h4>
                    </div>
                    <div>
                        <img src="/image/icon-about-3.png" alt='about-3' width={16} height={16} />
                        <h4>Pontianak, 28-10-1994</h4>
                    </div>
                    <div>
                        <img src="/image/icon-about-2.png" alt='about-2' width={16} height={16} />
                        <h4>Status: Sudah Menikah</h4>
                    </div>
                </div>
            </div>
            <div className="skill">
                <h1>Keahlian</h1>
                <div className="flex flex-wrap">
                { 
                    arrKeahlian.map((x, index) => (
                        <div className="cardskill" key={index}>
                            <img src={`/image/${x.image}`} alt="vue" width={24} height={24} />
                            <h5>{x.title}</h5>
                        </div>
                    ))          
                }
                </div>
            </div>
        </section>
    );
};

export default About;
