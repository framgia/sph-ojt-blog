export const getContent = (content) => {
  if (content.length > 200) {
    return content.slice(0, 200) + "...";
  } else {
    return content;
  }
};
