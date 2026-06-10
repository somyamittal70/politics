import Hero from "../components/publications/Hero";
import Speech from "../components/publications/Speech";
import Press from "../components/publications/Press";
import Document from "../components/publications/Document";
import Media from "../components/publications/Media";
import News from "../components/publications/News";

function Publications() {
  return (
    <>
      <Hero />
      <Media />
      <News />
      <Press />
      <Speech />
      <Document />
    </>
  );
}

export default Publications;
