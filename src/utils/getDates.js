const firstYear = process.env.REACT_FIRST_YEAR ?? 2014;

export const getDates = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const todayMonthDayDateComplement = `${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}`;

  let dates = [];
  for (let i = firstYear; i <= currentYear; i++) {
    dates.push(`${i}-${todayMonthDayDateComplement}`);
  }
  return dates;
};
