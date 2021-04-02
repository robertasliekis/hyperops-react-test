import { combineReducers } from "redux";

import setOpenArticle from "./setOpenArticle";
import setScrollElement from "./setScrollElement";

export default combineReducers({
  setOpenArticle: setOpenArticle,
  setScrollElement: setScrollElement
});
