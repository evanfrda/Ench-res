import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

const CatalogsPage = () => {
  const catalogs = [
    {
      id: 1,
      name: 'Vente aux enchères Antiquités',
      date: '2025-01-05',
      itemCount: 45,
      status: 'Analysé'
    },
    {
      id: 2,
      name: 'Collection Art Moderne',
      date: '2025-01-04',
      itemCount: 32,
      status: 'En cours'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Catalogues</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Nouveau Catalogue
        </button>
      </div>

      <Card>
        <CardContent className="p-0">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Nom</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Articles</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Statut</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {catalogs.map((catalog) => (
                <tr key={catalog.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-gray-400 mr-3" />
                      {catalog.name}
                    </div>
                  </td>
                  <td className="px-6 py-4">{catalog.date}</td>
                  <td className="px-6 py-4">{catalog.itemCount}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${catalog.status === 'Analysé' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {catalog.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Voir détails
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CatalogsPage;