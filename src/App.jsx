import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import shareButton from "./components/layouts/shareButton"

import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Activities from "./pages/activities";
import Campaigns from "./pages/campaigns";
import News from "./pages/news";
import Media from "./pages/media";
import Contact from "./pages/contact";
import Resources from "./pages/resources";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/news" element={<News />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <shareButton/>
      <Footer />
    </>
  );
}

export default App;
