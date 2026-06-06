import React from "react";
import { useState } from 'react'
import HeroSection from "../components/home/Hero";
import AboutSection from "../components/home/About ";
import PressSection from "../components/home/Press";
import EventsSection from "../components/home/Events";
import MyJourney from "../components/home/MyJourney";
import GallerySection from "../components/home/Gallery";
import ContactSection from "../components/home/Contact";

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeroSection />
    <AboutSection />
    <PressSection />
    <EventsSection />
    <MyJourney />
    <GallerySection />
    <ContactSection />
    </>
  )
}

export default Home;