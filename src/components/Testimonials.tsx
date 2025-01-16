import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "João Silva",
      text: "Excelente trabalho na mesa de jantar que encomendei. A qualidade do acabamento é impressionante!",
      rating: 5
    },
    {
      name: "Maria Oliveira",
      text: "Móveis lindos e duráveis. Tenho móveis da Meotti há mais de 20 anos e continuam perfeitos.",
      rating: 5
    },
    {
      name: "Pedro Santos",
      text: "Profissionalismo e pontualidade na entrega. Os móveis ficaram exatamente como planejamos.",
      rating: 5
    },
    {
      name: "Marcos Lima",
      text: "Acabamento impecável, adorei o serviço. Super recomendo!",
      rating: 5
    },
    {
      name: "Celma Fritzen",
      text: "Encomendamos uma mesa e chegou dentro do prazo, muito linda, adorei",
      rating: 5
    },
    {
      name: "Jorge Machado de Souza",
      text: "Muito lindo, adorei os móveis que encomendei",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <p className="font-semibold text-amber-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}