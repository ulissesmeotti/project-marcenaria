import { CheckCircle, Layers, LayoutDashboard, ShieldCheck, Truck, Wrench } from "lucide-react";
import React from "react";

const Differentials: React.FC = () => {
  const cards = [
    {
      icon: <Layers size={32} className="text-orange-500" />,
      title: "Produto Diferenciado e Personalização Exclusiva",
      description:
        "Nossa linha de produtos personalizados permite que cada cliente transforme seus sonhos em realidade, criando ambientes que refletem sua personalidade e estilo de vida.",
    },
    {
      icon: <CheckCircle size={32} className="text-orange-500" />,
      title: "Atenção aos Detalhes",
      description:
        "Tudo começa na escolha primorosa de dar atenção aos detalhes. Além do padrão de qualidade, há uma preocupação em oferecer peças exclusivas e sofisticadas para atender às diversas necessidades e personalidades.",
    },
    {
      icon: <LayoutDashboard size={32} className="text-orange-500" />,
      title: "Inovação em Design de Superfície: Pioneirismo Brasileiro",
      description:
        "Somos pioneiros no Brasil em inovação de design de superfície, trazendo os mais modernos conceitos de arquitetura, moda e sustentabilidade.",
    },
    {
      icon: <ShieldCheck size={32} className="text-orange-500" />,
      title: "5 Anos de Garantia",
      description:
        "A Finger oferece 5 anos de garantia de fábrica — segurança e tranquilidade para os clientes.",
    },
    {
      icon: <Truck size={32} className="text-orange-500" />,
      title: "Montagem e Instalação",
      description:
        "Acompanhado exclusividade, oferecemos montagem segura e ágil, garantindo resultados rápidos e a máxima precisão em todos os ambientes.",
    },
    {
        icon: <Wrench size={32} className="text-orange-500" />,
        title: "Atendimento Personalizado e Consultoria",
        description:
          "Oferecemos um atendimento dedicado, com consultoria especializada para ajudar na escolha do móvel ideal para o seu ambiente, garantindo funcionalidade e estética no projeto.",
      },
  ];

  return (
    <div className="bg-gray-50 py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nossos Diferenciais</h2>

        <div className="w-full h-60 mb-8 rounded-xl overflow-hidden">
          <img
            src="images-produtos/img-banner.jpg"
            alt="Ambiente decorado"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 border border-gray-200">
              <div className="flex items-center mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Differentials;
