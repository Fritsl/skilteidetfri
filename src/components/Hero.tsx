import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative h-[70vh] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-nature-900/50" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-nature-100">Bring dit brand</span> ind i Danmarks smukkeste naturområder
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Hos Skilte I Det Fri ApS er vi specialister i at bringe dit brand ind i Danmarks smukkeste naturområder. 
            Med vores gennemprøvede metoder hjælper vi virksomheder med at kombinere synlighed, godgørenhed og tryghed 
            – og vi har allerede bevist, hvordan det kan lade sig gøre.
          </p>
          <Link 
            to="/sadan-fungerer-det" 
            className="bg-nature-500 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-nature-600 transition-colors inline-flex"
          >
            Lær mere om vores metode
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}