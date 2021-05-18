const CurrentDate = () => {
  const date = new Date();
  let todayMonth = date.getMonth() + 1;
  let year = date.getFullYear();
  return { todayMonth, year };
};

export default CurrentDate;
