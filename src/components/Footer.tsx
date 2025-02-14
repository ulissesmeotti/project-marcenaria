import { FacebookIcon, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Primeira linha: Logo e slogan */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            {/* <div className="bg-white p-3 rounded-full shadow-lg">
              <img
                // src="images-novas/logo-cortada.png"
                alt="Logo Móveis Meotti"
                className="h-20 w-20"  // Tamanho aumentado
              />
            </div> */}
            <div>
              <span className="text-xl font-semibold">Móveis Meotti</span>
              <p className="text-sm text-amber-200">Móveis sob medida com qualidade e estilo</p>
            </div>
          </div>

          {/* Redes sociais */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/moveismeotti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-200 hover:text-white transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/moveismeotti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-200 hover:text-white transition-colors"
            >
              <FacebookIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Segunda linha: Links úteis e Contato */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">  {/* 2 colunas no mobile */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Início</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li><a href="tel:+5511999999999" className="text-amber-200 hover:text-white transition-colors">+55 (45) 99907-1709</a></li>
              <li><a href="mailto:contato@moveismeotti.com" className="text-amber-200 hover:text-white transition-colors">marcenariamoveismeotti@gmail.com</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Endereço: Avenida Castelo Branco, Novo Sarandi, Toledo/PR</a></li>
            </ul>
          </div>
        </div>

        {/* Terceira linha: Direitos autorais */}
        <div className="text-center border-t border-amber-800 pt-6">
          <p className="text-sm text-amber-200">
            © {new Date().getFullYear()} Marcenaria Móveis Meotti. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}