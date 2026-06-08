import React from "react";
import { useState } from 'react'
import RalliesEvents from "../components/activities/Rallies";
import ParliamentaryWork from "../components/activities/Parliamentary";
import SocialWelfare from "../components/activities/Socialwelfare";
import CommunityOutreach from "../components/activities/Community";
import ActivitiesHero from "../components/activities/HeroSection";

function About() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ActivitiesHero />
    <RalliesEvents />
    <ParliamentaryWork />
    <SocialWelfare />
    <CommunityOutreach />
    </>
  )
}

export default About;