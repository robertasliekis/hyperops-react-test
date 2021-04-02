import React, { useState, useEffect } from "react";
import blogArticles from "../../data/BlogArticles";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { setOpenArticle } from "../../actions";

function NewArticle({ setOpenArticle, articleCategory, articleIndex }) {
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    getNewArticle();
  }, []);
  useEffect(() => {
    getNewArticle();
  }, [activeCategory]);

  const articleCategories = blogArticles.map((category) => {
    return category.title;
  });
  articleCategories.unshift("All stories");

  const getNewArticle = () => {
    let newArticleId = 0;
    let newArticleCategory = 0;
    let newArticleIndex = 0;
    let selectedCategories = [];

    if (activeCategory !== 0) {
      selectedCategories.push(blogArticles[activeCategory - 1]);
    } else {
      selectedCategories = blogArticles;
    }

    selectedCategories.forEach((category, categoryIndex) => {
      category.articles.forEach((article, index) => {
        if (article.id > newArticleId) {
          newArticleId = article.id;
          newArticleCategory = categoryIndex;
          newArticleIndex = index;
        }
      });
    });

    setOpenArticle({ articleCategory: newArticleCategory, articleIndex: newArticleIndex });
  };

  const activeArticle = blogArticles[articleCategory].articles[articleIndex];

  return (
    <div className="new-article-container">
      <h1 className="blog-title">Stories we tell</h1>
      <div className="article-categories">
        <p className="discover">Discover our stories:</p>
        {articleCategories.map((category, index) => (
          <div
            className={`category ${activeCategory === index ? "active-category" : ""}`}
            key={index}
            onClick={() => {
              setActiveCategory(index);
            }}
          >
            {category}
          </div>
        ))}
      </div>

      <Link className="new-article" to={`/article-${articleCategory}-${articleIndex}`}>
        <div className="article-image" style={{ backgroundImage: `url('article-images/${activeArticle.image}')` }}></div>
        <div className="article-info">
          <div className="category text-red-line ">
            <div className="line"></div>
            {blogArticles[articleCategory].title}
          </div>
          <h5 className="article-title">{activeArticle.title}</h5>
          <div className="article-date">{activeArticle.date}</div>
          <div className="article-text" dangerouslySetInnerHTML={{ __html: activeArticle.text }}></div>
        </div>
      </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewArticle);
