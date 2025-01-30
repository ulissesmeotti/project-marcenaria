import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Mesa Rústica com Gaveta",
    category: "Mesas",
    price: 1800,
    description: "Tamanho: 2.00 x 1.50m",
    image: "images-novas/mesa-com-gaveta.jpg"
  },
  {
    id: 2,
    name: "Mesa Rústica de Grápia",
    category: "Mesas",
    price: 3800,
    description: "Tamanho: 3.00 x 1.20m",
    image: "images/mesa-grápia.jpg"
  },
  {
    id: 3,
    name: "Mesa de Eucalipto",
    category: "Mesas",
    price: 1800,
    description: "Tamanho: 80 x 80cm",
    image: "images/mesa-80x80.jpg"
  },
  {
    id: 4,
    name: "Banquetas de Madeira",
    category: "Cadeiras",
    price: 450,
    description: "Banquetas para área de lazer",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Cadeira de Balanço",
    category: "Cadeiras",
    price: 850,
    description: "Cadeira de balanço inteira de madeira eucalipto",
    image: "images-novas/caideira-de-balanco.jpg"
  },
  {
    id: 6,
    name: "Porta de Compensado",
    category: "Portas",
    price: 450,
    description: "Porta de compensado com detalhes",
    image: "images/img-porta-compensado.png"
  },
  {
    id: 7,
    name: "Porta de Madeira",
    category: "Portas",
    price: 1200,
    description: "Porta moderna em madeira maciça",
    image: "images/img-porta-de-madeira.jpg"
  },
  {
    id: 8,
    name: "Tábua para Churrasco",
    category: "Tábuas",
    price: 180,
    description: "Tábua premium para churrasco com canaleta",
    image: "images/img-tabua-carne.jpg"
  },
  {
    id: 9,
    name: "Kit Tábuas Decorativas",
    category: "Tábuas",
    price: 230,
    description: "Conjunto de tábuas decorativas para cozinha",
    image: "images/tabua-de-carne.jpg"
  },
  {
    id: 10,
    name: "Tábua para Legumes",
    category: "Tábuas",
    price: 230,
    description: "Conjunto de tábuas decorativas para cozinha",
    image: "images-novas/tabua-legumes.jpg"
  },
  {
    id: 11,
    name: "Porta Espeto de Eucalito",
    category: "Porta Espetos",
    price: 230,
    description: "Porta espeto para área de churrasco",
    image: "images/porta-espeto-3.jpg"
  },
  {
    id: 12,
    name: "Porta Espeto de Peróba",
    category: "Porta Espetos",
    price: 230,
    description: "Porta espeto para área de churrasco",
    image: "images/porta-espeto-2.jpg"
  },
  {
    id: 13,
    name: "Porta Espeto de Canafístula",
    category: "Porta Espetos",
    price: 230,
    description: "Porta espeto para área de churrasco",
    image: "images/porta-espeto-1.jpg"
  },
  {
    id: 14,
    name: "Aparador de Grevilea",
    category: "Aparadores",
    price: 230,
    description: "Aparador decorativo",
    image: "images-novas/aparador-normal.jpg"
  },
  {
    id: 15,
    name: "Aparador de Canafístula",
    category: "Aparadores",
    price: 230,
    description: "Aparador decorativo",
    image: "images-novas/aparador-canafisutula.jpg"
  },
];

const categories = ["Mesas", "Cadeiras", "Portas", "Tábuas", "Porta Espetos", "Aparadores"];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [priceRange, setPriceRange] = useState(4000);
  const [expandedProductId, setExpandedProductId] = useState<number | null>(null);

  const filteredProducts = products.filter(
    (product) =>
      product.category === selectedCategory && product.price <= priceRange
  );

  const maxPriceInCategory = Math.max(
    ...products.filter((product) => product.category === selectedCategory).map((product) => product.price)
  );

  const toggleDescription = (id: number) => {
    setExpandedProductId(expandedProductId === id ? null : id);
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Nossos Produtos</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setPriceRange(4000);
              }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${selectedCategory === category
                  ? "bg-amber-800 text-white"
                  : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
{/* 
        <div className="mb-6">
          <label htmlFor="priceRange" className="block text-sm font-semibold text-gray-700 mb-2">
            Filtrar por preço: Até R$ {priceRange.toLocaleString()}
          </label>
          <input
            id="priceRange"
            type="range"
            min={0}
            max={maxPriceInCategory}
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full"
          />
        </div> */}
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {expandedProductId === product.id
                      ? product.description
                      : `${product.description.slice(0, 50)}...`}
                  </p>
                
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-800">
                      R$ {product.price.toLocaleString()}
                    </span>
                    <a
                      href="https://wa.me/45999071709"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-amber-800 text-white rounded-lg hover:bg-amber-900 transition-colors"
                    >
                      Solicitar Orçamento
                    </a>

                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              Nenhum produto encontrado para o filtro atual.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
