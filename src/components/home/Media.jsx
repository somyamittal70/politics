import { useState } from "react";
import { Play, X, Camera } from "lucide-react";

const featuredVideo = {
  thumbnail: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  title: "जनसभा संबोधन - Latest Public Rally",
};

const photos = [
  "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?w=1000",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1000",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1000",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000",
];

export default function MediaHighlights() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <section className="bg-[#FDFAF5] py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full border border-[#E8541A]/40 text-[#E8541A] text-sm tracking-widest uppercase">
            Media Center
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#080F22] mt-5">
            Media Highlights
          </h2>

          <div className="w-24 h-1 bg-[#E8541A] mx-auto mt-4 rounded-full" />

          <p className="text-gray-800 max-w-2xl mx-auto mt-6">
            Moments, milestones and initiatives captured through photographs,
            videos and media coverage.
          </p>
        </div>

        {/* Featured Video */}
        <div
          onClick={() => setOpenVideo(true)}
          className="group relative overflow-hidden rounded-3xl cursor-pointer mb-12"
        >
          <img
            src={featuredVideo.thumbnail}
            alt=""
            className="w-full h-[280px] md:h-[450px] object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#080F22] via-[#080F22]/30 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#E8541A] flex items-center justify-center shadow-2xl group-hover:scale-110 transition">
              <Play className="text-white fill-white" size={32} />
            </div>
          </div>

          <div className="absolute left-6 bottom-6">
            <p className="text-[#E8541A] uppercase tracking-wider text-sm">
              Featured Video
            </p>

            <h3 className="text-white text-xl md:text-3xl font-bold mt-2">
              {featuredVideo.title}
            </h3>
          </div>
        </div>

        {/* Photos */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {photos.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={image}
                alt=""
                className="w-full h-52 md:h-72 object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-[#080F22]/10 group-hover:bg-[#080F22]/50 transition" />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <Camera
                  className="text-white bg-[#E8541A] rounded-full p-3"
                  size={60}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button
            href="/media"
            className="bg-[#E8541A] hover:bg-white hover:text-[#080F22] text-white px-8 py-4 rounded-full font-semibold transition duration-300"
          >
            View Complete Media Center
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white"
          >
            <X size={35} />
          </button>

          <img
            src={selectedImage}
            alt=""
            className="max-h-[90vh] max-w-[95vw] rounded-xl"
          />
        </div>
      )}

      {/* Video Modal */}
      {openVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setOpenVideo(false)}
            className="absolute top-5 right-5 text-white"
          >
            <X size={35} />
          </button>

          <div className="w-full max-w-5xl aspect-video">
            <iframe
              src={featuredVideo.videoUrl}
              className="w-full h-full rounded-2xl"
              allowFullScreen
              title="video"
            />
          </div>
        </div>
      )}
    </section>
  );
}
