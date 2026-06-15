import React from "react";
import { useState } from 'react'

import ActivitiesHero from "../components/activities/HeroSection";
import FeaturedInitiatives from "../components/activities/Featuredinitiatives";
import UpcomingPrograms from "../components/activities/Upcomingprograms";
import PastProgramsAdmin from "../components/activities/PastPrograms";
import ImpactReach from "../components/activities/Impactreach";
import VolunteerCTA from "../components/activities/Volunteercta";

function Activities() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ActivitiesHero />
    <FeaturedInitiatives />
    <UpcomingPrograms />
    <PastProgramsAdmin />
    <ImpactReach />
    <VolunteerCTA />
    </>
  )
}

export default Activities;