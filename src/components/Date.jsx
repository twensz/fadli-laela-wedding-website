import { motion } from "framer-motion";
import { ImLocation } from "react-icons/im";
import { IoTimeSharp } from "react-icons/io5";
import bgImageSmall from "../assets/photo/cover-3-small.jpg";
import bgImageLarge from "../assets/photo/cover-3-large.jpg";
import RSVP from "./RSVP";

export default function Date() {
  return (
    <section
      id="date"
      className="min-h-screen px-5 py-16 text-center text-white md:p-16 lg:p-28"
      style={{
        "--bg-image": `url(${bgImageSmall})`,
        "--bg-image-large": `url(${bgImageLarge})`,
      }}>
      <h2 className="font-['Caveat'] text-primary text-4xl lg:text-6xl text-center leading-none">Waktu Acara</h2>
      <p className="font-libre-sans font-extralight text-dark text-center text-sm lg:text-lg md:max-w-[700px] mx-auto mt-2">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/I berkenan hadir untuk memberikan
        doa restu kepada kedua mempelai
      </p>

      <h2 className="mt-5 text-2xl leading-none text-center font-laila text-primary lg:text-4xl">
        Sabtu, 22 Juni 2024
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-[1fr_2fr] gap-px rounded-xl overflow-hidden text-tertiary mt-5 md:max-w-[500px] mx-auto">
        <div className="flex items-center justify-center bg-secondary">
          <h3 className="font-['Caveat'] text-3xl md:text-4xl">Akad</h3>
        </div>
        <div className="px-5 py-6 bg-secondary">
          <div className="flex items-center gap-2 text-lg">
            <IoTimeSharp />
            10:00 - 11:00
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-[1fr_2fr] gap-px rounded-xl overflow-hidden text-tertiary mt-2 md:max-w-[500px] mx-auto">
        <div className="flex items-center justify-center bg-secondary">
          <h3 className="font-['Caveat'] text-3xl md:text-4xl">Resepsi</h3>
        </div>
        <div className="px-5 py-6 bg-secondary">
          <div className="flex items-center gap-2 text-lg">
            <IoTimeSharp />
            11:00 - Selesai
          </div>
        </div>
      </motion.div>

      <div className="mt-6">
        <p className="font-light text-dark">Jl. Wijaya Kusuma No.25 Rt. 06/10, Karangdawa.</p>
        <p className="font-light text-dark">Margasari, Tegal, Jawa Tengah. 52463</p>

        <motion.a
          whileHover={{ scale: 1.03 }}
          href="https://www.google.com/maps?ll=-7.067381,109.039679&z=20&t=m&hl=id&gl=ID&mapclient=embed&cid=3639253097763068464"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 mx-auto mt-4 rounded-md w-fit bg-primary text-tertiary hover:cursor-pointer">
          <ImLocation className="text-sm" />
          Lihat Peta
        </motion.a>

        <motion.iframe
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full h-[350px] mt-6 md:max-w-[500px] mx-auto"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.46891883362755!2d109.0398361!3d-7.0675626!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f970035f27bf5%3A0x328139692be85a30!2zRWxsYeKAmXMgaG9tZQ!5e0!3m2!1sid!2sid!4v1716691996258!5m2!1sid!2sid"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></motion.iframe>
      </div>

      <RSVP />
    </section>
  );
}
