import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-screen fixed top-0 left-0 bg-blue-400 text-white py-3 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <Link to="/home" className="text-2xl font-bold">
            Farmacia
          </Link>
          <div className="flex gap-4">Sobre Produtos Categorias</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
