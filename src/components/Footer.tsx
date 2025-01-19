export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <div className="bg-white p-3 rounded-full">  {/* Círculo com fundo branco */}
              <img
                src="images-novas/logo-cortada.png"
                alt="Logo Móveis Meotti"
                className="h-20 w-20"  // Imagem maior
              />
            </div>
            <span className="text-xl font-semibold">Móveis Meotti</span>
          </div>
          <div className="text-center md:text-right">
            <p>© {new Date().getFullYear()} Marcenaria Móveis Meotti</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
