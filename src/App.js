import React from "react";
import Header from "./components/header/Header";
import Home from "./loyaut/Home";



const App = () => {
  return (
    <div className="app_wrapper">
      <Header />
      <main>
        <Home/>
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default App