import React from 'react';
import './index.css'

const Header = () => {
    // Fungsi untuk menangani klik
    const handleClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <header className="bg-header">
            <div className="avatar">
                <img src="/image/foto.png" alt="avatar" width={250} height={250} />
            </div>
            <div>
                <h1>Joko Priyono</h1>
                <h3>Frontend Developer</h3>

                <h5 
                    onClick={() => handleClick("https://www.linkedin.com/in/joko-priyono-b49a0b14a")}
                >
                    linkedin.com/in/joko-priyono-b49a0b14a
                </h5>

                <h5
                    onClick={() => handleClick("mailto:jhoko94@gmail.com")}
                >
                    jhoko94@gmail.com
                </h5>

                <h5
                    onClick={() => handleClick("https://wa.me/6285333271526")}
                >
                    +62 853 3327 1526
                </h5>
            </div>
        </header>
    );
};

export default Header;
