import React, { useState, useEffect } from 'react';
import './index.css';
import Detail from './Detail'

const Pengalaman = () => {
    const [detail, setDetail] = useState(true);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        setDetail(false)
        setVisible(false)
    }, []);
    const handleDetail = () => {
        console.log('tes')
        if(!detail) {
            setVisible(true)
            setTimeout(() => {
                setDetail(true)
            }, 500);
        } else {
            setDetail(false)
            setTimeout(() => {
                setVisible(false)
            }, 500);
        }

    }
    return (
        <section className="bg-pengalaman">
            <h1>Pengalaman Kerja</h1>
            <div className="content-pengalaman">
                <div className="card-pengalaman">
                    <h3>PT Telkom Indonesia Bandung</h3>
                    <h4>Front End Developer</h4>
                    <h4 className="card-text">Maret 2020 - Sekarang</h4>
                    <p className="card-text mb-[10px]">
                    Mengembangkan UI responsif dengan React.js, Vue.js, dan Nuxt.js, berkolaborasi dengan tim desain, mengintegrasikan API, membangun komponen reusable, serta memastikan kualitas kode melalui testing, code review, dan penerapan best practices.
                    </p>
                    <div class="studio-button py-1 px-4" onClick={handleDetail}>
                        <div class="studio-button-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
                        </div>
                        <div class="studio-button-label">
                        Detail Pengalaman
                        </div>
                    </div>
                </div>
                {visible &&
                    <div className={`card-detail-pengalaman ${detail ? 'show' : ''}`}>
                        {detail &&
                            <Detail />
                        }
                    </div>
                }
            </div>
        </section>
    );
};

export default Pengalaman;