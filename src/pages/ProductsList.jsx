import React, { useEffect } from "react";
import MyCard from "../components/MyCard";

const ProductsList = ({ products, getProduct }) => {
  useEffect(() => {
    getProduct();
  }, []);
  console.log(products);
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {products.map((item) => (
        <MyCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductsList;
