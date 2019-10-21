import React from "react";

export default function MovieCarousel(props) {
  console.log("images", props.trendingMovies);

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >    
      <div className="carousel-inner">
        {props.trendingMovies &&
          props.trendingMovies.map((item, i) => {
            console.log(i);
            return (
              
              <div className={`carousel-item ${i == 0 && 'active'}`}>
                <img
                  className="d-block w-100"
                  src={`https://image.tmdb.org/t/p/w1066_and_h600_bestv2/${item.backdrop_path}`}
                  alt="First slide"
                ></img>
                <h2 className="display-4 carousel-caption text-light">{`${item.original_title}`}</h2>
              </div>
            );
          })}    
       </div>


      
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
