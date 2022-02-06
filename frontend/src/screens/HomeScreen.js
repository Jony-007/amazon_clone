import React from "react";
import data from "../data";
import { Product } from "../components/index";

function HomeScreen() {
  return (
    <div className="center row">
      {data.products.map((product) => {
        return <Product key={product._id} product={product} />;
      })}
    </div>
  );
}

export default HomeScreen;
