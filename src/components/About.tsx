import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-6">Nossa História</h2>
          <p className="text-lg text-gray-700 mb-8">
            Há mais de 65 anos, a Marcenaria Móveis Meotti tem sido sinônimo de excelência em marcenaria artesanal. 
            Nossa paixão pela madeira e compromisso com a qualidade nos permitiu criar peças únicas que atravessam gerações.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Tradição</h3>
              <p className="text-gray-600">65 anos de experiência em marcenaria artesanal</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Qualidade</h3>
              <p className="text-gray-600">Materiais selecionados e acabamento impecável</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-amber-800 mb-3">Personalização</h3>
              <p className="text-gray-600">Projetos sob medida para cada cliente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}