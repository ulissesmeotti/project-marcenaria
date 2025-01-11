
export default function Services() {
  const services = [
    {
      title: "Móveis Sob Medida",
      description: "Móveis personalizados para atender suas necessidades específicas",
      image: "images/cozinha-planejada.jpg"
    },
    {
      title: "Móveis Rústicos",
      description: "Peças com personalidade que trazem o charme do rústico para seu ambiente",
      image: "https://images.unsplash.com/photo-1533090368676-1fd25485db88?auto=format&fit=crop&q=80"
    },
    {
      title: "Mesas e Cadeiras",
      description: "Conjuntos completos para sua sala de jantar ou ambiente comercial",
      image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80"
    },
    {
      title: "Tábuas de Carne",
      description: "Tábuas artesanais para churrasco e apresentação",
      image: "images/tabua-de-carne.jpg"
    },
    {
      title: "Portas e Janelas",
      description: "Esquadrias sob medida com acabamento premium",
      image: "images/janela-veneziana.jpg"
    },
    {
      title: "Serviço de Serraria",
      description: "Corte e beneficiamento de madeira com precisão",
      image: "images/img-serrar.jpg"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-200">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}