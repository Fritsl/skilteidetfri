import React from 'react';
import { Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CaseStudy() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-nature-500 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex items-start gap-6">
            <Award className="w-12 h-12 flex-shrink-0" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Dokumenteret Succes</h2>
              <p className="text-xl text-nature-100 mb-6">
                Vi rådgav en førende dansk fond til at opsætte over 7.000 reklameskilte 
                forklædt som redningskranse. Resultatet? Maximal synlighed og goodwill i hele Danmark.
              </p>
              <Link 
                to="/cases" 
                className="bg-white text-nature-500 px-6 py-3 rounded-lg font-semibold hover:bg-nature-50 transition-colors inline-block"
              >
                Se flere cases
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}