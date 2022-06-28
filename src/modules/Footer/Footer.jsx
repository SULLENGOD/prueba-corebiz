import React from "react";
import logo from "./img/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="d-flex justify-content-center foot">
      <div className="row justify-content-center ">
        <div className="col-sm-auto">
          <h3 className="text">Ubicacion</h3>
          <p className="text">Avenida Andromeda, 2000 Bloco 6 de 8</p>
          <p className="text">Alphavile SP</p>
          <p className="text">brazil@corebiz.ag</p>
          <p className="text">+55 11 3090 1039</p>
        </div>
        <div className="col-sm-auto mr-4">
          <span className="btn btn-primary mb-3 mt-4 d-block">Conatctanos</span>{" "}
          <br />
          <span className="btn btn-primary d-block">
            Habla con un consultor
          </span>
        </div>
        <div className="col-sm-auto p-5">
          <div className="text-center ">
            <p className="text"> Desarrollado por </p>
            <img src={logo} alt="..." id="logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
