import { useState } from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'


function App() {

  const [search, setSearch] = useState("")

  const searchedFilm = () => {
    axios
      .get("https://api.themoviedb.org/3/discover/movie?api_key=e99307154c6dfb0b4750f6603256716d")
      .then((response) => {

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
            <input type="text" placeholder='Cerca...' value={search} />
            <button type='submit' className="btn btn-primary">Cerca</button>
          </div>



        </div>
      </div>

    </>
  )
}

export default App
