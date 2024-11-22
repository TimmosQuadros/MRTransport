import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BodyLayout from './components/Header';
import Home from './pages/Home';
import HvorforDSV from './pages/HvorforDSV';
import VoresLosninger from './pages/VoresLosninger';
import Baeredygtighed from './pages/Baeredygtighed';
import Karriere from './pages/Karriere';
import Inquiry from './pages/Inquiry'; // Import the new inquiry page
import './App.css';
import Footer from "./components/Footer.tsx";
import Fleet from "./pages/Fleet.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Services from "./pages/Services.tsx";
import Pricing from "./pages/Pricing.tsx";
import Team from "./pages/Team.tsx";

const App: React.FC = () => {
    return (
        <Router>
            {/* BodyLayout includes header and navigation */}
            <BodyLayout />

            {/* Define your routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hvorfor-dsv/*" element={<HvorforDSV />} />
                <Route path="/losninger/*" element={<VoresLosninger />} />
                <Route path="/baeredygtighed" element={<Baeredygtighed />} />
                <Route path="/karriere" element={<Karriere />} />
                <Route path="/inquiry" element={<Inquiry />} />
                <Route path="/fleet" element={<Fleet />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/team" element={<Team />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
