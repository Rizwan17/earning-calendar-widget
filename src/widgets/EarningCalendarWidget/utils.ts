export const getFormattedDate = (date: Date) => {
  const d = new Date(date);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(d.getDate()).padStart(2, "0")}`;
};


export const getDayName = (d: string) => {
    const date = new Date(d);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
};

export const getFormattedCurrentDate = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: '2-digit' };
  return date.toLocaleDateString('en-US', options);
}