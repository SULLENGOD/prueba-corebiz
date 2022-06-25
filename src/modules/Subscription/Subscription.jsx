import React from "react";

const Subscription = () => {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <h3>¡Unete a nuestras novedades y promociones!</h3>
        <div className="d-flex justify-content-center">
          <form action="." className="row">
            <div className="col-auto">
              <input type="text" placeholder="email" />
            </div>
            <div className="col-auto">
              <input type="text" placeholder="Nombre" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
