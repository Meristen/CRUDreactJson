import React, { useState } from "react";
import Header from "./components/Header";
import MainRoutes from "./routes/MainRoutes";
import axios from "axios";

const App = () => {
  const API = "http://localhost:8000/products";
  const [products, setProducts] = useState([]);
  const [oneProduct, setOneProduct] = useState(null);

  // ? read
  async function getProduct() {
    const { data } = await axios.get(API);
    setProducts(data);
  }

  // ? create
  function addProduct(newProduct) {
    axios.post(API, newProduct);
  }
  // ? update
  async function getOneProduct(id) {
    const { data } = await axios.get(`${API}/${id}`);
    setOneProduct(data);
  }

  async function updateProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    getProduct();
  }
  // ? delete

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProduct();
  }

  return (
    <div>
      <Header />
      <MainRoutes
        deleteProduct={deleteProduct}
        updateProduct={updateProduct}
        getOneProduct={getOneProduct}
        oneProduct={oneProduct}
        getProduct={getProduct}
        products={products}
        addProduct={addProduct}
      />
    </div>
  );
};

export default App;
