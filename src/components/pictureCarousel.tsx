import { useRef, useState, useEffect } from "react";
import carouselData from "./carouselData";
import { Container, Image } from "@chakra-ui/react";
import images from "../components/carouselData";
import { motion } from "framer-motion";
import "../carousel.css";

const PictureCarousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current != undefined) {
      console.log(carousel.current.scrollWidth);
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);
  return (
    <motion.div
      ref={carousel}
      className="carousel"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel"
      >
        {images.map((image) => {
          return (
            <motion.div className="item" key={image}>
              <img src={image} />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default PictureCarousel;
