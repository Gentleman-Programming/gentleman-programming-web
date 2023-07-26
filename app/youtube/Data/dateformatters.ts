export function formatDate(inputDate: string | Date) {
  const date = new Date(inputDate);

  const monthNames = [
    'ene',
    'feb',
    'mar',
    'abr',
    'may',
    'jun',
    'jul',
    'ago',
    'sep',
    'oct',
    'nov',
    'dic',
  ];

  // Extract day, month, and year from the Date object
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  // Format the final string
  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate;
}
