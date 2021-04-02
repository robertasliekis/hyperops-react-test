export const setOpenArticle = (object) => {
  return {
    type: "SET_OPEN_ARTICLE",
    payload: object
  };
};

export const setScrollElement = (name) => {
  return {
    type: "SET_SCROLL_ELEMENT",
    payload: name
  };
};
