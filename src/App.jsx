import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Home, Book, Search, PieChart, Star, History, Users, Bell, Settings } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navItems = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'catalogs', label: 'Catalogues', icon: Book },
    { id: 'analysis', label: 'Analyses', icon: Search },
    { id: 'predictions', label: 'Prédictions', icon: PieChart },
    { id: 'favorites', label: 'Favoris', icon: Star },
    { id: 'history', label: 'Historique', icon: History },
    { id: 'team', label: 'Équipe', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation latérale */}
      <nav className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-600 mb-8">AuctionAI</h1>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setCurrentPage(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    currentPage === item.id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Contenu principal */}
      <main className="ml-64 p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{navItems.find(item => item.id === currentPage)?.label}</h2>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Settings className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Contenu dynamique selon la page */}
        {currentPage === 'home' && (
          <HomeContent />
        )}
      </main>
    </div>
  );
};

// Composant du contenu de la page d'accueil
const HomeContent = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-medium">Analyser un nouveau catalogue</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Lien du catalogue</label>
            <input
              type="url"
              placeholder="Collez l'URL du catalogue..."
              className="w-full p-3 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Ou téléchargez un PDF</label>
            <div className="flex items-center justify-center w-full">
              <label className="w-full flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue-50">
                <span className="mt-2 text-base">Sélectionner un fichier</span>
                <input type="file" className="hidden" accept=".pdf" />
              </label>
            </div>
          </div>

          <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Analyser
          </button>
        </CardContent>
      </Card>

      {/* Statistiques rapides */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Opportunités</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Marge Moyenne</p>
                <p className="text-2xl font-bold">35%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Analyses ce mois</p>
                <p className="text-2xl font-bold">45</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default App;