import React, { useEffect } from "react";
import blogArticles from "../../data/BlogArticles";

import { connect } from "react-redux";
import { setOpenArticle } from "../../actions";

function BlogArticle({ articleCategory, articleIndex }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const createQoute = (textType) => {
  //   return textType === "quote" ? (
  //     <div className="quote-icon text-red-line text-red-line-absolute">
  //       <div className="line"></div>
  //       <div className="icon"></div>
  //     </div>
  //   ) : (
  //     ""
  //   );
  // };

  // const createList = (textType, textContent) => {
  //   return textType !== "ordered-list" && textType !== "bullet-list" ? (
  //     textContent
  //   ) : (
  //     <div className="list">
  //       {textContent.map((listItem, index) => (
  //         <div className="list-item" key={index}>
  //           {textType === "ordered-list" ? <div className="number">{`${index}.`}</div> : <div className="dot"></div>}
  //           {listItem}
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };

  const getArticlesCount = () => {
    let count = 0;
    blogArticles.forEach((category) => {
      category.articles.forEach((article) => {
        count++;
      });
    });
    return count;
  };

  const getNewArticles = () => {
    const articlesCount = getArticlesCount();
    let newArticles = [];
    if (articlesCount > 1) {
      const pickedArticlesCount = 0;
      blogArticles.forEach((category, categoryIndex) => {
        category.articles.forEach((article, index) => {
          if (pickedArticlesCount < 3) {
            newArticles.push(article);
          }
        });
      });
    }
  };

  getNewArticles();

  const activeArticle = blogArticles[articleCategory].articles[articleIndex];
  return (
    <div className="blog-article-container">
      <div className="wrapper">
        <div className="article">
          <div className="article-category text-red-line text-red-line-absolute">
            <div className="line"></div> {blogArticles[articleCategory].title}
          </div>
          <h1 className="article-title">{activeArticle.titleInside}</h1>
          <div className="article-date">{activeArticle.date}</div>
          <div className="article-image" style={{ backgroundImage: `url('article-images/${activeArticle.image}')` }}></div>
          <div className="article-text" dangerouslySetInnerHTML={{ __html: activeArticle.text }}>
            {/* {articleText.map((text, index) => (
              <div className={`${text[0]}`} key={index}>
                {createQoute(text[0])}
                {createList(text[0], text[1])}
              </div>
            ))} */}
          </div>
        </div>
        {/* <div className="other-articles"></div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(BlogArticle);
