import React from "react";
import data from "../../data.json";
export const Cards = () => {
  return (
    <div className="d-flex flex-row">
      <div
        id="cards"
        className="card d-flex flex-row w-100  mx-auto justify-content-around align-items-center gap-1 flex-wrap mt-3"
        style={styleCard}
      >
        {data.map((producto) => (
          <div key={producto.id} className="card">
            <h5 className="card-title text-primary">{producto.title}</h5>
            <img src={producto.image} alt="" className="card-image-top" />
            <div className="card-body">
              <p className="card-text">{producto.description}</p>
              <a href="#" className="btn btn-primary">
                Comprar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styleCard = {
  width: "18rem",
};
