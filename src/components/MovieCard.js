import React, {useState, useEffect} from "react";
import moment from "moment";
import Modal from "./Modal"

export default function MovieCard(props) {
  let name;
  const idData = props.info.genre_ids;
  if (props.genres) {
    const genresData = props.genres.genres;
    name = idData.map(id => {
      const a = genresData.filter(genre => {
        if (genre.id === id) return true;
      });
      return a[0].name;
    });
  }
  // console.log(name)

  const apiKey = "cc62d4f89e69dfc3dd84c09076068c76";
  const [trailerData, setTrailerData] = useState(null);
  const getTrailer = async () => {
    const urlTrailer = `https://api.themoviedb.org/3/movie/${props.info.id}/videos?api_key=${apiKey}`;
    // console.log("trailer", urlTrailer);

    const result = await fetch(urlTrailer);
    const trailerData = await result.json();
    setTrailerData(trailerData);
  };

  // props.info && getTrailer();

  useEffect(() => {
    getTrailer();
  }, [props.info]);

  return (
    <div className="card">
      <img
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/w500/${props.info.poster_path}`}
        alt="Card img cap"
      ></img>
      <div className="card-body">
      <p className="card-text text-muted text-left"><img className="mb-1" src="https://img.icons8.com/plasticine/100/000000/starred-ticket.png" width="30" height="30"></img>{moment(props.info.release_date).format("MMMM Do YYYY")}</p>
        <h3 className="card-title text-center">{props.info.title}</h3>
        <p className="card-text">{props.info.overview}</p>
        {
          trailerData && <Modal data={trailerData && trailerData.results[0]} />
        }
      </div>
      
      <div className="card-footer d-flex justify-content-between">
        <div><small className="text-danger">{name && name.join(" | ")}</small></div>
        <div><small className="text-warning"><i className="fas fa-star"></i> {props.info && props.info.vote_average}/10</small></div> 
      </div>
    </div>
  )
}
