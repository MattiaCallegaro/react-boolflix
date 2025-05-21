
import axios from 'axios'
import ReactCountryFlag from "react-country-flag"
import language from '../data/language'
import { Stars } from './components/Stars'
import { useEffect, useState } from 'react'



function App() {

  const [search, setSearch] = useState("")
  const [films, setFilms] = useState([]);



  const searchedTv = () => {
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "e99307154c6dfb0b4750f6603256716d",
          query: search
        }
      })
      .then((movieResponse) => {
        const movies = movieResponse.data.results;


        axios
          .get("https://api.themoviedb.org/3/search/tv", {
            params: {
              api_key: "e99307154c6dfb0b4750f6603256716d",
              query: search
            }
          })
          .then((tvResponse) => {
            const tvSeries = tvResponse.data.results;
            const fusion = [...movies, ...tvSeries];
            setFilms(fusion);
            console.log("Risposta API:", tvResponse);
            console.log("Tv show:", tvResponse.data.results)
          });
      });
  };



  return (
    <>
      <div className="container">
        <div className="row mt-4 justify-content-center">
          <nav className='navbar '>
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <h1 className='logo-nav'>BOOLFLIX</h1>
              </a>
              <form className='d-flex' role='search'>
                <input type="text" className='form-control' placeholder='Cerca...' value={search}
                  onChange={(e) => setSearch(e.target.value)} />
                <button type='submit' className="btn btn-primary mx-3" onClick={searchedTv}>Cerca</button>
              </form>
            </div>
          </nav>

          <div className="row">
            {films.map((film) => {
              return (
                <div className="col-2 g-4" key={film.id}>
                  <div className="card position-relative overflow-hidden h-100">

                    <img src={
                      film.poster_path
                        ? `https://image.tmdb.org/t/p/w342${film.poster_path}`
                        : "https://tinkjet.it/wp-content/uploads/2025/02/anteprima-non-disponibile-2-9.jpg"} alt="" className='img-fluid' />

                    <div className="card-overlay">
                      <div className="card-body text-white">
                        <h5>Title: {film.title || film.name}</h5>
                        <h5>Original title: {film.original_title || film.original_name}</h5>
                        <p>{"Language: "}
                          <ReactCountryFlag
                            countryCode={language[film.original_language]}
                            style={{
                              width: '1.5em',
                              height: '1.5em',
                            }}
                          />
                        </p>
                        <p>Vote:<Stars initial={film.vote_average / 2} /> </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div >

    </>
  )
}

export default App
