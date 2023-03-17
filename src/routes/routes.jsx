import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* --PAGES-- */
import HomePage from "../pages/HomePage/HomePage";
import PokeDetailPage from "../pages/PokeDetails/PokeDetailPage";
import FavoritePage from "../pages/Favorite/Favorite";
import SearchPage from '../pages/SearchPage/SearchPage'
/* --Components-- */
import { NavBar } from "../components/NavBar/NavBar";


export function MyRoutes() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/pokemon/:id" element={<PokeDetailPage />} />
        <Route exact path="/favorite" element={<FavoritePage />} />
        <Route exact path="/search" element={<SearchPage/>}/>
      </Routes>
    </Router>
  );
}
