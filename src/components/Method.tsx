import React from 'react';
import { ShieldCheck, Users, Target, Map, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: ShieldCheck,
    title: 'Opret en fond',
    description: 'Etablér en fond med et formål, ingen kan sige nej til'
  },
  {
    icon: Target,
    title: 'Skab et produkt',
    description: 'Udvikl et produkt, der fremstår som sikkerhedsudstyr eller en service'
  },
  {
    icon: Users,
    title: 'Rekruttér lokale',
    description: 'Engagér lokale aktører til opsætning og vedligeholdelse'
  },
  {
    icon: Map,
    title: 'Strategisk placering',
    description: 'Placér det hvor branding har størst effekt'
  }
];

export function Method() {
  return (
    <section className="py-20 bg-nature-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-tryg-500">Metoden – En Kort Forklaring</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <step.icon className="w-12 h-12 text-nature-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-tryg-500">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-xl shadow-sm border border-nature-100">
          <div className="flex gap-4">
            <Info className="w-6 h-6 text-nature-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-2 text-tryg-500">Hvorfor det virker</h3>
              <p className="text-gray-600">
                Det hele kan lade sig gøre, fordi det er kommunerne, som er tilsynsmyndighed for 
                naturbeskyttelseslovens regler om reklameskiltning i det åbne land. De ved ikke, 
                at eksempelvis redningskranse ikke har nogen praktisk effekt på flade strande. 
                For hvem vil sætte sig imod gratis redningskranse? Skulle en borger klage til et 
                ministerie eller forsøge at rejse en sag, vil vedkommende blot blive kastet rundt 
                i et system, hvor ingen vil tage ansvaret, og alle tror, at redningskranse på åbne 
                strande tjener et formål – selvom de reelt kun kan bruges fra både og i havnemiljøer.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/sadan-fungerer-det" className="text-nature-500 font-semibold hover:text-nature-600">
            Sådan fungerer det – trin-for-trin →
          </Link>
        </div>
      </div>
    </section>
  );
}