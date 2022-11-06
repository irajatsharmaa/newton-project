import React from "react";
import { Link } from "react-router-dom";


const imagePrefixUrl = "http://image.tmdb.org/t/p/w500";
function MovieCard(props) {
  const movie = props?.movie;
  return (
    <Link
      to={`/movie/${movie.id}`}
      target="_blank"
      className="card"
      title={movie?.title}
    >
      <img className="card__background" src={`${imagePrefixUrl}${movie?.poster_path}`} alt={movie?.title} />
      <div className="card__content">
      <p className="card_heading">{movie?.title}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
