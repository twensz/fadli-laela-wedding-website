import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegCopy } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logoBCA from "../assets/logo-bca.png";
import { useState } from "react";

function Gift() {
  const [showGift, setShowGift] = useState(false);
  const toggleGift = () => {
    setShowGift(!showGift);
  };

  const rekeningBCA = "4010430025";
  const rekeningBCA2 = "4010415158";

  const copyToClipboard = async (textToCopy) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast.success("Copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy text.");
    }
  };

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-10 mx-auto py-14 md:py-20">
        <h2 className="font-['Caveat'] text-primary text-4xl lg:text-6xl text-center leading-none">Kirim Hadiah</h2>
        <p className="font-libre-sans font-extralight text-dark text-center text-sm lg:text-lg md:max-w-[600px] mx-auto mt-3">
          Doa restu anda merupakan karunia yang sangat berarti bagi kami dan jika memberi adalah ungkapan tanda
          terimakasih anda.
        </p>

        <button
          className={`flex items-center justify-center w-full gap-3 px-6 py-3 mx-auto mt-5 ml-auto font-semibold text-center uppercase transition border-2 rounded border-primary hover:bg-secondary hover:text-tertiary text-primary md:w-fit focus:outline-none focus:shadow-outline ${
            showGift ? "bg-primary text-tertiary" : "bg-tertiary"
          }`}
          type="button"
          onClick={toggleGift}>
          {showGift ? "Tutup" : "Kirim Amplop atau Kado"}
        </button>

        <AnimatePresence>
          {showGift && (
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "-100%", opacity: 0.25 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0.25 }}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col gap-1 mx-auto mt-5 text-primary rounded-xl md:w-fit">
                <p className="p-7 bg-tertiary">Kamu bisa transfer ke rekening di bawah ini:</p>
                <div className="flex items-center gap-7 p-7 bg-tertiary">
                  <div className="flex items-center max-w-24">
                    <img className="w-full" src={logoBCA} alt="" />
                  </div>
                  <div>
                    <p className="font-light">Bank BCA</p>
                    <div className="flex items-center gap-2 text-lg font-medium">
                      <span>{rekeningBCA}</span>
                      <button onClick={() => copyToClipboard(rekeningBCA)}>
                        <FaRegCopy />
                      </button>
                    </div>
                    <p className="font-light">a/n Fadli Firdaus</p>
                  </div>
                </div>
                <div className="flex items-center gap-7 p-7 bg-tertiary">
                  <div className="flex items-center max-w-24">
                    <img className="w-full" src={logoBCA} alt="" />
                  </div>
                  <div>
                    <p className="font-light">Bank BCA</p>
                    <div className="flex items-center gap-2 text-lg font-medium">
                      <span>{rekeningBCA2}</span>
                      <button onClick={() => copyToClipboard(rekeningBCA2)}>
                        <FaRegCopy />
                      </button>
                    </div>
                    <p className="font-light">a/n Laela Rahmawati</p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover={false}
          theme="light"
          transition:Bounce
        />
      </motion.div>
    </section>
  );
}

export default Gift;
