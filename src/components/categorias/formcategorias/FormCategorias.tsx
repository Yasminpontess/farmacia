import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categorias from "../../../models/Categorias";
import { atualizar, cadastrar, buscar } from "../../../services/Service";

function FormCategorias() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categorias, setCategorias] = useState<Categorias>({
    nome: "",
    descricao: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function buscarPorId(id: string) {
    try {
      const response = await buscar(`/categorias/${id}`, {});
      setCategorias(response);
    } catch (error) {
      alert("Erro ao buscar categoria.");
    }
  }

  useEffect(() => {
    if (id) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategorias({
      ...categorias,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      let response;
      if (id) {
        response = await atualizar(`/categorias`, categorias, {});
        alert("Categoria atualizada com sucesso!");
      } else {
        response = await cadastrar("/categorias", categorias, {});
        alert("Categoria cadastrada com sucesso!");
      }

      setCategorias(response);
    } catch (error) {
      alert("Erro ao cadastrar ou atualizar a categoria.");
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id ? "Editar Categoria" : "Cadastrar Categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            placeholder="Nome Ex: Exak"
            name="nome"
            className="border-2 border-slate-700 rounded p-2"
            value={categorias.nome}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição</label>
          <input
            type="text"
            placeholder="Descrição Ex: Dores musculares"
            name="descricao"
            className="border-2 border-slate-700 rounded p-2"
            value={categorias.descricao}
            onChange={atualizarEstado}
          />
        </div>

        <button
          className="rounded text-slate-100 bg-blue-300 hover:bg-blue-500 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
        >
          {isLoading ? "Carregando..." : id ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default FormCategorias;
