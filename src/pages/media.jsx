import Hero from '../components/media/Hero';
import FeaturedVideo from '../components/media/FeaturedVideo';
import PhotoGallery from '../components/media/PhotoGallery';
import VideoGallery from '../components/media/VideoGallery';
import PressConference from '../components/media/PressConference';
import Interviews from '../components/media/Interviews'
import MediaDownloads from '../components/media/MediaDownloads'
import MediaCTA from '../components/media/MediaCTA'

export default function MediaPage() {
  return (
    <>
      <Hero />
      <FeaturedVideo />
      <PhotoGallery />
      <VideoGallery />
      <PressConference />
      {/* <Interviews /> */}
      <MediaDownloads />
      <MediaCTA />
    </>
  );
}