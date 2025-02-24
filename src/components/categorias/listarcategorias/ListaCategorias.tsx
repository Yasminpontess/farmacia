import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import Categoria from "../../../models/Categorias";
import CardCategorias from "../cardcategorias/CardCategorias";
import { buscar } from "../../../services/Service";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [carregando, setCarregando] = useState(true);

  async function buscarCategorias() {
    try {
      const resposta = await buscar("/categorias", {}); // Corrigindo a chamada
      setCategorias(resposta);
    } catch (error: any) {
      console.error("Erro ao buscar categorias:", error);
    } finally {
      setCarregando(false); // Finaliza o carregamento
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <>
      {carregando ? (
        <div className="flex flex-col items-center">
          <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
          />
          <p className="text-lg text-gray-500 mt-4">Carregando categorias...</p>
        </div>
      ) : categorias.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Nenhuma categoria encontrada.
        </p>
      ) : (
        <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categorias.map((categoria) => (
                <CardCategorias key={categoria.id} categorias={categoria} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ListaCategorias;
