import { Mail, MapPin, Phone } from 'lucide-react';

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
                <span className="text-gray-700">(45) 99907-1709</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-800" />
                <span className="text-gray-700">contato@moveismeotti.com</span>
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

          {/* Formulário de solicitação de orçamento */}
          <div className="bg-white rounded-lg shadow-lg p-12 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Solicite um Orçamento</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-1 font-medium" htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-300"
                  placeholder="Digite seu nome"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 font-medium" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-300"
                  placeholder="Digite seu email"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 font-medium" htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-300"
                  placeholder="Descreva sua solicitação"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-900 text-white px-4 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors"
              >
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
