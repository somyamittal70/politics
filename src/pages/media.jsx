import Hero from '../components/media/Hero';
import FeaturedVideo from '../components/media/FeaturedVideo';
import PhotoGallery from '../components/media/PhotoGallery';
import VideoGallery from '../components/media/VideoGallery';
import PressConference from '../components/media/PressConference';
import Interviews from '../components/media/Interviews'
import AnnouncementsSection from '../components/media/Announcementssection';
import VideosSection from '../components/media/Videosection';
import PostersSection from '../components/media/Posterssection';
import PressNotesSection from '../components/media/Pressnotssection';
import DownloadsSection from '../components/media/Downloadssection';
import ArchiveSection from '../components/media/Archivesection';

export default function MediaPage() {
  return (
    <>
      <Hero />
      <FeaturedVideo />
      <PhotoGallery />
      <VideoGallery />
      <PressConference />
      {/* <Interviews /> */}
      <DownloadsSection />
      <ArchiveSection />
    </>
  );
}