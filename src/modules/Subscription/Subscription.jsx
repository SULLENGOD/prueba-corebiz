import React from "react";
import './Subscription.css'

const Subscription = () => {


  return (
    <div className="d-flex justify-content-center sub">
      <div>
        <h3 className="label mt-3">¡Unete a nuestras novedades y promociones!</h3>
        <div className="d-flex justify-content-center mb-5 mt-4">
          <form action="." className="row">
            <div className="col-auto">
              <input type="text" placeholder="email" className="form-control"/>
            </div>
            <div className="col-auto ">
              <input type="text" placeholder="Nombre"  className="form-control"/>
            </div>
            <button className="col-auto btn btn-dark" id="boton">
                Subscribe!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
