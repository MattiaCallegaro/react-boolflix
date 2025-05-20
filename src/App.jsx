
import axios from 'axios'
import { useEffect, useState } from 'react'


function App() {

  const [search, setSearch] = useState("")
  const [films, setFilms] = useState([]);
  const query = encodeURIComponent(search)

  const searchedFilm = () => {
    axios
      .get("https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d", {
        params: {
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
        </div>
      </div>

    </>
  )
}

export default App
