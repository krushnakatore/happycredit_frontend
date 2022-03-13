import React from "react";
import "./product.css";

export const Product = ({ value, height }) => {
  console.log("data", value);

  const obj = {
    top: { height },
  };
  return (
    <div className="prodWrapper" style={obj}>
      <div className="prodWrapperImg">
        <img src={value.images} alt={value.product_name} />
      </div>
      <div className="prodWrapperTag">
        <strong>{value.inner_tagline}</strong>
      </div>
      <div>{value.inner_description}</div>
      <div className="prodWrapperBtn">
        <button>Shop Deal</button>
      </div>
      <div style={{ fontSize: "13px" }}>
        Deals are offered directly by the retailer and subject to their terms.
        Klarna does not guarantee any deal. Klarna may get a commission.
      </div>
    </div>
  );
};
