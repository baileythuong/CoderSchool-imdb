import React, {useState, useEffect} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MovieCard from "./components/MovieCard.js";
import NavBar from "./components/NavBar.js";
import MovieCarousel from "./components/MovieCarousel";

function App() {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState(null);
  const [page, setGetMorePages] = useState(1);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState(null);

  const apiKey = "cc62d4f89e69dfc3dd84c09076068c76";

  const getApi = async () => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${page}`;
    const result = await fetch(url);
    const movieData = await result.json();
    const newMovieData = data.concat(movieData.results);
    setData(newMovieData);
    console.log("new", newMovieData);
  };

  const getGenres = async () => {
    const urlGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
    const result = await fetch(urlGenres);
    const dataGenres = await result.json();
    console.log("movie genres", dataGenres);
    setGenres(dataGenres);
  };

  const getSearch = async e => {
    let urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInputValue}&page=${page}`;

    const result = await fetch(urlSearch);
    const movieData = await result.json();
    console.log("data", data);
    const newMovieData = data.concat(movieData.results);
    setData(newMovieData);
    console.log("new movie data", newMovieData);
    setIsSearch(true);
  };

  const getTrending = async () => {
    let urlTrending = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`
    const result = await fetch(urlTrending);
    const trendingData= await result.json();
    // console.log("trending movies", trendingData.results);
    setTrendingMovies(trendingData.results);
  }

  useEffect(() => {
    getApi();
    getGenres();
    getTrending();
  }, []);

  useEffect(() => {
    console.log(isSearch);
    isSearch ? getSearch() : getApi();
  }, [page]);

  const filterGenres = genres_id => {
    const filterData = data.filter(movie =>
      movie.genre_ids.includes(genres_id)
    );
    setData(filterData);
    console.log("genres filter", filterData);
    setHideButton(true);
  };

  return (
    <div className="App">
      <div className="navigation-bar">
        <NavBar
          onFilterGenres={filterGenres}
          changeState={setSearchInputValue}
          search={getSearch}
          onSetData={setData}
          genres={genres}
        />
      </div>

      <section>
        <div className="jumbotron-fluid">
          <h2 className="display-5 pl-2 text-left">IN THEATERS</h2>
        <MovieCarousel trendingMovies={trendingMovies}/> 
        </div>
      </section>

      <div className="container">
          <h2 className="display-5 pl-2 text-left">POPULAR MOVIES</h2>
          <div className="card-columns">
          {data &&
            data.map((movieInfo, i) => {
              return <MovieCard key={i} info={movieInfo} genres={genres} />;
            })}
            </div>
        </div>
        <div className="container">
        <button
          type="button"
          style={hideButton ? { display: "none" } : {}}
          onClick={() => {
            // getApi();
            setGetMorePages(page + 1);
          }}
          className="btn btn-outline-success btn-lg btn-block my-3"
        >
          More
        </button>
        </div>

    </div>
  );
}

export default App;
