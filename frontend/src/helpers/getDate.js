export const getDate = (published_at) => {
  const date = new Date(published_at);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleString("en-US", options);
};
