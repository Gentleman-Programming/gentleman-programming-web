interface DefaultVideoThumbnail {
  url: string;
  width: number;
  height: number;
}

interface VideoThumbnails {
  default: DefaultVideoThumbnail;
  medium: DefaultVideoThumbnail;
  high: DefaultVideoThumbnail;
  standard: DefaultVideoThumbnail;
  maxres: DefaultVideoThumbnail;
}

interface ResourceId {
  kind: string;
  videoId: string;
}

export interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: VideoThumbnails;
  channelTitle: string;
  playlistId: string;
  position: number;
  resourceId: ResourceId;
  videoOwnerChannelTitle: string;
  videoOwnerChannelId: string;
}

export interface IPlaylistItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
}
