import { useState } from "react";
import { useDispatch } from "react-redux";
import { RemoveMovieAction } from "../redux/Actions";

export const MovieCard = ({ movie }) => {
  const [like, setLike] = useState(movie.likes);
  const [dislikes, setDislikes] = useState(movie.dislikes);

  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDisLikeActive] = useState(false);

  //console.log(like, "like");
  const dispatch = useDispatch();
  const likeButton = () => {
    if (likeActive) {
      setLikeActive(false);
      setLike(like - 1);
    } else {
      setLikeActive(true);
      setLike(like + 1);
      if (dislikeActive) {
        setDisLikeActive(false);
        setLike(like + 1);
        setDislikes(dislikes - 1);
      }
    }
  };

  const dislikeButton = () => {
    if (dislikeActive) {
      setDisLikeActive(false);
      setDislikes(dislikes - 1);
    } else {
      setDisLikeActive(true);
      setDislikes(dislikes + 1);
      if (likeActive) {
        setLikeActive(false);
        setDislikes(dislikes + 1);
        setLike(like - 1);
      }
    }
  };

  return (
    <>
      <div className="col-md-4 col-sm-6 col-xs-12" key={movie.id}>
        <div className="card-header">
          <img src={movie.imageMovie} alt={movie.title} />
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${like * 10}%`, backgroundColor: "#49a078" }}
            aria-valuenow={like}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {`${like}`}
          </div>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${dislikes * 10}%`, backgroundColor: "#d72638" }}
            aria-valuenow={dislikes}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {`${dislikes}`}
          </div>
        </div>
        <div className="card-body">
          <i
            className="bi bi-hand-thumbs-up-fill"
            style={{
              fontSize: "2rem",
              color: "#49a078",
              cursor: "pointer",
              marginBottom: 10,
            }}
            onClick={() => likeButton()}
          ></i>
          <i
            className="bi bi-hand-thumbs-down-fill"
            style={{
              fontSize: "2rem",
              color: "#d72638",
              cursor: "pointer",
              marginBottom: 10,
            }}
            onClick={() => dislikeButton()}
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
