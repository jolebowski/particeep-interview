import React from "react";

export const MovieCard = () => {
  return (
    <>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="card-header">
          <img src="https://image.tmdb.org/t/p/original//6DrHO1jr3qVrViUO6s6kFiAGM7.jpg" />
        </div>
        <div className="progress" style={{ height: "2px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "50%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="card-body">
          <h2 className="card-title">test1</h2>
          <p className="card-text">test2.</p>
          <i
            class="bi bi-hand-thumbs-up-fill"
            style={{
              fontSize: "2rem",
              color: "green",
              cursor: "pointer",
              marginBottom: 10,
            }}
          ></i>
          <button type="button" className="btn btn-outline-danger btn-sm">
            Small button
          </button>
        </div>
      </div>
    </>
  );
};
