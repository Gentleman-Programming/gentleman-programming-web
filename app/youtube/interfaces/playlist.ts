interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
  };
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface IPlaylist extends Array<ISnippet> {
  video: ISnippet;
}
