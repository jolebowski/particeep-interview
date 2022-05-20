import { useDispatch } from "react-redux";
import { RemoveMovieAction } from "../redux/Actions";

export const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="col-md-4 col-sm-6 col-xs-12" key={movie.id}>
        <div className="card-header">
          <img src={movie.imageMovie} alt="test1" />
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
          <i
            className="bi bi-hand-thumbs-up-fill"
            style={{
              fontSize: "2rem",
              color: "green",
              cursor: "pointer",
              marginBottom: 10,
            }}
          ></i>
          <h2 className="card-title">{movie.title}</h2>
          <p className="card-text">{movie.category}</p>

          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => dispatch(RemoveMovieAction(movie.id))}
          >
            Supprimer le film
          </button>
        </div>
      </div>
    </>
  );
};
