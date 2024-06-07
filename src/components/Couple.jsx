import React from "react";
import { motion } from "framer-motion";
import { ImLocation } from "react-icons/im";
import patternImage from "../assets/flower-pattern.png";

import groomImage from "../assets/photo/groom.jpg";
import brideImage from "../assets/photo/bride.jpg";

function Couple() {
  return (
    <section
      id="couple"
      className="min-h-screen bg-tertiary"
      style={{
        "--pattern-image": `url(${patternImage})`,
      }}>
      <div className="py-36 w-full px-6 sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] mx-auto">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="sm:hidden font-['Caveat'] text-primary text-4xl lg:text-5xl leading-none">
            Assalamu'alaikum Wr. Wb.
          </h2>
          <h2 className="hidden sm:block font-['Caveat'] text-nowrap text-primary text-4xl lg:text-5xl leading-none">
            Assalamu'alaikum Warahmatullahi Wabarakatuh
          </h2>
          <p className="mt-2 text-sm font-light font-libre-sans text-dark lg:text-lg">
            Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/I untuk menghadiri acara
            pernikahan kami:
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center mt-14 md:mt-20">
          <div className="mx-auto overflow-hidden max-w-80 sm:mx-0 max-h-96 sm:w-full sm:min-w-72 sm:max-w-80">
            <img className="rounded-tr-[60px] rounded-tl-[60px] w-full" src={groomImage} alt="The groom" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-[1fr_auto] items-center mt-8 sm:mt-2">
            <div className="sm:ml-10">
              <h3 className="mb-4 text-5xl text-center font-roustel text-primary sm:text-start text-wrap sm:text-nowrap md:text-6xl">
                Fadli Firdaus
              </h3>
              <div className="text-sm font-thin leading-6 text-center font-laila text-dark sm:text-start md:text-md">
                <span>PUTRA DARI :</span> <br />
                <p className="mt-1 font-normal leading-5">
                  Bapak Mustafid <span className="font-thin">&</span> Ibu Supriyati
                </p>
              </div>
              <div className="flex flex-row items-center justify-center gap-2 mt-1 sm:justify-start text-primary">
                <ImLocation className="text-lg" />
                <span className="text-lg font-light font-laila">Jakarta</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="font-['Caveat'] text-primary my-20 text-4xl lg:text-5xl text-center">--- dengan ---</div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center mt-14 md:mt-20">
          <div className="order-1 mx-auto overflow-hidden sm:order-2 max-w-80 sm:mx-0 max-h-96 sm:w-full sm:min-w-72 sm:max-w-80">
            <img className="rounded-tr-[60px] rounded-tl-[60px] w-full" src={brideImage} alt="The groom" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-2 sm:order-1 grid md:grid-cols-[auto_1fr] items-center mt-8 sm:mt-2">
            <div className="sm:mr-10">
              <h3 className="mb-4 text-5xl text-center font-roustel text-primary sm:text-end text-wrap sm:text-nowrap md:text-6xl">
                Laela Rahmawati
              </h3>
              <div className="text-sm font-thin leading-6 text-center font-laila text-dark sm:text-end md:text-md">
                <span>PUTRI DARI :</span> <br />
                <p className="mt-1 font-normal leading-5">
                  Bapak Tasripin <span className="font-thin">&</span> Ibu Kasturah
                </p>
              </div>
              <div className="flex flex-row items-center justify-center gap-2 mt-1 sm:justify-end text-primary">
                <ImLocation className="text-lg" />
                <span className="text-lg font-light font-laila">Jakarta</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Couple;
