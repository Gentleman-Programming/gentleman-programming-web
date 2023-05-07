import { Event } from '../models';

export const getCalendar = (): Promise<Event> => {
  const url = 'https://api.twitch.tv/helix/schedule';
  const urlWithBrodcaster = `${url}?broadcaster_id=597030912`;
  const headers = {
    Authorization: `Bearer ${process.env.ACCESS_TOCKEN}` ?? '',
    'Client-Id': process.env.CLIENT_ID ?? '',
  };
  return fetch(urlWithBrodcaster, { headers })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
