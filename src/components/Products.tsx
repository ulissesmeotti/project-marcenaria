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
    price: 230  ,
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
  // {
  //   id: 16,
  //   name: "Porta Espeto de Peróba",
  //   category: "Aparadores",
  //   price: 230,
  //   description: "Aparador decorativo",
  //   image: "images-novas/porta-espeto-2.jpg"
  // },
];

const categories = ["Mesas", "Cadeiras", "Portas", "Tábuas", "Porta Espetos", "Aparadores"];
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
      {[
        {
          id: 1,
<<<<<<< HEAD
          image: "images-novas/caideira-de-balanco.jpg",
=======
          image: "images/cadeira-de-balancoo.jpg",
>>>>>>> 8cc41e8d22c9685acaadf3026d7bdd4118878005
          name: "Cadeira de Balanço em eucalipto",
          description: "Totalmente em madeira, com lindos acabamentos",
          price: 900,
        },
        {
          id: 2,
          image: "images/porta-espeto-3.jpg",
          name: "Porta Espeto de Eucalipto",
          description: "Inteiro de madeira com espaço para 9 espetos",
          price: 230,
        },
        {
          id: 3,
<<<<<<< HEAD
          image: "images-novas/caixa-de-lenha.jpg",
=======
          image: "images/caixa-de-lenha.jpg",
>>>>>>> 8cc41e8d22c9685acaadf3026d7bdd4118878005
          name: "Caixa de lenha em eucalipto",
          description: "Ideal para decorar o espaço e guardar lenha",
          price: 830,
        },
        {
          id: 4,
          image: "images/img-mesa-centro.jpg",
          name: "Mesa de centro",
          description: "Mesa de centro para decorar seu ambiente",
          price: 450,
        },
      ].map((product) => (
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