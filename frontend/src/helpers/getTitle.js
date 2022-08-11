export const getTitle = (title) => {
  title = title.split("\n")[0];

  if (title.length > 20) {
    return title.slice(0, 20);
  }

  return title;
};
