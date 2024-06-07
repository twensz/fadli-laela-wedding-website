import React from "react";
import closingImage from "../assets/photo/closing.jpg";
import closingImageLarge from "../assets/photo/closing-large.jpg";

function Gift() {
  return (
    <section
      id="closing"
      className="px-10 py-10"
      style={{
        "--closing-image": `url(${closingImage})`,
        "--closing-image-large": `url(${closingImageLarge})`,
      }}>
      <div className="mt-64 ml-auto w-fit">
        <p className="font-libre-sans font-extralight text-sm md:text-lg text-tertiary max-w-[400px] text-center leading-5">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila, Bapak / Ibu / Saudara / i. berkenan hadir untuk
          memberikan do'a restunya kami ucapkan terimakasih.
        </p>

        <div className="font-libre-sans text-sm md:text-xl text-tertiary max-w-[400px] text-center mt-6">
          <h1 className="font-roustel text-4xl md:text-6xl text-tertiary drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            Fadli <span className="-ml-3 -mr-4 text-primary">&</span> Laela
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Gift;
