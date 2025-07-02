import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Canvas from "./Components/Canvas";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        {/* <h1>Canvas</h1> */}
      </header>
      <main>
        <Canvas />
      </main>
    </>
  );
}

export default App;
