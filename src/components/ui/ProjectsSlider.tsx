import React from "react";
import { motion } from "framer-motion";

import "../../styles/marquee.css";

const images = [
  {
    src: "./assets/images/NIC_0616a.jpg",
    alt: "EuroConsumers",
  },
  {
    src: "./assets/images/DSC_4201a.jpg",
    alt: "Socially powerful",
  },
  {
    src: "./assets/images/NIC_0616a.jpg",
    alt: "SIG",
  },
  {
    src: "./assets/images/DSC_4201a.jpg",
    alt: "Housefly",
  },
  {
    src: "./assets/images/NIC_0616a.jpg",
    alt: "Poseidon’s Moringa",
  },
  {
    src: "./assets/images/DSC_4201a.jpg",
    alt: "Lotus Vancouver",
  },
];

const marqueeVariants = {
  animate: {
    x: [0, -1080],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

const ProjectsSlider = () => {
  return (
    <section className="all-projects trigger pt-20">
      <div className="all-projects__inner">
        <img
          className="all-projects__icon h-10"
          src="https://digitalpresent.io/wp-content/themes/digital-present/src/assets/plus-vertical.svg"
          alt=""
        />
        <div className="all-projects__content">
          <h2 className=" font-HeadingFont md:text-6xl text-4xl md:w-3/4 w-full leading-normal text-center">
            Frames of
            <span className="text-red-600 italic lowercase">Brilliance</span>
          </h2>
          <p className="text-center py-10 font-Expert md:text-6xl text-2xl md:w-3/4 w-full !text-nowrap tracking-wider">
            Capturing Moments, Creating Memories
          </p>
        </div>
        <div className="marquee-images-wrapper">
          <motion.div
            className="marquee-images"
            variants={marqueeVariants}
            animate="animate"
          >
            <div className="visible-images">
              {images.map((image, index) => (
                <figure key={index} className="all-projects-img">
                  <img src={image.src} alt={image.alt} />
                </figure>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSlider;
