import "./App.css";
import { useState } from "react";

import Audio from "./components/Audio";
import Date from "./components/Date";
import Gift from "./components/Gift";
import Wish from "./components/Wish";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Couple from "./components/Couple";
import Quotes from "./components/Quotes";
import Closing from "./components/Closing";
import Cover from "./components/Cover";

function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const openInvitation = () => {
    setFadeOut(true);
    setTimeout(() => {
      setIsInvitationOpen(true);
    }, 1500);
  };

  return (
    <div className="relative">
      <Cover isInvitationOpen={isInvitationOpen} openInvitation={openInvitation} fadeOut={fadeOut} />

      <div className={`${fadeOut ? "block opacity-100" : "hidden opacity-0"}`}>
        <Hero />
        <Quotes />
        <Couple />
        <Gallery />
        <Date />
        <Gift />
        <Wish />
        <Closing />
        <Audio isInvitationOpen={isInvitationOpen} />
      </div>
    </div>
  );
}

export default App;
