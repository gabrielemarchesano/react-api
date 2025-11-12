import axios from "axios";
import { useState } from "react";

function App() {

  const actressesEndpoint = "https://lanciweb.github.io/demo/api/actresses/";
  const [actresses, setActresses] = useState([]);

  function handleClick(){
    axios
      .get(actressesEndpoint)
      .then(response => {
        console.log(response.data);
        setActresses(response.data);
      })
  }

  return (
    <>
      <h1>Booltiful</h1>
      <button onClick={handleClick}>Clicca</button>
      <ul>
        {
          actresses.map((actress) => (
            <li key={actress.id}>{actress.name}</li>
          ))
        }
      </ul>
    </>
  )
}

export default App
