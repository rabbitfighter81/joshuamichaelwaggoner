export const getCorrectTime = (timestamp: string): Date => {
  const date = new Date(timestamp);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  return date;
};
