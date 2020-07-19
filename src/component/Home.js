import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

export const Home = () => {
  return (
    <div>
      <div id="mainnav">
        <ul>
          <li>
            <Link to="#?">Home</Link>
          </li>
          <li>
            <Link to="#?">About</Link>
          </li>
          <li>
            <Link to="#?">Clients</Link>
          </li>
          <li>
            <Link to="#?">Contact Us</Link>
          </li>
        </ul>
      </div>

      <div className="hamb">
        <Link to="#">
          <i className="fa fa-bars"></i>
        </Link>
      </div>
    </div>
  );
};
