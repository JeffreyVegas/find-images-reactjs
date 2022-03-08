import React from "react";
import "./styleImage.css";

const ListadoImagenes = ({ imagenes }) => {
  console.log(imagenes);
  return (
    <div className="grid">
      {imagenes.map((im) => (
        <a className="box" href={im.largeImageURL} target="_blank">
          <div className="box__image">
            <img src={im.previewURL} alt="" />
          </div>
          <span className="box_info">
            {im.likes} <span>likes</span> - {im.views} <span>views</span>
          </span>
        </a>
      ))}
    </div>
  );
};

export default ListadoImagenes;
