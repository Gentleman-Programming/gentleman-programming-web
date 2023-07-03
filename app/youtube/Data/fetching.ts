//Work in progress

//const CHANNEL_ID = process.env.CHANNEL_ID;

// function iso8601ToMilliseconds(duration: string) {
//   const regex = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
//   const match = regex.exec(duration);

//   if (!match) {
//     throw new Error('Invalid ISO 8601 duration format');
//   }

//   const hours = match[1] ? parseInt(match[1]) : 0;
//   const minutes = match[2] ? parseInt(match[2]) : 0;
//   const seconds = match[3] ? parseInt(match[3]) : 0;

//   const totalMilliseconds = ((hours * 60 + minutes) * 60 + seconds) * 1000;

//   return totalMilliseconds;
// }

// async function getHomePageInfo(channelId: string) {
//   const apiKey = process.env.API_KEY;

//   try {
//     // Retrieve channel content
//     const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${channelId}&key=${apiKey}`;
//     const channelResponse = fetch(channelUrl);
//     const channel = await channelResponse.data.items[0];

//     // Extract relevant channel information
//     const channelTitle = channel.snippet.title;
//     const channelDescription = channel.snippet.description;
//     const subscriberCount = channel.statistics.subscriberCount;
//     const viewCount = channel.statistics.viewCount;

//     console.log(`Channel Title: ${channelTitle}`);
//     console.log(`Channel Description: ${channelDescription}`);
//     console.log(`Subscriber Count: ${subscriberCount}`);
//     console.log(`View Count: ${viewCount}`);

//     // Retrieve latest videos from channel
//     const playlistId = channel.contentDetails.relatedPlaylists.uploads;
//     const playlistItemsUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${apiKey}`;
//     const playlistItemsResponse = fetch(playlistItemsUrl);
//     const videos = await playlistItemsResponse.data.items;

//     console.log('Latest Videos:');
//     for (const video of videos) {
//       const videoTitle = video.snippet.title;
//       const videoId = video.snippet.resourceId.videoId;

//       // Retrieve view count for each video
//       const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${videoId}&key=${apiKey}`;
//       const videoResponse = fetch(videoUrl);
//       const viewCount = videoResponse.data.items[0].statistics.viewCount;
//       const videoDuration = videoResponse.data.items[0].contentDetails.duration;

//       if (iso8601ToMilliseconds(videoDuration) <= 60000) {
//         console.log(`-¡ ${videoTitle} (Video ID: ${videoId}) - IS A SHORT!`);
//       }
//       console.log(
//         `- ${videoTitle} (Video ID: ${videoId}) - View Count: ${viewCount}`
//       );
//     }
//   } catch (error) {
//     console.error('Error retrieving channel info:', error);
//   }
// }
