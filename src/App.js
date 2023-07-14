import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";

const baseURL = "https://mern-b1.onrender.com/api/users/hola";

function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h1>{post.field}</h1>
        <p>{post.field}</p>
      </header>
    </div>
  );
}

export default App;
