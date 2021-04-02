import React, { useEffect } from "react";

import { useRouteMatch } from "react-router-dom";

import NewArticle from "./NewArticle";
import BrowseArticles from "./BrowseArticles";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { setOpenArticle } from "../../actions";

function Blog({ articleCategory, articleIndex }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { url } = useRouteMatch();

  return (
    <div className="blog-container">
      <Route exact path="/blog" component={NewArticle} />
      <Route exact path="/blog" component={BrowseArticles} />
      {/* <Route exact path={`/blog/${articleCategory}${articleIndex}`} component={BlogArticle} /> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    articleCategory: state.setOpenArticle.articleCategory,
    articleIndex: state.setOpenArticle.articleIndex
  };
};

const mapDispatchToProps = {
  setOpenArticle
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
