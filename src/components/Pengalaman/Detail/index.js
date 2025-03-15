import React, { useState } from "react";
import "./index.css";

const projects = [
    {tech_logo: ["logo-jquery.svg", "logo-bootstrap.svg", "logo-leaflet.svg", "logo-postman.svg", "logo-gitlab.svg", "logo-jenkins.svg", "logo-jira.svg"], image: "/image/img-indicar.png", title: "INDICAR", desc: "Indicar adalah platform IoT yang mendigitalkan kendaraan menyediakan konektivitas dan pemantauan telemetri sehingga kendaraandapat digunakan dengan nyaman, aman dan secara produktif."},
    {tech_logo: ["logo-nuxt.svg", "logo-vuetify.svg", "logo-leaflet.svg", "logo-postman.svg", "logo-gitlab.svg", "logo-jenkins.svg", "logo-jira.svg"], image: "/image/img-kbm.png", title: "KBM ONLINE", desc: "Telkom memberikan fasilitas kepada karyawan untuk memesan KBM (kendaraan), aplikasi ini digunakan untuk memesan mobil, untuk memesan mobil harus disetujui oleh atasan karyawan dan terintegrasi dengan platform iFMS."},
    {tech_logo: ["logo-nuxt.svg", "logo-vuetify.svg", "logo-leaflet.svg", "logo-postman.svg", "logo-gitlab.svg", "logo-jenkins.svg", "logo-jira.svg"], image: "/image/img-ifms.png", title: "INTEGRATED FLEET MANAGEMENT SYSTEM (IFMS)", desc: "iFMS adalah platform yang bertujuan untuk mengelola, memanfaatkan, menjaga armada Telkom sesuai fitur masing-masing. Fitur-fitur adalah ketertiban, pemeliharaan, pajak, dll."},
    {tech_logo: ["logo-nextjs.svg", "logo-react.svg", "logo-antd.svg", "logo-legion.svg", "logo-postman.svg", "logo-gitlab.svg", "logo-jenkins.svg", "logo-jira.svg"], image: "/image/img-dtp.png", title: "DTP INTERNSHIP", desc: "DTP Internship adalah platform digital yang mendukung pengelolaan program magang di Telkom Indonesia."},
];

const Detail = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="slider-container">
            <div className="slide flex-wrap">
                <div className="slide-content">
                    <h3 className="font-bold">{projects[currentIndex].title}</h3>
                    <p>{projects[currentIndex].desc}</p>
                </div>
                <div className="slide-image">
                    <img src={projects[currentIndex].image} alt="detailimage" height={150} />
                </div>
            </div>
            <div className="mt-1">
                <h4>Teknologi Frontend yang digunakan :</h4>
                <div className="slide-content-logo flex flex-wrap">
                    {projects[currentIndex].tech_logo.map((logoimg, index) => (
                        <img key={index} src={`/image/${logoimg}`} alt={logoimg} width={logoimg.includes('jquery') || logoimg.includes('leaflet') || logoimg.includes('next') || logoimg.includes('legion') ? 70 : 25} />
                    ))}
                </div>
            </div>
            <div className="navigate-detail-pengalaman">
                <button className="nav-button prev" onClick={prevSlide}>
                    &#10094;
                </button>
                <button className="nav-button next" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
        </section>
    );
};

export default Detail;