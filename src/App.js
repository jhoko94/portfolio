import React from "react";
import Header from './components/Header/index'
import About from './components/About/index'
import Pengalaman from './components/Pengalaman/index'
import Pendidikan from './components/Pendidikan/index'
import Footer from './components/Footer/index'

function App() {
    return (
        <div>
            <Header/>
            <About/>
            <Pengalaman/>
            <Pendidikan/>
            <Footer/>
        </div>
    )
}

export default App;