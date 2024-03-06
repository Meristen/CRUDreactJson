import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsList from "../pages/ProductsList";
import AddProduct from "../pages/AddProduct";
import EditPage from "../pages/EditPage";

const MainRoutes = ({
  addProduct,
  products,
  getProduct,
  getOneProduct,
  oneProduct,
  updateProduct,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<ProductsList products={products} getProduct={getProduct} />}
      />
      <Route path="/add" element={<AddProduct addProduct={addProduct} />} />
      <Route
        path="/edit/:id"
        element={
          <EditPage
            updateProduct={updateProduct}
            getOneProduct={getOneProduct}
            oneProduct={oneProduct}
          />
        }
      />
    </Routes>
  );
};

export default MainRoutes;
