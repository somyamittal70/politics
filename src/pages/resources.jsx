import React from "react";
import { useState } from 'react'
import ResourcesHero from "../components/resources/Hero";
import SpeechesSection from "../components/resources/Speech";
import PressRelease from "../components/resources/Press";
import DocumentsSection from "../components/resources/Document";
import MediaKit from "../components/resources/Media";
import NewsletterSection from "../components/resources/News";

function About() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ResourcesHero />
    <SpeechesSection />
    <PressRelease />
    <DocumentsSection />
    <MediaKit />
    <NewsletterSection />
    </>
  )
}

export default About;

