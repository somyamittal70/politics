import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import ShareButton from "./components/layouts/ShareButton";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Activities from "./pages/activities";
import Campaigns from "./pages/campaigns";
import News from "./pages/news";
import Media from "./pages/media";
import Contact from "./pages/contact";
import Publications from "./pages/publications";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/news" element={<News />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <ShareButton />
      <Footer />
    </>
  );
}

export default App;
