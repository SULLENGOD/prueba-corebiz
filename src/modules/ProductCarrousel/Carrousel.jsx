import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Carousel.css";
import Products from "../Products/Products";

const Carrousel = () => {
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="d-flex justify-content-center mt-5 mb-3">
      <div className="carousel-div">
        <div>
          <h4>Mas vendidos</h4>
        </div>
        <div className="">
          <motion.div ref={carousel} className="carousel ">
            <motion.div
              className="inner-carousel"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
            >
              <Products />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
