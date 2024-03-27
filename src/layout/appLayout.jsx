import React, { useState } from "react";
import ScrollToTop from "../components/shared/ScrollToTop";
import { Header } from "../components/shared/header/header";
import Welcome from "../components/shared/Welcome/welcome";
import { Favorites } from "../pages/favourites/favourites";
import { Footer } from "../components/shared/footer/footer";
import { Outlet } from "react-router-dom";
import { useFavoritesContext } from "../contexts/favoritesContext";

export default function AppLayout() {
  const { showFavorites, toggleShowFavorites } = useFavoritesContext();
  return (
    <>
      <ScrollToTop />
      <Header toggleFavorites={toggleShowFavorites} />
      <Welcome />
      <main>
        <Outlet />
      </main>
      {showFavorites && <Favorites />}
      <Footer />
    </>
  );
}
