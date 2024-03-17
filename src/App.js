import './App.css';
import { Footer } from './components/shared/footer/footer.jsx';
import { Header } from './components/shared/header/header.jsx';
import Home from './pages/home.jsx';
import DetailsPage from './pages/DetailsPage.jsx';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Favorites } from './pages/favourites/favourites.jsx';
import Welcome from './components/shared/Welcome/welcome.jsx';
import ScrollToTop from './components/shared/ScrollToTop.jsx';

function App() {
  const [showFavorites, setShowFavorites] = useState(false);
  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };
  
  return (
    <Router>
      <ScrollToTop />
      <Header toggleFavorites={toggleFavorites} />
      <Welcome />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="DetailsPage/:id" element={<DetailsPage />} />
      </Routes>
      {showFavorites && <Favorites />}
      <Footer />
    </Router>
  );
}

export default App;
