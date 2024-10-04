import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';


const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;