import { motion } from "framer-motion";
import { PiQuotesFill } from "react-icons/pi";
import patternImage from "../assets/flower-pattern.png";

export default function Quotes() {
  return (
    <section
      id="quotes"
      className="flex items-center bg-tertiary py-16 px-5 md:p-28"
      style={{
        "--pattern-image": `url(${patternImage})`,
      }}>
      <div className="relative bg-primary text-white rounded-xl py-10 px-7 md:p-16 sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] mx-auto">
        <span className="absolute left-7 md:left-10 -top-11 md:-top-16 rotate-180">
          <PiQuotesFill className="text-8xl md:text-9xl text-secondary opacity-75" />
        </span>

        {/* <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl text-end leading-10 md:leading-[55px]">
          تَزَوَّجَ العَبْدُ فَقَدْ كَمَّلَ نَصْفَ الدِّيْنِ ، فَلْيَتَّقِ اللهَ فِي النِّصْفِ البَاقِي
        </motion.p> */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="font-laila font-thin leading-7 md:leading-8 text-base md:text-xl text-start md:text-justify mt-5">
          “Jika seseorang menikah, maka ia telah menyempurnakan separuh agamanya. Karenanya, bertakwalah pada Allah pada
          separuh yang lainnya”
        </motion.p>

        <div className="relative overflow-hidden ml-auto w-fit mt-10">
          <p className="quotes-name font-laila font-light text-lg mb-[5px]">HR. Al Baihaqi</p>
          <motion.div
            initial={{ left: "-100%" }}
            whileInView={{ left: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="absolute bottom-0 w-full h-[2px] rounded-sm bg-tertiary"></motion.div>
        </div>
      </div>
    </section>
  );
}
