import Hero from "../components/news/Hero";
import BreakingNews from "../components/news/BreakingNews";
import FeaturedNews from "../components/news/FeaturedNews";
import LatestNews from "../components/news/LatestNews"
import PressRelease from "../components/news/PressRelease"
import UpcomingEvents from "../components/news/UpcomingEvents"
import Newsletter from "../components/news/Newsletter"
import ContactCTA from "../components/news/ContactCTA"

function News() {
  return (
    <>
      <Hero />
      <BreakingNews />
      <FeaturedNews />
      <LatestNews />
      <PressRelease />
      <UpcomingEvents />
      <Newsletter />
      <ContactCTA />
    </>
  );
}

export default News;
