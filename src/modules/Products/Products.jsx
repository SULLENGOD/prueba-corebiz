import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import getProduct from "../../helpers/getProduct";
import "./Products.css";

const Products = () => {
  const [product, setProduct] = useState([{}]);

  useEffect(() => {
    getProduct().then((data) => {
      setProduct(data);
    });
  }, []);

  return (
    <>
      {product.map((data) => {
        return (
          <motion.div className="item">
            <div className="card text-center">
              <img src={data.imageUrl} alt="..." />
              <div className="card-body">
                <p className="name-product">{data.productName}</p>
                <p className="fw-bold"> por ${data.price}</p>
                <button className="btn" id="comprar">
                  Comprar
                </button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default Products;
