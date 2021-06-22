import Product from "./Product";

import React from "react";

function ProductList(props) {
  return (
    <div>
      {props.ps.map((p) => {
        return <Product product={p} addToCart={props.addToCart} removeFromCart ={props.removeFromCart}/>;
      })}
    </div>
  );
}

export default ProductList;