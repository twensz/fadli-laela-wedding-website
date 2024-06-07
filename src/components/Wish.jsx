import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import { addData, getAllData } from "../data/data-source";

import { ImLocation } from "react-icons/im";
import { VscLoading } from "react-icons/vsc";
import patternImage from "../assets/flower-pattern.png";

function Wish() {
  const [wishes, setWishes] = useState([]);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await getAllData("wish");
      setWishes(result);
    })();
  }, []);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    if (!isSending) {
      setIsSending(true);
      if (await addData("wish", data)) {
        toast.success("Berhasil mengirim ucapan");
        setWishes((prevWishes) => [{ id: new Date().getTime(), data }, ...prevWishes]);
        reset();
      }

      setIsSending(false);
    }
  };

  return (
    <section
      id="wish"
      className="bg-primary"
      style={{
        "--pattern-image": `url(${patternImage})`,
      }}>
      <div className="sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] mx-auto py-10 px-10 md:py-20">
        <h2 className="font-['Caveat'] text-tertiary text-4xl lg:text-6xl text-center leading-none">Ucapan dan Doa</h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:grid md:grid-cols-[1fr_1fr] md:gap-5 gap-10">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-10 text-end">
            <div className="mb-2">
              <input
                {...register("name")}
                className="w-full px-5 py-3 text-sm leading-tight border rounded appearance-none bg-pink-50 border-opacity-20 border-primary placeholder:text-primary placeholder:opacity-60 text-primary focus:outline-primary"
                id="name"
                type="text"
                placeholder="Nama Lengkap"
                required
              />
            </div>

            <div className="mb-2">
              <input
                {...register("address")}
                className="w-full px-5 py-3 text-sm leading-tight border rounded appearance-none bg-pink-50 border-opacity-20 border-primary placeholder:text-primary placeholder:opacity-60 text-primary focus:outline-primary"
                id="address"
                type="text"
                placeholder="Alamat"
                required
              />
            </div>

            <div className="mb-2 ">
              <textarea
                {...register("wish")}
                className="w-full px-5 py-3 text-sm leading-tight border rounded appearance-none bg-pink-50 border-opacity-20 border-primary placeholder:text-primary placeholder:opacity-60 text-primary focus:outline-primary"
                id="wish"
                placeholder="Ucapan"
                required
              />
            </div>

            <button
              className="flex items-center justify-center w-full gap-3 px-6 py-3 ml-auto font-semibold text-center uppercase transition border-2 rounded bg-tertiary border-primary hover:bg-secondary hover:text-tertiary text-primary md:w-fit focus:outline-none focus:shadow-outline"
              type="submit">
              {isSending ? "Mengirim" : "Kirim"}
              {isSending && <VscLoading className="animate-spin-medium" />}
            </button>
          </form>

          <div className="mt-10 max-h-[400px] overflow-scroll no-scrollbar p-2">
            {wishes.map((wish) => (
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="p-5 mb-3 shadow shadow-secondary bg-tertiary text-primary font-laila rounded-xl"
                key={wish.id}>
                <h3 className="text-sm font-semibold">{wish.data.name.toUpperCase()}</h3>
                <h4 className="flex items-center gap-1 mb-2 text-sm font-light capitalize">
                  <ImLocation className="text-[10px]" />
                  {wish.data.address}
                </h4>
                <p className="text-sm font-light">"{wish.data.wish}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Wish;
