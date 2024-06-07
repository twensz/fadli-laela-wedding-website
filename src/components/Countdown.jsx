import React from "react";
import Countdown from "react-countdown";

const Completionist = () => <span>Sedang Berlangsung</span>;

const CountdownTimer = ({ date }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div>
          <div className="text-white flex gap-3 md:gap-10">
            <div className="flex flex-col text-center">
              <span className="font-laila font-thin text-sm md:text-base mb-1">Hari</span>
              <span className="font-laila text-4xl md:text-6xl min-w-16 md:min-w-20">{days}</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="font-laila font-thin text-sm md:text-base mb-1">Jam</span>
              <span className="font-laila text-4xl md:text-6xl min-w-16 md:min-w-20">{hours}</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="font-laila font-thin text-sm md:text-base mb-1">Menit</span>
              <span className="font-laila text-4xl md:text-6xl min-w-16 md:min-w-20">{minutes}</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="font-laila font-thin text-sm md:text-base mb-1">Detik</span>
              <span className="font-laila text-4xl md:text-6xl min-w-16 md:min-w-20">{seconds}</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return <Countdown date={date} renderer={renderer} />;
};

export default CountdownTimer;
