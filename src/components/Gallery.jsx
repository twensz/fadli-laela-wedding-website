import React, { useEffect } from "react";
import { motion } from "framer-motion";

import patternImage from "../assets/flower-pattern.png";

import lightGallery from "lightgallery";
import "lightgallery/css/lightgallery.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import full1 from "../assets/photo/full/gallery-1.jpg";
import full2 from "../assets/photo/full/gallery-2.jpg";
import full3 from "../assets/photo/full/gallery-3.jpg";
import full4 from "../assets/photo/full/gallery-4.jpg";
import full5 from "../assets/photo/full/gallery-5.jpg";
import full6 from "../assets/photo/full/gallery-6.jpg";
import full7 from "../assets/photo/full/gallery-7.jpg";
import full8 from "../assets/photo/full/gallery-8.jpg";
import full9 from "../assets/photo/full/gallery-9.jpg";
import full10 from "../assets/photo/full/gallery-10.jpg";
import full11 from "../assets/photo/full/gallery-11.jpg";
import full12 from "../assets/photo/full/gallery-12.jpg";
import full13 from "../assets/photo/full/gallery-13.jpg";
import full14 from "../assets/photo/full/gallery-14.jpg";
import full15 from "../assets/photo/full/gallery-15.jpg";
import full16 from "../assets/photo/full/gallery-16.jpg";

import thumb1 from "../assets/photo/thumb/gallery-1.jpg";
import thumb2 from "../assets/photo/thumb/gallery-2.jpg";
import thumb3 from "../assets/photo/thumb/gallery-3.jpg";
import thumb4 from "../assets/photo/thumb/gallery-4.jpg";
import thumb5 from "../assets/photo/thumb/gallery-5.jpg";
import thumb6 from "../assets/photo/thumb/gallery-6.jpg";
import thumb7 from "../assets/photo/thumb/gallery-7.jpg";
import thumb8 from "../assets/photo/thumb/gallery-8.jpg";
import thumb9 from "../assets/photo/thumb/gallery-9.jpg";
import thumb10 from "../assets/photo/thumb/gallery-10.jpg";
import thumb11 from "../assets/photo/thumb/gallery-11.jpg";
import thumb12 from "../assets/photo/thumb/gallery-12.jpg";
import thumb13 from "../assets/photo/thumb/gallery-13.jpg";
import thumb14 from "../assets/photo/thumb/gallery-14.jpg";
import thumb15 from "../assets/photo/thumb/gallery-15.jpg";
import thumb16 from "../assets/photo/thumb/gallery-16.jpg";

const images = [
  { thumb: thumb1, full: full1 },
  { thumb: thumb2, full: full2 },
  { thumb: thumb3, full: full3 },
  { thumb: thumb4, full: full4 },
  { thumb: thumb5, full: full5 },
  { thumb: thumb6, full: full6 },
  { thumb: thumb7, full: full7 },
  { thumb: thumb8, full: full8 },
  { thumb: thumb9, full: full9 },
  { thumb: thumb10, full: full10 },
  { thumb: thumb11, full: full11 },
  { thumb: thumb12, full: full12 },
  { thumb: thumb13, full: full13 },
  { thumb: thumb14, full: full14 },
  { thumb: thumb15, full: full15 },
  { thumb: thumb16, full: full16 },
];

const Gallery = () => {
  useEffect(() => {
    const galleryElement = document.getElementById("lightgallery");

    const lg = lightGallery(galleryElement, {
      plugins: [lgThumbnail, lgZoom],
      selector: ".gallery-item",
      download: false,
      hideBarsDelay: 3000,
      getCaptionFromTitleOrAlt: false,
    });

    return () => {
      lg.destroy();
    };
  }, []);

  return (
    <section
      id="gallery"
      className="px-5 py-20 md:p-20 bg-primary"
      style={{
        "--pattern-image": `url(${patternImage})`,
      }}>
      <h2 className="font-['Caveat'] text-tertiary text-4xl lg:text-6xl text-center leading-none">Galeri</h2>
      <p className="font-libre-sans font-extralight text-tertiary text-center lg:text-lg md:max-w-[500px] mx-auto mt-5">
        "Mencintai seseorang memberikan kita kekuatan, dicintai memberikan kita keberanian."
      </p>

      {/* <div id="lightgallery" className="gap-2 mt-10 space-y-2 columns-2 md:columns-3 lg:columns-4">
        {images.map((src, index) => (
          <div key={index} className="break-inside-avoid">
            <motion.a
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              viewport={{ once: true }}
              href={src}
              className="inline-block gallery-item">
              <img className="max-w-full min-h-full rounded-lg" src={src} alt={`Image ${index + 1}`} />
            </motion.a>
          </div>
        ))}
      </div> */}
      <div id="lightgallery" className="grid grid-cols-2 gap-2 mt-10 md:grid-cols-4">
        {images.map((image, index) => (
          <motion.a
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 * index }}
            viewport={{ once: true }}
            href={image.full}
            className="inline-block w-full h-full overflow-hidden rounded-lg gallery-item">
            <img
              className="w-full h-full transition duration-500 hover:scale-110"
              src={image.thumb}
              alt={`Image ${index + 1}`}
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
