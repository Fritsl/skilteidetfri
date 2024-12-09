import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface FormData {
  company: string;
  contactPerson: string;
  email: string;
  phone: string;
  purpose: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    company: '',
    contactPerson: '',
    email: '',
    phone: '',
    purpose: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-8">
      <div className="space-y-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Navn på virksomhed *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-500 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">
            Kontaktperson *
          </label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-500 focus:border-transparent"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mailadresse *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefonnummer *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-500 focus:border-transparent"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-1">
            Formål for kampagnen *
          </label>
          <select
            id="purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-500 focus:border-transparent"
            required
          >
            <option value="">Vælg formål</option>
            <option value="sikkerhed">Sikkerhed</option>
            <option value="tryghed">Tryghed</option>
            <option value="miljø">Miljø</option>
            <option value="andet">Andet</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Besked *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-500 focus:border-transparent"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-nature-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-nature-600 transition-colors flex items-center justify-center gap-2"
        >
          Send forespørgsel
          <Send className="w-5 h-5" />
        </button>
        
        <p className="text-sm text-gray-500 text-center">
          Vi vender tilbage inden for 24 timer for at tage første skridt mod at gøre dit brand synligt i Danmarks natur!
        </p>
      </div>
    </form>
  );
}