import React from "react";
import image from "./img/1366_2000.jpeg";
import "./Section.css";

const Section = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div className="row">
            <div className="black col-6 text-center ">
              <h5 className="text">¡Hola! ¿Que es lo que buscas?</h5>
              <div className="text-start">
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
        <div class="carousel-item">
          <div className="row">
            <div className="black col-6 text-center ">
              <h5 className="text">¡Hola! ¿Que es lo que buscas?</h5>
              <div className="text-start">
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
        <div class="carousel-item">
          <div className="row">
            <div className="black col-6 text-center ">
              <h5 className="text">¡Hola! ¿Que es lo que buscas?</h5>
              <div className="text-start">
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
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Section;
