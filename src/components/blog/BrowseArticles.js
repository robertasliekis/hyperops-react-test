import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { setOpenArticle } from "../../actions";

import blogArticles from "../../data/BlogArticles";

function BrowseArticles({ setOpenArticle }) {
  useEffect(() => {
    const categoriesCount = blogArticles.length;
    const categoriesOpen = Array(categoriesCount).fill(false);
    setOpenCategoryArticles(categoriesOpen);
  }, []);

  const [openCategoryArticles, setOpenCategoryArticles] = useState(null);

  const viewButtonClicked = (index) => {
    let openCategoryArticlesCopy = [...openCategoryArticles];
    openCategoryArticlesCopy[index] = !openCategoryArticlesCopy[index];
    setOpenCategoryArticles(openCategoryArticlesCopy);
  };

  const categoryRefs = useRef([]);
  return (
    <div className="browse-articles-container">
      {blogArticles.map((category, categoryIndex) => {
        const articlesCount = category.articles.length;
        let containerHeight = "0";
        let openContainer = false;
        if (openCategoryArticles !== null) {
          openContainer = openCategoryArticles[categoryIndex];
          containerHeight = categoryRefs.current[categoryIndex].clientHeight;
        }
        return (
          <div className="article-category-container" key={categoryIndex}>
            <div className="container-top">
              <div className="category text-red-line text-red-line-absolute">
                <div className="line"></div>
                {category.title}
              </div>
              <div
                className="btn btn-round btn-hollow"
                style={{ display: articlesCount > 3 ? "flex" : "none" }}
                onClick={() => viewButtonClicked(categoryIndex)}
              >
                {openContainer ? "View less" : "View more"}
              </div>
            </div>
            <div
              className="container-bottom"
              style={{
                height: openContainer ? `${containerHeight}px` : "330px"
              }}
            >
              <div className="overflow-wrapper" ref={(e) => (categoryRefs.current[categoryIndex] = e)}>
                {category.articles.map((article, articleIndex) => (
                  <Link
                    className="article-container"
                    key={articleIndex}
                    style={{
                      marginRight: (articleIndex + 1) % 3 === 0 ? "0px" : "20px"
                    }}
                    to={`/article-${categoryIndex}-${articleIndex}`}
                    onClick={() => {
                      setOpenArticle({ articleCategory: categoryIndex, articleIndex: articleIndex });
                    }}
                  >
                    <div className="article-image" style={{ backgroundImage: `url('article-images/${article.image}')` }}></div>
                    <h6 className="article-title">{article.title}</h6>
                    <div className="article-date">{`${article.date} - ${article.readTime} min read`}</div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="line-grey"></div>
          </div>
        );
      })}
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

export default connect(mapStateToProps, mapDispatchToProps)(BrowseArticles);
