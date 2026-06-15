import Hero from '../components/media/Hero';
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
      <AnnouncementsSection />
      <VideosSection />
      <PostersSection />
      <PressNotesSection />
      {/* <Interviews /> */}
      <DownloadsSection />
      <ArchiveSection />
    </>
  );
}