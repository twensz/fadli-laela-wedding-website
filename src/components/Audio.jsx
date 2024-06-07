import React from "react";
import { IoPause } from "react-icons/io5";
import { FaCompactDisc } from "react-icons/fa6";
import song from "../assets/audio/lifetime.mp3";
import { useState, useRef, useEffect } from "react";

function Audio({ isInvitationOpen }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current.volume = 0.4;
    if (isInvitationOpen) {
      playAudio();
    } else {
      pauseAudio();
    }
  }, [isInvitationOpen]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleAudio = () => {
    isPlaying ? pauseAudio() : playAudio();
  };

  return (
    <div>
      <audio ref={audioRef} autoPlay loop>
        <source src={song} type="audio/mp3" />
      </audio>

      <div
        className="fixed flex items-center justify-center w-12 h-12 transition-all rounded-full cursor-pointer bottom-8 right-8 bg-primary opacity-30 hover:opacity-50 animate-spin-slow"
        onClick={toggleAudio}>
        {isPlaying ? (
          <FaCompactDisc className="text-3xl text-tertiary" />
        ) : (
          <IoPause className="text-2xl text-tertiary" />
        )}
      </div>
    </div>
  );
}

export default Audio;
