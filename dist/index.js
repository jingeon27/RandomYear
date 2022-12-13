const YearRandom = (startDate, lastDate = startDate) => {
  const count = lastDate - Math.floor(Math.random() * (lastDate - startDate));
  const Month = Math.floor(Math.random() * 12) + 1;
  const arr = [1, 3, 5, 7, 8, 10, 12];
  let DayProps = arr.includes(Month)
    ? 31
    : Month !== 2
    ? 30
    : count % 4 === 0
    ? count % 100 === 0
      ? count % 400 === 0
        ? 29
        : 28
      : 29
    : 28;
  const Date = Math.floor(Math.random() * DayProps) + 1;
  return `${count}-${Month}-${Date}`;
};
export default YearRandom;
