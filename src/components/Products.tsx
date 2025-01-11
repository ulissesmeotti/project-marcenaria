import { Tag } from 'lucide-react';
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
    name: "Mesa Rústica de Pinheiro 6 Lugares",
    category: "Mesas",
    price: 1800,
    description: "Tamanho: 2.00 x 1.50m",
    image: "images/mesa-pinheiro.jpg"
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
    image: "images/cadeira-de-balancoo.jpg"
  },
  {
    id: 6,
    name: "Porta Entalhada",
    category: "Portas",
    price: 2800,
    description: "Porta com entalhes artesanais exclusivos",
    image: "https://images.unsplash.com/photo-1517646331032-9e8563c520a1?auto=format&fit=crop&q=80"
  },
  {
    id: 7,
    name: "Porta Pivotante",
    category: "Portas",
    price: 3500,
    description: "Porta pivotante moderna em madeira maciça",
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&q=80"
  },
  {
    id: 8,
    name: "Tábua para Churrasco",
    category: "Tábuas",
    price: 280,
    description: "Tábua premium para churrasco com canaleta",
    image: "https://images.unsplash.com/photo-1609770231080-e321deccc34c?auto=format&fit=crop&q=80"
  },
  {
    id: 9,
    name: "Kit Tábuas Decorativas",
    category: "Tábuas",
    price: 450,
    description: "Conjunto de tábuas decorativas para cozinha",
    image: "images/"
  },
  {
    id: 10,
    name: "Porta Espeto de Eucalito",
    category: "Porta Espetos",
    price: 230,
    description: "Porta espeto para área de churrasco",
    image: "images/porta-espeto-3.jpg"
  },
  {
    id: 11,
    name: "Porta Espeto de Peróba",
    category: "Porta Espetos",
    price: 230,
    description: "Porta espeto para área de churrasco",
    image: "images/porta-espeto-2.jpg"
  },
  {
    id: 12,
    name: "Porta Espeto de Canafístula",
    category: "Porta Espetos",
    price: 230  ,
    description: "Porta espeto para área de churrasco",
    image: "images/porta-espeto-1.jpg"
  }
];

const categories = ["Mesas", "Cadeiras", "Portas", "Tábuas", "Porta Espetos"];
const bestSellers = products.slice(0, 4); // Using first 4 products as best sellers for demo

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredProducts = products.filter(
    product => product.category === selectedCategory
  );

  return (
    <>
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">Nossos Produtos</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors
                  ${selectedCategory === category
                    ? 'bg-amber-800 text-white'
                    : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
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
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-800">
                      R$ {product.price.toLocaleString()}
                    </span>
                    <button className="px-4 py-2 bg-amber-800 text-white rounded-lg hover:bg-amber-900 transition-colors">
                      Solicitar Orçamento
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="best-sellers" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-12">
            <Tag className="h-8 w-8 text-amber-800" />
            <h2 className="text-4xl font-bold text-amber-900">Mais Vendidos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <p className="text-xl font-bold text-amber-800">
                    R$ {product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}