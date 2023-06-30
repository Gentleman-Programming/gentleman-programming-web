// 'use client';
// import React, { FC, useState } from 'react';

// import { IItem } from '@app/youtube/interfaces/youtube';
// // import styles from '@app/youtube/styles/videoCard.module.css';

// import { dateFormatter, formattedDate } from './YTPlaylistVideoCard';
// import { f } from '../ChannelDetails/ChannelDetails';
// import { IPlaylistItem, ISnippet } from '@app/youtube/interfaces/playlistVideoCard';

// type Props = {
//   video: IPlaylistItem;
// };

// export const YTVideoCard: FC<Props> = ({ video }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleHover = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };
//   if (video.id?.kind !== 'youtube#video') {
//     return null;
//   } else {
//     // const sincePublished = video.snippet.publishedAt - formattedDate;
//     // console.log(formattedDate);
//     return (
//       <article
//         key={video.id?.videoId}
//         onMouseEnter={handleHover}
//         onMouseLeave={handleMouseLeave}
//         className={styles.youtubeVideoCard}
//       >
//         {isHovered ? (
//           <VideoCard video={video} />
//         ) : (
//           <>
//             <img
//               src={video.snippet.thumbnails.high.url}
//               alt={'Video Thumbnail' + video.id?.videoId}
//               className={styles.youtubeVideoCardImage}
//             />

//             <section className={styles.youtubeVideoCardTexts}>
//               <a className={styles.youtubeVideoCardTitle}>
//                 {video.snippet.title}
//               </a>
//               <p>
//                 {/* {f.format(video.statistics.viewCount)} •{' '} */}
//                 22K views •{' '}
//                 {/* {dateFormatter.format(
//                   Math.round(sincePublished / 1000),
//                   'seconds'
//                 )} */}
//                 Hace 2 días
//               </p>
//             </section>
//           </>
//         )}
//       </article>
//     );
//   }
// };
// export const VideoCard: FC<Props> = ({ video }) => {
//   const YTVideoURL = 'https://www.youtube.com/watch?v=';
//   if (!video) {
//     return null;
//   }
//   return (
//     <object
//       key={video.id?.videoId}
//       data={`${YTVideoURL}${video.id?.videoId}?mute=1;autoplay=1`}
//     />
//   );
// };
