const initialState = {
  articleCategory: 0,
  articleIndex: 0
};

const setOpenArticle = (state = initialState, action) => {
  switch (action.type) {
    case "SET_OPEN_ARTICLE":
      return { ...state, articleCategory: action.payload.articleCategory, articleIndex: action.payload.articleIndex };
    default:
      return state;
  }
};

export default setOpenArticle;
