import React from 'react';
import { Hero } from '../components/Hero';
import { Method } from '../components/Method';
import { CaseStudy } from '../components/CaseStudy';

export function Home() {
  return (
    <div className="min-h-screen bg-nature-50">
      <Hero />
      <Method />
      <CaseStudy />
    </div>
  );
}