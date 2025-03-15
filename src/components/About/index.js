import React from 'react';
import './index.css'

const About = () => {
    const arrKeahlian = [
        {title: 'Vue.js', image: 'icon-vue.png'},
        {title: 'React.js', image: 'icon-react.png'},
        {title: 'JavaScript', image: 'icon-javascript.png'},
        {title: 'HTML', image: 'icon-html.png'},
        {title: 'CSS', image: 'icon-css.png'},
        {title: 'Tailwind', image: 'icon-tailwind.png'}
    ]

    // Fungsi untuk menangani klik dan membuka Google Maps
    const handleClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <section className="bg-about">
            <div className="about-me">
                <h1>Tentang Saya</h1>
                <h4>Frontend Developer dengan 5+ tahun pengalaman dalam membangun UI responsif dan interaktif. Menguasai HTML, CSS, JavaScript, React.js, Vue.js, dan Nuxt.js. Berfokus pada performa, kualitas kode, dan pengalaman pengguna melalui kolaborasi dengan tim desain dan backend.</h4>
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
                <div className="flex flex-wrap">
                { 
                    arrKeahlian.map((x, index) => (
                        <div className="cardskill" key={index}>
                            <img src={`image/${x.image}`} alt="vue" width={24} height={24} />
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
