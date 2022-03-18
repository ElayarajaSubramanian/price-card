import React from "react";
import "./Price.css";

const Price = (props) => {
  return (
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-uppercase text-center">Free</h5>
        <h6 className="card-price text-center">
          ${props.price}
          <span className="period">/month</span>
        </h6>
        <hr />
        {props.children}
        <div className="d-grid">
          <button className="btn btn-primary text-uppercase rounded-pill btn-medium py-2">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;
