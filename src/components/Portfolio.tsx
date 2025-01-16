
export default function Portfolio() {
  const projects = [
    {
      title: "Cozinha Planejada",
      image: "/images/cozinha-planejada.jpg",
      description: "Esta cozinha planejada foi desenvolvida para aproveitar ao máximo os espaços disponíveis, unindo funcionalidade e design moderno. Projetada com estrutura em MDF de alta qualidade, conta com detalhes robustos e elegantes, como os pés em madeira maciça, que conferem estabilidade e estilo ao ambiente.",
      specs: ["Madeira: MDF e Eucalipto", "Dimensões: 4 x 1.00m", "Espaço dedicado para o fogão, garantindo praticidade no preparo das refeições", "Compartimento para micro-ondas, otimizado para facilitar o uso diário", "Design ergonômico que assegura conforto e fluidez na movimentação."]
    },
    {
      title: "Cozinha Planejada em Grevilha",
      image: "/images/cozinha-grevilha.jpg",
      description: "Cozinha planejada desenvolvida sob medida para otimizar cada espaço do ambiente. Produzida em MDF de alta qualidade com detalhes em Grevilha, esta cozinha combina funcionalidade e um design sofisticado. O projeto inclui espaços dedicados para eletrodomésticos, armários amplos e detalhes pensados para facilitar o dia a dia.",
      specs: [
        "Material: Feito de Madeira Grevilea",
        "Acabamento: Textura acetinada com detalhes personalizados",
        "Ferragens: Corrediças telescópicas e dobradiças com amortecedor",
      ]
    },
    {
      title: "Cristaleira em Mogno Africano",
      image: "images/cristaleira.jpg",
      description: "Cristaleira sofisticada e elegante, produzida em Mogno Africano de alta qualidade. Este móvel combina funcionalidade e design atemporal, com acabamento impecável que destaca os tons naturais e a textura única da madeira. A cristaleira apresenta portas envidraçadas, ideais para exibir peças especiais, e prateleiras internas otimizadas para organização.",
      specs: [
        "Madeira: Mogno Africano",
        "Dimensões: 4 x 0.90m",
        "Acabamento: Verniz acetinado para realçar a beleza natural",
        "Detalhes: Portas envidraçadas e prateleiras ajustáveis",
      ]
    },
    {
      title: "Mesa Grande",
      image: "images/mesa-festa.jpg",
      description: "Mesa grande, perfeita para festas e eventos, produzida com uma combinação de Eucalipto e Grevílea. Projetada para acomodar grandes grupos com conforto e estilo, a mesa possui um acabamento resistente, ideal para ambientes internos ou externos. O design robusto valoriza as características naturais das madeiras utilizadas, garantindo durabilidade e beleza.",
      specs: [
        "Madeira: Eucalipto e Grevílea",
        "Dimensões: 3.00 x 1.20m",
        "Acabamento: Verniz de alta resistência para proteção contra umidade e desgaste",
        "Capacidade: Acomoda confortavelmente até 24 pessoas",
      ]
    }    
  ];

  return (
    <section id="portfolio" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Nosso Portfólio</h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/2">
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-amber-900">{project.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h4 className="font-semibold text-amber-800 mb-2">Especificações:</h4>
                  <ul className="space-y-2">
                    {project.specs.map((spec, i) => (
                      <li key={i} className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}