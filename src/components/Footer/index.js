// src/components/Footer.js
import React from 'react';
import './index.css'

const Footer = () => {
    // Fungsi untuk menangani klik dan membuka link
    const handleClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <footer className="bg-footer">
            <div>
                <h1>Mari Terhubung</h1>
                <h3>Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya.</h3>
                <div className="card-container">
                    <div className="card" onClick={() => handleClick("mailto:jhoko94@gmail.com")}>
                        <h4 className="mb-5">Email</h4>
                        <h4>jhoko94@gmail.com</h4>
                    </div>
                    <div className="card" onClick={() => handleClick("https://wa.me/6285333271526")}>
                        <h4 className="mb-5">Telepon</h4>
                        <h4>+62 853 3327 1526</h4>
                    </div>
                    <div className="card" onClick={() => handleClick("https://www.linkedin.com/in/joko-priyono-b49a0b14a")}>
                        <h4 className="mb-5">LinkedIn</h4>
                        <h4>Joko Priyono</h4>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
