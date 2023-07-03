import { Event } from '../models';

export const getCalendar = (): Promise<Event> => {
  const url = 'https://api.twitch.tv/helix/schedule';
  const urlWithBrodcaster = `${url}?broadcaster_id=597030912`;
  const headers = {
    Authorization: `Bearer qxsoqt7ov1jl5hhe3wrqrejzg7hpdx` ?? '',
    'Client-Id': 'f739kt1comvh9brrxunnf8chjxe3jo' ?? '',
  };
  return fetch(urlWithBrodcaster, { headers })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
