import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("test");

  const handleOnClick = () => {
    axios
      .get(
        "https://eio9mbnd2j.execute-api.us-west-2.amazonaws.com/default/my-service-dev-hello",
        { crossdomain: true }
      )
      .then(({ data }) => setMessage(data.message));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello from app</p>
        <p>{message}</p>
        <button onClick={() => handleOnClick()}>Matt</button>
      </header>
    </div>
  );
}

export default App;
