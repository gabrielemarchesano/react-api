import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const actressesEndpoint = "https://lanciweb.github.io/demo/api/actresses/";
  const actorsEndpoint = "https://lanciweb.github.io/demo/api/actors/";
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);

  /* function handleClick(){
  } */
  
  useEffect(() => {
    axios
      .get(actressesEndpoint)
      .then(response => {
        console.log(response.data);
        setActresses(response.data);
      })
  }, [])

  useEffect(() => {
    axios
      .get(actorsEndpoint)
      .then(response => {
        console.log(response.data);
        setActors(response.data);
      })
  }, [])

  return (
    <div className="container">
      <header className="text-center py-4">
        <h1>Booltiful</h1>
      </header>

      <ul className="list-unstyled">
        <div className="row row-gap-3 mb-4">
          {
            actresses.map((actress) => (
              <div className="column col-12 col-md-6 col-lg-4">
                <div className="card">
                  <li key={actress.id}>
                    <div className="image-container">
                      <img src={actress.image} className="card-img-top actress-image"/>
                    </div>
                    <div className="card-body">
                      <h6>{actress.name} - {actress.birth_year}</h6>
                      <small>{actress.nationality}</small>
                      <p>{actress.biography}</p>
                      <p className="fst-italic">{actress.awards}</p>
                    </div>
                  </li>
                </div>
              </div>
            ))
          }
        </div>
        <div className="row row-gap-3">
          {
            actors.map((actor) => (
              <div className="column col-12 col-md-6 col-lg-4">
                <div className="card">
                  <li key={actor.id}>
                    <div className="image-container">
                      <img src={actor.image} className="card-img-top actress-image"/>
                    </div>
                    <div className="card-body">
                      <h6>{actor.name} - {actor.birth_year}</h6>
                      <small>{actor.nationality}</small>
                      <p>{actor.biography}</p>
                      <p className="fst-italic">{actor.awards}</p>
                    </div>
                  </li>
                </div>
              </div>
            ))
          }
        </div>
      </ul>
    </div>
  )
}

export default App
