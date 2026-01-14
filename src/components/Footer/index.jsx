import React from 'react';
import './index.css';

const Footer = () => {
    const handleClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <h2 className="footer-title">Mari Terhubung</h2>
                    <p className="footer-subtitle">
                        Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya.
                    </p>
                    <div className="footer-cards">
                        <div className="footer-card" onClick={() => handleClick("mailto:jhoko94@gmail.com")}>
                            <h4>Email</h4>
                            <p>jhoko94@gmail.com</p>
                        </div>
                        <div className="footer-card" onClick={() => handleClick("https://wa.me/6285333271526")}>
                            <h4>Telepon</h4>
                            <p>+62 853 3327 1526</p>
                        </div>
                        <div className="footer-card" onClick={() => handleClick("https://www.linkedin.com/in/joko-priyono-b49a0b14a")}>
                            <h4>LinkedIn</h4>
                            <p>Joko Priyono</p>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Joko Priyono. Made with React & Vite</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
