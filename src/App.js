import React from "react";
import Header from "./components/header/Header";
import Home from "./loyaut/Home";
import axios from "axios";
import Collection from "./loyaut/Collection";
import { Route, Routes } from 'react-router-dom';
import { getCategory } from "./util/getCategory";
import Footer from "./components/footer/Footer";
import Product from "./loyaut/Product";

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

  let links = getCategory(items, "category").map((el, index) => {
    return (<Route key={index} path={`/${el}`} element={<Collection items={items} el={el} />}></Route>)
  })

  let linksProduct = items.map((el, index) => {
    let path = el.path.collection + "/" + el.path.product;
    return (<Route key={index} path={path} element={<Product product={el} />}></Route>)
  })


  return (
    <div className="app_wrapper">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home items={items} />}></Route>
          {links}
          {linksProduct}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App