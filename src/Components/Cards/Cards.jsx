import React from "react";

export const Cards = () => {
  return (
    <div className="card" style={styleCard}>
      <img src="..." className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p className="card-text">Description</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

const styleCard = {
  width: "18rem",
};
