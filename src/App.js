import React from "react";
import { Helmet } from "react-helmet";
import Header from './components/Header/index'
import About from './components/About/index'
import Pengalaman from './components/Pengalaman/index'
import Pendidikan from './components/Pendidikan/index'
import Footer from './components/Footer/index'

function App() {
    return (
        <div>
            <Helmet>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-YB0N5NVR0L"></script>
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-YB0N5NVR0L');
                    `}
                </script>
            </Helmet>
            
            <Header/>
            <About/>
            <Pengalaman/>
            <Pendidikan/>
            <Footer/>
        </div>
    )
}

export default App;