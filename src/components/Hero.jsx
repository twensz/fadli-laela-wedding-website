import CountdownTimer from "./Countdown";
import heroImage from "../assets/photo/cover-2-zoom.jpg";
import heroImageLarge from "../assets/photo/cover-2-zoom-large.jpg";

export default function Hero() {
  const targetDate = new Date("2024-06-22T00:00:00");

  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-between min-h-screen py-14"
      style={{
        "--hero-image": `url(${heroImage})`,
        "--hero-image-large": `url(${heroImageLarge})`,
      }}>
      <div className="ml-2 text-center md:mt-44 md:text-start">
        <span className="font-['CedarvilleCursive'] text-xs md:text-md text-tertiary ml-2">the wedding of</span>
        <h1 className="text-4xl text-white font-roustel md:text-6xl md:mt-2">
          Fadli <span className="-ml-4 -mr-6 text-primary">&</span> Laela
        </h1>
      </div>

      <CountdownTimer date={targetDate} />
    </section>
  );
}
