import './App.css';
import Home from './pages/home/home.jsx';
import DetailsPage from './pages/details/DetailsPage.jsx';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from './layout/appLayout.jsx';
import FavoritesContextProvider from './contexts/favoritesContext.jsx';

function App() {
  return (
    <FavoritesContextProvider>
      <Routes>
        <Route path={"/"} element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="details/:topicId" element={<DetailsPage />} />
        </Route>
      </Routes>
    </FavoritesContextProvider>
  );
}

export default App;
