import { NextApiRequest } from 'next';

export const TutiServerPathPage = (req: NextApiRequest): string => {
  const { url, query } = req;
  const queryString = query
    ? `?${new URLSearchParams(query as Record<string, string>).toString()}`
    : '';
  if (url) {
    const path = url.indexOf('?') !== -1 ? url.slice(0, url.indexOf('?')) : url;
    const parts = path.split('/');
    return parts[parts.length - 1] + queryString;
  } else {
    return `${url}${queryString}`;
  }
};
