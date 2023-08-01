import React from 'react';

export const ShortCard = ({ url }: { url: string }) => {
  return (
    <iframe
      width="315"
      height="560"
      src={url}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};
