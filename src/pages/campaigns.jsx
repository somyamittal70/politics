import React from "react";
import { useState } from 'react'
import RalliesEvents from "../components/activities/PastPrograms";
import SocialWelfare from "../components/activities/Upcomingprograms";
import CommunityOutreach from "../components/activities/Impactreach";
import ActivitiesHero from "../components/activities/HeroSection";
import CampaignsHero from "../components/campaigns/Hero";
import CampaignsList from "../components/campaigns/List";
import CampaignHighlights from "../components/campaigns/Highlights";
import CampaignTimeline from "../components/campaigns/Timeline";

function About() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CampaignsHero />
    <CampaignsList />
    <CampaignHighlights />
    <CampaignTimeline />
    </>
  )
}

export default About;

