import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import TeaPage from './components/TeaPage';
import CoffeePage from './components/CoffeePage';
import AboutPage from './components/AboutPage';
import Modal from './components/Modal'; // Import Modal component
import Breadcrumb from './components/Breadcrumb';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetch('http://staging.ssf.org.pk/index.php');
                console.log('API call successful');
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run the effect only once when the component mounts

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Router>
            <div className="App">
                <Header openModal={openModal} /> {/* Pass openModal function to Header */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/tea" element={<TeaPage />} />
                    <Route path="/coffee" element={<CoffeePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
                <Modal isOpen={isModalOpen} onClose={closeModal} /> {/* Render Modal component */}
            </div>
        </Router>
    );
}

export default App;
