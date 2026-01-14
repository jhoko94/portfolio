import React from 'react';
import './index.css'

const Projects = () => {
    return (
        <section className="bg-pendidikan">
            <div>
                <h1>Pendidikan</h1>
                <div className="pendidikan-container">
                    <div className="icon-pendidikan">
                        <img src="/image/icon_pendidikan.png" alt="pendidikan" width={80} height={80} />
                    </div>
                    <div className="content-pendidikan">
                        <h2>Sarjana Teknik Informatika</h2>
                        <h4>Sekolah Tinggi Manajemen Informatika dan Komputer Widya Dharma Pontianak</h4>
                        <h4 className="color-grey">Periode: Januari 2013 - Juli 2016</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;