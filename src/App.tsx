import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BodyLayout from './components/Header';
import Home from './pages/Home';
import Why from './pages/Why.tsx';
import Solutions from './pages/Solutions.tsx';
import Sustainability from './pages/Sustainability.tsx';
import Career from './pages/Career.tsx';
import Inquiry from './pages/Inquiry'; // Import the new inquiry page
import './App.css';
import Footer from "./components/Footer.tsx";
import Fleet from "./pages/Fleet.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Services from "./pages/Services.tsx";
import Pricing from "./pages/Pricing.tsx";
import Team from "./pages/Team.tsx";
import SearchResults from "./pages/SearchResults.tsx";

const App: React.FC = () => {
    return (
        <Router>
            {/* BodyLayout includes header and navigation */}
            <BodyLayout />

            {/* Define your routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/why/*" element={<Why />} />
                <Route path="/solutions/*" element={<Solutions />} />
                <Route path="/sustainability" element={<Sustainability />} />
                <Route path="/career" element={<Career />} />
                <Route path="/inquiry" element={<Inquiry />} />
                <Route path="/fleet" element={<Fleet />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/team" element={<Team />} />
                <Route path="/search" element={<SearchResults />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
