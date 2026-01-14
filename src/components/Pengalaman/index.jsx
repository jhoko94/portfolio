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
                    <h3>PT Telkom Indonesia</h3>
                    <h4>Software Engineer / Frontend Developer</h4>
                    <h4 className="card-text">Maret 2020 - Maret 2025</h4>
                    <p className="card-text mb-[10px]">
                    Mengintegrasikan internal services dan third-party components menggunakan RESTful API, mengembangkan 10+ aplikasi web dengan React.js, Vue.js, dan Nuxt.js, mengoptimalkan performa aplikasi, implementasi security measures, routine maintenance, API integration menggunakan Node.js, dan testing menggunakan Jest.
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
                <div className="card-pengalaman">
                    <h3>PT Jasamedika Saranatama</h3>
                    <h4>Analis Programmer</h4>
                    <h4 className="card-text">November 2016 - November 2017</h4>
                    <p className="card-text mb-[10px]">
                    Setting dan installing SQL Server 2008R2, designing dan creating SIMRS programs menggunakan VB6, melakukan database migration dari SQL Server ke Informix, maintaining SIMRS applications, mengembangkan 3+ sistem SIMRS untuk rumah sakit, dan melakukan troubleshooting technical issues.
                    </p>
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