import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Base Message");

  const handleOnClick = async () => {
    const {
      data: { message },
    } = await axios.get(
      "https://eio9mbnd2j.execute-api.us-west-2.amazonaws.com/default/my-service-dev-hello",
      { crossdomain: true }
    );

    setMessage(message);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello from app</p>
        <p>{message}</p>
        <button onClick={() => handleOnClick()}>Fetch</button>
        <button onClick={() => setMessage("Base Message")}>Reset</button>
      </header>
    </div>
  );
}

export default App;
