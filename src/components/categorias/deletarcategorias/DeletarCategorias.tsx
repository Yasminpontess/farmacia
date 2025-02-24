import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import Categorias from "../../../models/Categorias";

function DeletarCategorias() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [categorias, setCategorias] = useState<Categorias>({} as Categorias);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      buscarPorId(id);
    }
  }, [id]);

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategorias);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("Erro: Acesso negado");
      }
    }
  }

  async function deletarCategorias() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`);
      alert("Categoria apagada com sucesso");
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("Erro: Acesso negado");
      } else {
        alert("Erro ao deletar a categoria.");
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar categoria</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-blue-300 text-white font-bold text-2xl">
          Categoria
        </header>
        <p className="p-8 text-3xl bg-slate-200 h-full">
          {categorias.descricao || "Carregando..."}
        </p>
        <div className="flex">
          <button
            className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-blue-400 hover:bg-blue-600 flex items-center justify-center"
            onClick={deletarCategorias}
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategorias;
