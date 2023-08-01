import { YTPlaylistVideoCard } from '@app/youtube/components/VideoCard/YTPlaylistVideoCard';
import style from '@app/youtube/styles/channelLists.module.css';
export const SinglePlaylist = ({ section }: { section: any }) => {
  const YTUrl = 'https://www.youtube.com/watch?v=';
  const bestFromChan = section.list.items.slice(0, 12);
  const playlists = section.list.items;
  return (
    <>
      <section
        key={section.index}
        className={style.youtubeChannelListContainer}
      >
        {section.index === 1
          ? bestFromChan.map((video: any) => (
              <>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`${YTUrl}${video.snippet.resourceId.videoId}`}
                >
                  <YTPlaylistVideoCard key={video.etag} video={video} />
                </a>
              </>
            ))
          : playlists.map((video: any) => (
              <>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`${YTUrl}${video.snippet.resourceId.videoId}`}
                >
                  <YTPlaylistVideoCard key={video.etag} video={video} />
                </a>
              </>
            ))}
      </section>
    </>
  );
};
