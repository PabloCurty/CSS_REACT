import "./App.css";
import MyComponent from "./Components/MyComponent";

function App() {
  return (
    <div className="App">
      {/*CSS global*/}
      <h1>React com css</h1>
      {/*CSS de componente*/}
      <MyComponent />
      <p>Esté paragrafo é do APP.js</p>
      {/*Inline CSS*/}
      <p style={{ color: "blue", padding: "25px", borderTop: "2 px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
    </div>
  );
}

export default App;
