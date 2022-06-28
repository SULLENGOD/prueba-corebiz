import React from "react";
import image from "./img/1366_2000.jpeg";
import "./Section.css";

const Section = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active s-button"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          className=" s-button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          className=" s-button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="black col-6">
              <div className="text-start d-flex justify-content-center align-items-center div-text">
                <h5 className="text">¡Hola! ¿Que es lo que buscas?</h5>
              </div>
              <hr />
              <div className="text-start text-center d-flex justify-content-center align-items-center">
                <h1 className="text-h3">
                  Crear o migrar tu comercio electronico?
                </h1>
              </div>
            </div>
            <div className="white col-6">
              <img src={image} alt="..." />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="black col-6">
              <div className="text-start d-flex justify-content-center align-items-center div-text">
                <h5 className="text">¡Hola! ¿Que es lo que buscas?</h5>
              </div>
              <hr />
              <div className="text-start text-center d-flex justify-content-center align-items-center">
                <h1 className="text-h3">
                  Crear o migrar tu comercio electronico?
                </h1>
              </div>
            </div>
            <div className="white col-6">
              <img src={image} alt="..." />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="black col-6">
              <div className="text-start d-flex justify-content-center align-items-center div-text">
                <h5 className="text">¡Hola! ¿Que es lo que buscas?</h5>
              </div>
              <hr />
              <div className="text-start text-center d-flex justify-content-center align-items-center">
                <h1 className="text-h3">
                  Crear o migrar tu comercio electronico?
                </h1>
              </div>
            </div>
            <div className="white col-6">
              <img src={image} alt="..." />
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Section;
