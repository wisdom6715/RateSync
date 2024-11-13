
const DateWidget = () => {
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',  // e.g., Monday
        year: 'numeric',  // e.g., 2024
        month: 'long',    // e.g., November
        day: 'numeric'    // e.g., 12
    };
  const date = new Date().toLocaleDateString(undefined, options);
  return (
    <div>{date}</div>
  )
}

export default DateWidget