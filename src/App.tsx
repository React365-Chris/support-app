import React from "react";
import "./App.css";
import Content from "./components/Content";
import Nav from "./components/Nav";



function App() {
  return (
    <div className="grid-container">
      <div className="nav">
      <Nav />
      </div>
      <div id="header">
        <h1>Welcome to Universal Support (Preview)</h1>
        <p>
          Ask for applicaiton support and share your feeback. Help us make
          improvements and build new products.
        </p>
      </div>
      <div id="content">
        <Content />
      </div>
      <main>Main</main>
      <footer>
        <div className="footer-right">© React-365 LLC 2022</div>
      </footer>
    </div>
  );
}

export default App;
