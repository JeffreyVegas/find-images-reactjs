import React, { useState } from "react";
import Error from "./Error";

const Formulario = ({ setBusqueda }) => {
  const [termino, setTermino] = useState("");
  const [error, setError] = useState(false);

  const buscarImagen = (e) => {
    e.preventDefault();

    //validar
    if (termino.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    setBusqueda(termino);
  };

  return (
    <form onSubmit={buscarImagen}>
      <div className="row justify-content-center">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca una Imagen, Ej: futbol, cocina, arte ..."
            onChange={(e) => setTermino(e.target.value)}
          />
        </div>
        {/* <div className="form-group col-md-4">
                    <input 
                    type="submit"
                    className="btn btn-lg btn-info btn-block"
                    value="Buscar"
                    />
                </div> */}
      </div>
      {error ? <Error mensaje="debes escribir algo" /> : null}
    </form>
  );
};

export default Formulario;
