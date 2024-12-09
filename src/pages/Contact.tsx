import React from 'react';
import { Mail, Phone } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <div className="bg-nature-500 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Kontakt Os – Gør Dit Brand Synligt
          </h1>
          <p className="text-xl text-nature-100 max-w-3xl">
            Er du klar til at få dit brand ud i naturen? Vi gør processen enkel, 
            effektiv og uproblematisk – branding har aldrig været så nemt.
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-nature-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2 text-nature-800">Kontakt</h3>
                  <p className="text-gray-600">Benjamin Nehammer</p>
                  <p className="text-gray-500 text-sm">Presserådgiver</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-nature-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2 text-nature-800">Kontaktoplysninger</h3>
                  <p className="text-gray-600">E-mail: bemn@oem.dk</p>
                  <p className="text-gray-600">Tlf.: 24 98 24 10</p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-center text-gray-600">
                  Vi vender tilbage inden for 24 timer for at tage første skridt mod 
                  at gøre dit brand synligt i Danmarks natur!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}