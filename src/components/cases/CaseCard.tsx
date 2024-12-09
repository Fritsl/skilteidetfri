import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CaseCardProps {
  icon: LucideIcon;
  title: string;
  client: string;
  location: string;
  purpose: string;
  solution: string;
  result?: string;
  image: string;
}

export function CaseCard({
  icon: Icon,
  title,
  client,
  location,
  purpose,
  solution,
  result,
  image
}: CaseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="relative h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <Icon className="absolute bottom-4 left-4 w-8 h-8 text-white" />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold text-gray-500">Kunde</p>
            <p className="text-gray-900">{client}</p>
          </div>
          
          <div>
            <p className="text-sm font-semibold text-gray-500">Placering</p>
            <p className="text-gray-900">{location}</p>
          </div>
          
          <div>
            <p className="text-sm font-semibold text-gray-500">Formål</p>
            <p className="text-gray-900">{purpose}</p>
          </div>
          
          <div>
            <p className="text-sm font-semibold text-gray-500">Løsning</p>
            <p className="text-gray-900">{solution}</p>
          </div>
          
          {result && (
            <div>
              <p className="text-sm font-semibold text-gray-500">Resultat</p>
              <p className="text-gray-900">{result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}