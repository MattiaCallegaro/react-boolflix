
import axios from 'axios'
import ReactCountryFlag from "react-country-flag"
import language from '../data/language'
import { useEffect, useState } from 'react'



function App() {

  const [search, setSearch] = useState("")
  const [films, setFilms] = useState([]);


  const searchedFilm = () => {
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "e99307154c6dfb0b4750f6603256716d",
          query: search
        }
      })
      .then((response) => {
        setFilms(response.data.results);
        console.log("Risposta API:", response);
        console.log("Risultati film:", response.data.results);
      })
  }



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>BOOLFLIX</h1>
          </div>
          <div className="col-12">
            <input type="text" className='form-control' placeholder='Cerca...' value={search}
              onChange={(e) => setSearch(e.target.value)} />
            <button type='submit' className="btn btn-primary" onClick={searchedFilm}>Cerca</button>
          </div>

          <div className="row">
            {films.map((film) => {
              return (

                <div className="col-12">
                  <div className="card">
                    <div className="card-image-top">
                      <img src={film.poster_path} alt="" />
                    </div>
                    <div className="card-body">
                      <h5>Title: {film.title}</h5>
                      <h5>Original title: {film.original_title}</h5>
                      <p>{"Language: "}
                        <ReactCountryFlag
                          countryCode={language[film.original_language]}
                          svg
                          style={{
                            width: '1.5em',
                            height: '1.5em',
                          }}
                        />
                      </p>
                      <p>Vote: {film.vote_count}</p>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div>

    </>
  )
}

export default App
