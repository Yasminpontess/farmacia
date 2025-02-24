import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import "./App.css";
import ListaCategorias from "./components/categorias/listarcategorias/ListaCategorias";
import FormCategorias from "./components/categorias/formcategorias/FormCategorias";
import DeletarCategoria from "./components/categorias/deletarcategorias/DeletarCategorias";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarcategorias" element={<FormCategorias />} />
            <Route path="/editarcategorias/:id" element={<FormCategorias />} />
            <Route path="/deletar/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
