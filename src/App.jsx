import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogsPage from './pages/CatalogsPage';
import AnalysisPage from './pages/AnalysisPage';
import PredictionsPage from './pages/PredictionsPage';
import FavoritesPage from './pages/FavoritesPage';
import HistoryPage from './pages/HistoryPage';
import TeamPage from './pages/TeamPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogues" element={<CatalogsPage />} />
        <Route path="/analyses" element={<AnalysisPage />} />
        <Route path="/predictions" element={<PredictionsPage />} />
        <Route path="/favoris" element={<FavoritesPage />} />
        <Route path="/historique" element={<HistoryPage />} />
        <Route path="/equipe" element={<TeamPage />} />
      </Routes>
    </Router>
  );
};

export default App;