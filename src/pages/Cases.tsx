import React from 'react';
import { CaseList } from '../components/cases/CaseList';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Cases() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-nature-500 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Vores Cases – Synlighed Gør En Forskel
          </h1>
          <p className="text-xl text-nature-100 max-w-3xl">
            Opdag hvordan vi har hjulpet virksomheder med at få deres brand 
            synligt i Danmarks naturområder gennem innovative og effektive løsninger.
          </p>
        </div>
      </div>

      {/* Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <CaseList />
          
          <div className="mt-20 bg-gray-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-nature-800">
              Vil du være vores næste succeshistorie?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Disse cases viser, hvordan det rigtige samarbejde kan skabe maksimal 
              synlighed og tryghed på samme tid. Kun fantasien sætter grænser!
            </p>
            <Link 
              to="/kontakt" 
              className="bg-nature-500 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-nature-600 transition-colors"
            >
              Kontakt os nu
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}