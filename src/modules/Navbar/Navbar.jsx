import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import logo from "./img/logo.png";
import "./Navbar.css";

export const Navbar = (num) => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href=".">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="input-group mb-3">
          <input
            type="text"
            className="search bg-light"
            placeholder="Que estas buscando?"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-ligth ms-1" type="button" id="button-addon2">
              <BsSearch />
            </button>
          </div>
        </div>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-2">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href=".">
                <span>
                  <AiOutlineUser />{" "}
                </span>
                Mi cuenta
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=".">
                <AiOutlineShoppingCart />
                <span className="badge bg-secondary">0</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
