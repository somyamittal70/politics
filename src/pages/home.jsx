
import HeroSection from "../components/home/Hero";
import AboutSection from "../components/home/About ";
import Activities from "../components/home/Activities";
import ContactSection from "../components/home/Contact";
import Vision from "../components/home/Vision"
import Publication from "../components/home/Publication";
import Campaigns from "../components/home/Campaigns";
import Imapct from "../components/home/Imapct";
import News from "../components/home/News";
import Media from "../components/home/Media"

function Home() {
 

  return (
    <>
    <HeroSection />
    <AboutSection />
    <Vision/>
    <Activities/>
    <Publication/>
    <Campaigns/>
    <Media/>
    <Imapct/>
    <News/> 
    <ContactSection />
    </>
  )
}

export default Home;