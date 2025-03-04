// src/components/Projects.js
import React from 'react';
import './index.css'

const Pengalaman = () => {
    return (
        <section className="bg-pengalaman">
            <h1>Pengalaman Kerja</h1>
            <div className="card-pengalaman">
                <h3>PT Telkom Indonesia Bandung</h3>
                <h4>Front End Developer</h4>
                <h4 className="card-text">Maret 2020 - Sekarang</h4>
                <p className="card-text">
                Mengembangkan dan memelihara antarmuka pengguna untuk aplikasi web internal dan eksternal menggunakan React.js,
Vue.js, dan Nuxt.js, meningkatkan kepuasan pengguna sebesar 30%.
Berkolaborasi dengan tim desain untuk menerapkan desain UI/UX yang responsif dan modern menggunakan Figma.
Membangun komponen reusable dan library untuk mempercepat proses pengembangan.
Mengintegrasikan API dari backend menggunakan Axios dan RESTful API.
Melakukan testing menggunakan Jest untuk memastikan kualitas kode dan fungsionalitas.
Berpartisipasi dalam code review dan menerapkan best practices untuk memastikan kode yang bersih dan mudah dipelihara.
                </p>
            </div>
        </section>
    );
};

export default Pengalaman;