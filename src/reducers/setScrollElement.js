const initialState = {
  scrollElement: "",
  scrollClickCount: 0
};

const setScrollElement = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SCROLL_ELEMENT":
      return { ...state, scrollElement: action.payload, scrollClickCount: state.scrollClickCount + 1 };
    default:
      return state;
  }
};

export default setScrollElement;
