import Price from "./Price";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

function App() {
  const priceData = [
    {
      list: "GB Storage"
    },
    {
      list: "Unlimited Public Projects"
    },
    {
      list: "Community Access"
    },
    {
      list: "Unlimited Private Projects"
    },
    {
      list: "Dedicated Phone Support"
    },
    {
      list: "Free Subdomain"
    },
    {
      list: "Monthly Status Reports"
    }
  ];
  const userType = ["Single User", "5 Users", "Multiple Users"];
  return (
    <div className="container-fluid">
      <div className="row bg-primary p-4">
        <div className="col-lg-4">
          <Price price="0" usertype="Single User">
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {userType[0]}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {priceData[0].list}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {priceData[1].list}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {priceData[2].list}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                {priceData[3].list}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                {priceData[4].list}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                {priceData[5].list}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                {priceData[6].list}
              </li>
            </ul>
          </Price>
        </div>
        <div className="col-lg-4">
          <Price price="9" usertype="5 Users">
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {userType[1]}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {priceData[0].list}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {priceData[1].list}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {priceData[2].list}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {priceData[3].list}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {priceData[4].list}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {priceData[5].list}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                {priceData[6].list}
              </li>
            </ul>
          </Price>
        </div>
        <div className="col-lg-4">
          <Price price="49" usertype="Unlimited Users">
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {userType[2]}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {priceData[0].list}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {priceData[1].list}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {priceData[2].list}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {priceData[3].list}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {priceData[4].list}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {priceData[5].list}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {priceData[6].list}
              </li>
            </ul>
          </Price>
        </div>
      </div>
    </div>
  );
}

export default App;
