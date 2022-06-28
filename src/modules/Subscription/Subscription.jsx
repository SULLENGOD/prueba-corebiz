import React, { useState } from "react";
import postSub from "../../helpers/postSub";

import "./Subscription.css";

const Subscription = () => {
  const [mail, setMail] = useState("");
  const [nombre, setNombre] = useState("");
  const [sub, setSub] = useState({
    email: "",
    name: "",
  });

  const setEmail = (e) => {
    setMail(e.target.value);
  };

  const setName = (e) => {
    setNombre(e.target.value);
  };

  const submitSub = async (e) => {
    e.preventDefault();
    setSub({
      email: mail,
      name: nombre,
    });

    let response = await postSub(sub);
    return response;
  };

  return (
    <div className="d-flex justify-content-center sub">
      <div>
        <h3 className="label mt-3">
          ¡Unete a nuestras novedades y promociones!
        </h3>
        <div className="d-flex justify-content-center mb-5 mt-4">
          <form action="." className="row" onSubmit={submitSub}>
            <div className="col-auto">
              <input
                type="text"
                placeholder="email"
                className="form-control"
                onChange={setEmail}
              />
            </div>
            <div className="col-auto ">
              <input
                type="text"
                placeholder="Nombre"
                className="form-control"
                onChange={setName}
              />
            </div>
            <button className="col-auto btn" id="boton" type="submit">
              Subscribe!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
