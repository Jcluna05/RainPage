import React, { useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Content.css";
import "../../styles/InteractiveContent.css";

const MainContent = () => {
  // Código para el carrusel de imágenes
  const settings = {
    autoplay: true,
    autoplaySpeed: 7000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Código para el contenido interactivo
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [200, 400], [0, 1]);

  useEffect(() => {
    const handleImageLoad = () => {
      setImagesLoaded(true);
    };

    const images = Array.from(document.querySelectorAll(".custom-image"));
    let loadedCount = 0;

    images.forEach((image) => {
      if (image.complete) {
        loadedCount++;
      } else {
        image.addEventListener("load", handleImageLoad);
      }
    });

    if (loadedCount === images.length) {
      setImagesLoaded(true);
    }

    return () => {
      images.forEach((image) => {
        image.removeEventListener("load", handleImageLoad);
      });
    };
  }, []);

  return (
    <div className="MainContent">
        {/* Carrusel de imágenes */}
        <div className="container">
            <Slider {...settings}>
            <div>
                <img src="assets/InicioRain.jpg" alt="Rain-Ecuador" />
            </div>
            <div>
                <img src="assets/Rain-Ecuador.jpg" alt="Imagen 2" />
            </div>
            <div>
                <img src="imagen3.jpg" alt="Imagen 3" />
            </div>
            </Slider>
            <div className="box">
                <h1 className="title">
                RAIN (Red de Aprendizaje Inmersivo - Ecuador)
                </h1>
            </div>
        </div>

        {/* Contenido interactivo */}
        <div className="InteractiveContent">
            <div className="row">
                <motion.div
                    className={`image-item ${imagesLoaded ? "loaded" : ""}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ opacity }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >

                    <motion.img
                        src="/assets/interactive_content/MiembrosRAIN.png"
                        alt="Background"
                        className="custom-image"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    />
                    <div className="image-content">
                        <h3 className="custom-title">Miembros de la RED RAIN</h3>    
                    </div>
                </motion.div>

                <motion.div
                    className={`image-item ${imagesLoaded ? "loaded" : ""}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ opacity }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                <motion.img
                    src="/assets/interactive_content/ReconocimientoRAIN.png"
                    alt="Background"
                    className="custom-image"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                />
                <div className="image-content">
                    <h3 className="custom-title">Reconocimiento RAIN</h3>
                </div>

                </motion.div>
            </div>
            <div className="row">
                <motion.div
                    className={`image-item ${imagesLoaded ? "loaded" : ""}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ opacity }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >

                <motion.img
                    src="/assets/interactive_content/EventosRAIN.png"
                    alt="Background"
                    className="custom-image"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                />
                <div className="image-content">
                    <h3 className="custom-title">Eventos RAIN</h3>
                </div>
                </motion.div>
                <motion.div
                    className={`image-item ${imagesLoaded ? "loaded" : ""}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{ opacity }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                <motion.img
                    src="/assets/interactive_content/AlianzasRAIN.png"
                    alt="Background"
                    className="custom-image"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                />
                <div className="image-content">
                    <h3 className="custom-title">Alianzas RAIN</h3>
                </div>
                </motion.div>
            </div>
        </div>
    </div>
  );
};

export default MainContent;
