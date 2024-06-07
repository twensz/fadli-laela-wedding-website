import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { addData } from "../data/data-source";
import { toast } from "react-toastify";
import { VscLoading } from "react-icons/vsc";

function RSVP() {
  const { register, handleSubmit, watch, reset } = useForm();
  const [isSending, setIsSending] = useState(false);
  const selectedIsAttend = watch("isAttend");

  const onSubmit = async (data) => {
    if (!isSending) {
      setIsSending(true);
      if (await addData("rsvp", data)) {
        toast.success("Berhasil mengirim data");
        reset();
      }

      setIsSending(false);
    }
  };

  return (
    <section id="rsvp">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-14 px-10 sm:max-w-[500px] rounded-md mx-auto mt-14 bg-tertiary">
        <h2 className="font-['Caveat'] text-primary text-3xl lg:text-5xl text-center leading-none">
          Konfirmasi Kehadiran
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 sm:max-w-[400px] mx-auto">
          <div className="mb-4">
            <input
              {...register("name")}
              className="w-full px-5 py-3 text-sm leading-tight border rounded appearance-none bg-pink-50 border-opacity-20 border-primary placeholder:text-primary placeholder:opacity-60 text-primary focus:outline-primary"
              id="name"
              type="text"
              placeholder="Nama Lengkap"
              required
            />
          </div>

          <div className="mb-4">
            <label className="flex items-center gap-2 mb-3 text-dark">
              <input type="radio" name="isAttend" value="yes" {...register("isAttend")} required />
              Ya, saya akan hadir
            </label>

            <label className="flex items-center gap-2 text-dark">
              <input type="radio" name="isAttend" value="no" {...register("isAttend")} required />
              Maaf, saya tidak bisa hadir
            </label>
          </div>

          <div className={`flex flex-col gap-1 mb-5 ${selectedIsAttend === "yes" ? "block" : "hidden"}`}>
            <label htmlFor="" className="text-sm text-primary text-start">
              Jumlah Tamu :
            </label>
            <input
              type="number"
              {...register("totalGuest")}
              className="px-5 py-3 text-sm leading-tight border rounded appearance-none w-fit bg-pink-50 border-opacity-20 border-primary placeholder:text-primary placeholder:opacity-60 text-primary focus:outline-primary"
              min={1}
              max={3}
              required={selectedIsAttend === "yes" ? true : false}
            />
          </div>

          <button
            className="flex items-center justify-center w-full gap-3 px-6 py-3 ml-auto font-semibold text-center uppercase transition border-2 rounded bg-tertiary border-primary hover:bg-secondary hover:text-tertiary text-primary md:w-fit focus:outline-none focus:shadow-outline"
            type="submit">
            {isSending ? "Mengirim" : "Kirim"}
            {isSending && <VscLoading className="animate-spin-medium" />}
          </button>
        </form>
      </motion.div>

      <div className={`flex flex-col gap-1 mb-5 opacity-0 ${selectedIsAttend === "yes" ? "hidden" : "block"}`}>
        <label htmlFor="" className="text-sm text-primary text-start">
          Jumlah Tamu :
        </label>
        <input className="px-5 py-3 text-sm leading-tight border rounded appearance-none w-fit bg-pink-50 border-opacity-20 border-primary placeholder:text-primary placeholder:opacity-60 text-primary focus:outline-primary" />
      </div>
    </section>
  );
}

export default RSVP;
