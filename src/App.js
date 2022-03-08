import React, { useState, useEffect } from "react";
import Formualrio from "./Component/Formulario";
import ListadoImagenes from "./Component/ListadoImagenes";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [paginaactual, setPaginaactual] = useState(1);
  const [totalpaginas, settotalpaginas] = useState(1);

  const ConsultarAPI = async () => {
    const ImagenesXpagina = 30;
    const key = "9804629-29bce27499dfba92f2586fda2";
    const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${ImagenesXpagina}&page=${paginaactual}`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    // console.log(typeof resultado);
    setImagenes(resultado.hits);
    const calcularTotalPaginas = Math.ceil(
      resultado.totalHits / ImagenesXpagina
    );
    settotalpaginas(calcularTotalPaginas);
    const jumbotron = document.querySelector(".jumbotron");
    jumbotron.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (busqueda === "") return;
    ConsultarAPI();
  }, [busqueda, paginaactual]);

  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual - 1;

    if (nuevaPaginaActual <= 0) return;

    setPaginaactual(nuevaPaginaActual);
  };

  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactual + 1;

    if (nuevaPaginaActual > totalpaginas) return;

    setPaginaactual(nuevaPaginaActual);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes</p>
        <Formualrio setBusqueda={setBusqueda} />
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagenes} />
      </div>
      <div className="row justify-content-center mb-4">
        <button
          type="button"
          className="btn btn-info mr-1"
          onClick={paginaAnterior}
        >
          &laquo; Anterior{" "}
        </button>
        <button
          type="button"
          className="btn btn-info mr-1"
          onClick={paginaSiguiente}
        >
          Siguiente &raquo;
        </button>
      </div>
    </div>
  );
}

export default App;
