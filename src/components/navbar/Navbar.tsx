import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-screen  top-0 left-0 bg-blue-400 text-white py-3 z-50 h-16">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <Link to="/home" className="text-2xl font-bold">
            Farmacia Bem Estar
          </Link>
          <div className="flex gap-4">
            <Link to="/sobre" className="hover:underline">
              Produtos
            </Link>
            <Link to="/cadastrarcategorias" className="hover:underline">
              Cadastrar Categorias
            </Link>
            <Link to="/categorias" className="hover:underline">
              Categorias
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
