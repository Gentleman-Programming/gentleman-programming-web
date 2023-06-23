interface IVideoId {
  kind: string;
  videoId: string;
}

interface IStatistics {
  viewCount: number;
  subscriberCount: number;
  hiddenSubscriberCount: boolean;
  videoCount: number;
}

interface IChannel {
  title: string;
  description: string;
  keywords: string;
  unsubscribedTrailer: string;
  country: string;
}

interface IBanner {
  bannerExternalUrl: string;
}

interface IBrandingSettings {
  channel: IChannel;
  image: IBanner;
}

interface IDefaultThumbnail {
  url: string;
  width: number;
  height: number;
}

interface IThumbnails {
  default: IDefaultThumbnail;
  medium: IDefaultThumbnail;
  high: IDefaultThumbnail;
}

export interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface IItem {
  kind: string;
  etag: string;
  id: IVideoId;
  statistics: IStatistics;
  brandingSettings: IBrandingSettings;
  snippet: ISnippet;
}

export interface IItems {
  items: IItem[];
}
