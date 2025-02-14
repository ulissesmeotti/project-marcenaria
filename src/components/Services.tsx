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
      image: "images/img-aparador-rustico.jpg"
    },
    {
      title: "Mesas e Cadeiras",
      description: "Conjuntos completos para sua sala de jantar ou ambiente comercial",
      image: "images/img-moveis-rusticos.jpg"
    },
    {
      title: "Tábuas de Carne",
      description: "Tábuas artesanais para churrasco",
      image: "images/tabua-de-carne.jpg"
    },
    {
      title: "Portas e Janelas",
      description: "Portas e janelas de madeira com acabamento premium",
      image: "images/janela-veneziana.jpg"
    },
    {
      title: "Serviço de Serraria",
      description: "Corte e serragem de madeira com precisão",
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
      {/* Botão de Fale Conosco */}
      <div className="text-center mt-8">
        <a
          href="https://wa.me/45999071709"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-800 text-white px-8 py-3 rounded-full shadow-lg hover:bg-amber-700 transition"
        >
          Fale Conosco
        </a>
      </div>
      {/* Campo para o banner */}
      {/* <div className="mt-12">
        <img
          src="images-novas/banner1.png"
          alt="Banner"
          className="w-18 h-18 rounded-lg shadow-lg"
        />
      </div> */}
    </section>
  );
}
