import React from 'react';
import { Droplets, LifeBuoy, Leaf } from 'lucide-react';
import { CaseCard } from './CaseCard';

const cases = [
  {
    icon: Droplets,
    title: 'HydrationHjælpen – Sikkerhed i Sommervarmen',
    client: 'En ledende producent af læskedrikke',
    location: 'Strande og offentlige parker',
    purpose: 'At reducere risikoen for dehydrering på varme sommerdage',
    solution: 'Opsætning af skilte med sloganet "Hold hovedet koldt – og flasken fuld" samt kort til nærmeste kiosk. Skiltene fremstår som offentlige informationstavler med sikkerhedstips.',
    image: 'https://skilteidetfri.dk/svampe.png'
  },
  {
    icon: LifeBuoy,
    title: 'TrygVedVandet – Redningskranse i Det Fri',
    client: 'En dansk fond med stærk tilknytning til et stort forsikringsselskab',
    location: 'Strande, søer og havne over hele landet',
    purpose: 'At styrke sikkerheden ved vandet gennem opsætning af redningskranse',
    solution: 'Fonden donerede redningskranse til lokale aktører, som overtog ejerskabet og ansvaret for vedligeholdelse. Redningskransene blev opsat uden krav om dokumentation for deres effekt, selv ved flade strande uden strømme eller dybt vand. Ingen stillede spørgsmål ved deres værdi som redningsudstyr, da kommunerne som tilsynsmyndighed ikke har ekspertise til at vurdere den reelle sikkerhedsmæssige effekt.',
    result: 'Med over 7.000 opsatte kranse blev fondens logo synligt i hele landet – alt sammen under dække af velgørenhed. Ingen udfordrede modellen, fordi det fremstod som en "hjælpende hånd." Skulle nogen stille spørgsmål ved placeringen, ville de blive mødt af et system, hvor ingen ville tage ansvar for at vurdere den reelle sikkerhedsmæssige værdi.',
    image: 'https://skilteidetfri.dk/redningskrans.png'
  },
  {
    icon: Leaf,
    title: 'PlastPositiv – Sikker Svampesamling',
    client: 'En plastfabrik',
    location: 'Skove og naturområder',
    purpose: 'At hjælpe svampesamlere med at undgå forgiftning',
    solution: 'Engangshandsker og plastikposer med sloganet "Saml trygt – vi har din ryg" udleveres via opstillede beholdere med markante reklameskilte.',
    image: 'https://skilteidetfri.dk/svampe.png'
  }
];

export function CaseList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cases.map((caseItem, index) => (
        <CaseCard key={index} {...caseItem} />
      ))}
    </div>
  );
}