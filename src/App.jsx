import React from "react";
import { Helmet } from "react-helmet";
import Navigation from './components/Navigation/index';
import Hero from './components/Hero/index';
import Projects from './components/Projects/index';
import Experience from './components/Experience/index';
import Tools from './components/Tools/index';
import Footer from './components/Footer/index';

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
            
            <Navigation />
            <Hero />
            <Projects />
            <Experience />
            <Tools />
            <Footer />
        </div>
    )
}

export default App;