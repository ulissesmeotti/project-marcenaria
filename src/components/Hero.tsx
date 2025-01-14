import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("/images/img-fundo-marcenaria.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Marcenaria Móveis Meotti
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Mais de 65 anos transformando madeira em arte
          </p>
          <a
            href="#contact"
            className="inline-block bg-amber-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-900 transition-colors"
          >
            Entre em Contato
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </div>
  );
}
