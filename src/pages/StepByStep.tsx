import React from 'react';
import { Shield, Lightbulb, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StepDetail } from '../components/StepDetail';

export function StepByStep() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-nature-500 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Sådan fungerer det – Trin-for-Trin
          </h1>
          <p className="text-xl text-white max-w-3xl">
            Vi guider dig gennem vores gennemprøvede fire-trins metode, der sikrer 
            synlighed for dit brand i Danmarks naturområder.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="container mx-auto px-4 py-20">
        <StepDetail
          icon={Shield}
          title="Trin 1: Vi Etablerer en Fond"
          description="Første skridt er at vi etablerer en fond med et formål, der vækker tillid og opbakning. Vi fokuserer på områder som sikkerhed og tryghed - for eksempel 'redning ved strande' eller 'beskyttelse mod dehydrering'. Vores ekspertise sikrer, at fondens formål og navn balancerer perfekt mellem seriøsitet og brandgenkendelse."
          image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
          imageAlt="Professionelt møde om fondsetablering"
        />

        <StepDetail
          icon={Lightbulb}
          title="Trin 2: Vi Udvikler Tryghedsproduktet"
          description="Sammen skaber vi et produkt, der naturligt integrerer sig i sikkerhedsbilledet. Det kan være alt fra redningskranse ved strande til solskærme i parker eller praktiske løsninger til friluftslivet. Vi sørger for, at dit brand bliver en naturlig del af produktets design og funktion."
          image="https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
          imageAlt="Redningskrans ved strand"
          isReversed
        />

        <StepDetail
          icon={Users}
          title="Trin 3: Vi Engagerer Lokale Partnere"
          description="Vores netværk af kommuner, frivillige og lokale foreninger er nøglen til succesfuld implementering. Vi håndterer alle aspekter af samarbejdet, så produkterne bliver en naturlig del af lokalsamfundet. Dette sikrer ikke bare vedligeholdelse, men skaber også lokal forankring og ejerskab."
          image="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
          imageAlt="Lokale frivillige i arbejde"
        />

        <StepDetail
          icon={Target}
          title="Trin 4: Vi Optimerer Placeringen"
          description="Det geniale ved vores metode er, at vi lader engagerede borgere blive vores ambassadører. Ved at fokusere på sikkerhed og tryghed skaber vi en situation, hvor velmenende mennesker selv tager initiativ til at placere og vedligeholde vores produkter. Vi stiller blot materialerne til rådighed – så sørger lokalsamfundet selv for den optimale placering og distribution. Det er en selvkørende proces, hvor borgerne bliver aktive medspillere i at sprede dit brand, helt uden at vide det. De gør arbejdet gratis og med glæde, overbevist om at de bidrager til et godt formål."
          image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
          imageAlt="Strategisk placering i naturen"
          isReversed
        />

        {/* Summary */}
        <div className="bg-gray-50 rounded-xl p-8 mb-20">
          <h3 className="text-2xl font-bold mb-4 text-nature-800">Effektiv Branding med Minimal Indsats</h3>
          <p className="text-lg text-gray-600 mb-6">
            Vores metode sikrer dig maksimal eksponering med minimal risiko og indsats. 
            Vi tager os af alle aspekter, så du kan fokusere på resultaterne: Et stærkt 
            brand med positiv synlighed i Danmarks smukke natur.
          </p>
          <div className="flex gap-4">
            <Link 
              to="/kontakt" 
              className="bg-nature-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-nature-600 transition-colors"
            >
              Tag første skridt
            </Link>
            <Link 
              to="/cases" 
              className="bg-white text-nature-500 px-6 py-3 rounded-lg font-semibold border border-nature-500 hover:bg-nature-50 transition-colors"
            >
              Se vores cases
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}