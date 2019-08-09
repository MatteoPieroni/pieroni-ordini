export const formatDate = date => {
  const dateObj = new Date(date);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };
  const formattedDate = dateObj.toLocaleString(undefined, options);
  const capitalisedDate = formattedDate
    .split(' ')
    .map(
      (splitString, i) =>
        ((i == 0 || i == 2) &&
          splitString.charAt(0).toUpperCase() + splitString.slice(1)) ||
        splitString
    )
    .join(' ');
  return capitalisedDate;
};
