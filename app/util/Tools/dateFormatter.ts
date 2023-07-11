/* eslint-disable no-case-declarations */

export function getTimeAgo(dateString: string | Date) {
  const date: Date = new Date(dateString);
  const currentDate: Date = new Date();
  const timeDifference: number = currentDate - date;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  switch (true) {
    case daysDifference >= 365:
      const years: number = Math.floor(daysDifference / 365);
      return years === 1 ? '1 year ago' : years + ' years ago';
    case daysDifference >= 30:
      const months: number = Math.floor(daysDifference / 30);
      return months === 1 ? '1 month ago' : months + ' months ago';
    case daysDifference >= 7:
      const weeks: number = Math.floor(daysDifference / 7);
      return weeks === 1 ? '1 week ago' : weeks + ' weeks ago';
    case daysDifference >= 1:
      return daysDifference === 1 ? '1 day ago' : daysDifference + ' days ago';
    default:
      const hoursDifference: number = Math.floor(
        timeDifference / (1000 * 60 * 60)
      );
      if (hoursDifference >= 1) {
        return hoursDifference === 1
          ? '1 hour ago'
          : hoursDifference + ' hours ago';
      } else {
        const minutesDifference: number = Math.floor(
          timeDifference / (1000 * 60)
        );
        return minutesDifference === 1
          ? '1 minute ago'
          : minutesDifference + ' minutes ago';
      }
  }
}
