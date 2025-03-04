import React from 'react';
import './index.css'

const About = () => {
    // Fungsi untuk menangani klik dan membuka Google Maps
    const handleClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <section className="bg-about">
            <div className="about-me">
                <h1>Tentang Saya</h1>
                <h4>Frontend Developer dengan pengalaman 5+ tahun dalam membangun antarmuka pengguna yang responsif, interaktif, dan
ramah pengguna. Ahli dalam HTML, CSS, JavaScript, dan framework modern seperti React.js, Vue.js, dan Nuxt.js.
Berpengalaman dalam kolaborasi dengan tim desain dan backend untuk mengembangkan aplikasi web yang scalable dan
efisien. Fokus pada kualitas kode, performa, dan pengalaman pengguna.</h4>
                <div className="other">
                    <div onClick={() => handleClick("https://maps.app.goo.gl/t1hBU9Q3M3wvERQx6")} style={{ cursor: 'pointer' }}>
                        <img src="image/icon-about-1.png" alt='about-1' width={16} height={16} />
                        <h4>Perumahan Seroja Home Residence 2 Blok B No 9, Soreang, Kab. Bandung</h4>
                    </div>
                    <div>
                        <img src="image/icon-about-3.png" alt='about-3' width={16} height={16} />
                        <h4>Pontianak, 28-10-1994</h4>
                    </div>
                    <div>
                        <img src="image/icon-about-2.png" alt='about-2' width={16} height={16} />
                        <h4>Status: Sudah Menikah</h4>
                    </div>
                </div>
            </div>
            <div className="skill">
                <h1>Keahlian</h1>
                <div>
                    <div className="cardskill">
                        <img src="image/icon-vue.png" alt="vue" width={24} height={24} />
                        <h5>Vue.js</h5>
                    </div>
                    <div className="cardskill">
                        <img src="image/icon-react.png" alt="vue" width={24} height={24} />
                        <h5>React.js</h5>
                    </div>
                </div>
                <div>
                    <div className="cardskill">
                        <img src="image/icon-javascript.png" alt="vue" width={24} height={24} />
                        <h5>JavaScript</h5>
                    </div>
                    <div className="cardskill">
                        <img src="image/icon-html.png" alt="vue" width={24} height={24} />
                        <h5>HTML</h5>
                    </div>
                </div>
                <div>
                    <div className="cardskill">
                        <img src="image/icon-css.png" alt="vue" width={24} height={24} />
                        <h5>CSS</h5>
                    </div>
                    <div className="cardskill">
                        <img src="image/icon-tailwind.png" alt="vue" width={24} height={24} />
                        <h5>Tailwind</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
