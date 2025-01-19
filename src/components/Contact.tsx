import { Clock, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const phoneNumber = "45999071709";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <section id="contact" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Entre em Contato</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informações de contato */}
          <div>
            <h3 className="text-2xl font-semibold text-amber-800 mb-6">Informações de Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-800" />
                <span className="text-gray-700">Avenida Castelo Branco, Novo Sarandi, Toledo/PR</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-800" />
                <span className="text-gray-700">Número fixo: (45) 3273-1100</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-800" />
                <span className="text-gray-700">WhatsApp: (45) 99907-1709</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-800" />
                <span className="text-gray-700">Email: marcenariamoveismeotti@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-amber-800" />
                <span className="text-gray-700">Horário de Funcionamento: Seg-Sex 08:00 - 18:00, Sáb 08:00 - 12:00</span>
              </div>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors mt-8"
            >
              <span>Falar pelo WhatsApp</span>
              <Phone className="h-5 w-5" />
            </a>
          </div>

          {/* Mapa do Google Maps */}
          <div className="flex justify-center items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1054.8665940573123!2d-53.90879744670078!3d-24.563701119546707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f39d94852e41a9%3A0x4521eb02ac2d45d1!2sM%C3%B3veis%20e%20Esquadrias%20Meotti!5e0!3m2!1spt-BR!2sus!4v1737307903918!5m2!1spt-BR!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
