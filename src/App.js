import React from "react";
import Header from "./components/header/Header";
import Home from "./loyaut/Home";
import axios from "axios";


const App = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    async function getItems() {
      try {
        const response = await axios.get("https://64376f640c58d3b14571455e.mockapi.io/Items");
        const data = response.data;
        setItems(data)
      } catch (error) {
        console.log(error);
        getItems();
      }
    }
    getItems()
  }, [])



  return (
    <div className="app_wrapper">
      <Header />
      <main>
        <Home items={items} />
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default App