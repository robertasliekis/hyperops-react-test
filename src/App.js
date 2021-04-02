import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { connect } from "react-redux";
import { setOpenArticle } from "./actions";

import Header from "./components/Header";
import MainSections from "./components/MainSections";
import Blog from "./components/blog/Blog";
import BlogArticle from "./components/blog/BlogArticle";
import Footer from "./components/Footer";

import blogArticles from "./data/BlogArticles";

import "./App.css";

//"homepage": "https://www.hyperops.net",
//  "homepage": "https://robertasliekis.github.io/hyperops-react-test/",

function App({ articleCategory, articleIndex, setOpenArticle }) {
  useEffect(() => {
    const url = window.location.href;
    let urlOrigin = window.location.origin;
    blogArticles.forEach((category, categoryIndex) => {
      category.articles.forEach((article, articleIndex) => {
        let articleUrl = `${urlOrigin}/#/article-${categoryIndex}-${articleIndex}`;
        if (articleUrl === url) {
          setOpenArticle({ articleCategory: categoryIndex, articleIndex: articleIndex });
        }
      });
    });
  }, []);

  return (
    <div className="App">
      <div className="website-wrapper">
        <Header />
        <Switch>
          <Route exact path={`/`} component={MainSections} />
          <Route path="/blog" component={Blog} />
          <Route path={`/article-${articleCategory}-${articleIndex}`} component={BlogArticle} />
          <Route path="*" component={MainSections} />
        </Switch>
        <Footer />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
