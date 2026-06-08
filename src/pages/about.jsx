import React from "react";
import { useState } from 'react'
import AboutHero from "../components/about/Hero";
import PersonalInfo from "../components/about/Info";
import AchievementsSection from "../components/about/Achievements";
import PoliticalCareer from "../components/about/Career";

function About() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AboutHero />
    <PersonalInfo />
    <AchievementsSection />
    <PoliticalCareer />
    </>
  )
}

export default About;