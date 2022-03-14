import { CloseOutlined } from "@ant-design/icons";
import React from "react";
import Modal from "react-modal";
import "./product.css";

export const Product = ({ value, height, show, setShow }) => {
  const obj = {
    top: { height },
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      border: "none",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal isOpen={show} style={customStyles}>
      <div className="prodWrapper" style={obj}>
        <div className="prodWrapperImg">
          <img src={value.images} alt={value.product_name} />
          <CloseOutlined onClick={() => setShow(false)} />
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
    </Modal>
  );
};
