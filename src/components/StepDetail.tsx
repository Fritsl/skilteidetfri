import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StepDetailProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  isReversed?: boolean;
}

export function StepDetail({ icon: Icon, title, description, image, imageAlt, isReversed = false }: StepDetailProps) {
  return (
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center mb-20`}>
      <div className="flex-1">
        <div className="max-w-xl">
          <div className="flex items-center gap-4 mb-4">
            <Icon className="w-8 h-8 text-nature-500" />
            <h3 className="text-2xl font-bold text-nature-800">{title}</h3>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="flex-1">
        <img
          src={image}
          alt={imageAlt}
          className="rounded-xl shadow-lg w-full object-cover aspect-video"
        />
      </div>
    </div>
  );
}