import './App.css';
import Home from './pages/home/home.jsx';
import DetailsPage from './pages/DetailsPage.jsx';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from './layout/appLayout.jsx';

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="details/:id" element={<DetailsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
