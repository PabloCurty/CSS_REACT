import "./App.css";
import MyComponent from "./Components/MyComponent";
import { useState } from "react"
import Title from "./Components/Title";

function App() {
  const n = 15;
  const [name] = useState("Pablo");
  const redTitle = true;
  return (
    <div className="App">
      {/*CSS global*/}
      <h1>React com css</h1>
      {/*CSS de componente*/}
      <MyComponent />
      <p>Esté paragrafo é do APP.js</p>
      {/*Inline CSS*/}
      <p
        style={{ color: "blue", padding: "25px", borderTop: "2 px solid red" }}
      >
        Este elemento foi estilizado de forma inline
      </p>
      {/*CSS Dinâmico*/}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2
        style={
          name === "Pablo" ? { color: "green", backgroundColor: "#000" } : null
        }
      >
        CSS dinâmico teste nome useState
      </h2>
      {/*Classe Dinâmica*/}
      <h2 className={redTitle ? "red-title" : "title"}>
        Esse título vai ter classe dinâmica
      </h2>
      {/*CSS Modules*/}
      <Title/>

    </div>
  );
}

export default App;
