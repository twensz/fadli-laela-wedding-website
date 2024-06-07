import { useLocation } from "react-router-dom";

import coverImageSmall from "../assets/photo/cover-1-small.jpg";
import coverImageMedium from "../assets/photo/cover-1-medium.jpg";
import coverImageLarge from "../assets/photo/cover-1-large-2.jpg";

import { RxEnvelopeClosed, RxEnvelopeOpen } from "react-icons/rx";

export default function Cover({ isInvitationOpen, openInvitation, fadeOut }) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const guest = query.get("to");

  return (
    <section
      className={`cover absolute flex flex-col justify-center items-center pt-44 ${
        fadeOut ? "opacity-0" : "opacity-100"
      } duration-[1.5s] ${isInvitationOpen ? "hidden" : ""}`}
      style={{
        "--cover-image-small": `url(${coverImageSmall})`,
        "--cover-image-medium": `url(${coverImageMedium})`,
        "--cover-image-large": `url(${coverImageLarge})`,
      }}>
      <div>
        <span className="font-['CedarvilleCursive'] text-sm md:text-xl text-tertiary drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] ml-2">
          the wedding of
        </span>
        <h1 className="font-roustel text-5xl md:text-6xl text-tertiary drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          Fadli <span className="-ml-4 -mr-6 text-primary">&</span> Laela
        </h1>
      </div>

      {/* <h2 className="font-laila text-3xl md:text-5xl text-primary drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] mt-2">
        22.06.24
      </h2> */}

      <div className="mt-4 text-center">
        <p className="text-sm font-light font-laila text-tertiary">Dear:</p>
        <h3 className="text-xl font-laila text-tertiary">{guest || "Tamu Undangan"}</h3>
      </div>

      <button
        className="flex items-center gap-3 px-4 py-2 mt-5 border border-white rounded-lg group text-tertiary"
        onClick={openInvitation}>
        <span className="relative">
          <RxEnvelopeClosed className="text-lg transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
          <RxEnvelopeOpen className="absolute top-0 left-0 text-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
        </span>
        <span className="font-laila text-sm drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">Buka Undangan</span>
      </button>
    </section>
  );
}
