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
        {
          actresses.map((actress) => (
            <div className="card">
              <li key={actress.id}>
                <img src={actress.image}/>
                <p>{actress.name}</p>
                <p>{actress.birth_year}</p>
                <p>{actress.nationality}</p>
                <p>{actress.biography}</p>
                <p>{actress.awards}</p>
              </li>
            </div>
          ))
        }
      </ul>
    </div>
  )
}

export default App
