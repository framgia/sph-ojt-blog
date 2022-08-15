export const getContent = (content) => {
  if (content.length > 390) {
    return content.slice(0, 390) + "...";
  } else {
    return content;
  }
};
