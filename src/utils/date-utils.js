export const getTodaysDate = () => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  const date = dd + ' ' + monthNames[today.getMonth()] + ' ' + yyyy;
  return date;
};

export const getTime = () => {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  var time = h > 12 ? h - 12 + ':' + m + ' PM' : h + ':' + m + ' AM';
  return time;
};
