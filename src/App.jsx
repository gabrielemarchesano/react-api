import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const actressesEndpoint = "https://lanciweb.github.io/demo/api/actresses/";
  const [actresses, setActresses] = useState([]);

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

  return (
    <div className="container">
      <header className="text-center py-4">
        <h1>Booltiful</h1>
      </header>

      <ul className="list-unstyled">
        <div className="row row-gap-3">
          {
            actresses.map((actress) => (
              <div className="column col-12 col-md-3">
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
      </ul>
    </div>
  )
}

export default App
