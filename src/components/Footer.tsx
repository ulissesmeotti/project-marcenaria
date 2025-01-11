import React from 'react';
import { Axe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Axe className="h-8 w-8" />
            <span className="text-xl font-semibold">Móveis Meotti</span>
          </div>
          <div className="text-center md:text-right">
            <p>© {new Date().getFullYear()} Marcenaria Móveis Meotti.</p>
            <p className="text-amber-200">65 anos de tradição em marcenaria</p>
          </div>
        </div>
      </div>
    </footer>
  );
}