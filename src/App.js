import "./App.css";
import Price from "./Price";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <div className="container">
      <div className="row bg-primary p-4">
        <div className="col-lg-4">
          <Price price="0">
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Single User
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                5GB Storage
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Unlimited Public Projects
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Community Access
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                Unlimited Private Projects
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                Dedicated Phone Support
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                Free Subdomain
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                Monthly Status Reports
              </li>
            </ul>
          </Price>
        </div>
        <div className="col-lg-4">
          <Price price="9">
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                5 Users
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                50GB Storage
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Unlimited Public Projects
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Community Access
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Unlimited Private Projects
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Dedicated Phone Support
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Free Subdomain
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                Monthly Status Reports
              </li>
            </ul>
          </Price>
        </div>
        <div className="col-lg-4">
          <Price price="49">
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Unlimited Users
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                150GB Storage
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Unlimited Public Projects
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Community Access
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Unlimited Private Projects
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Dedicated Phone Support
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Free Subdomain
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Monthly Status Reports
              </li>
            </ul>
          </Price>
        </div>
      </div>
    </div>
  );
}

export default App;
