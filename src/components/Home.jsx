import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

const Home = () => {
  const [isLoading, setIsloading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setIsloading(true);

    getArticles().then((articlesData) => {
      setArticles(articlesData);
      setIsloading(false);
    });
  }, []);

  if (isLoading)
    return (
      <p style={{ fontSize: "30px", paddingLeft: "3rem" }}>
        Hang in there! Loading...
      </p>
    );

  return (
    <div className="main-body">
      <div className="body-content">
        <p className="page-sub-heading">ALL ARTICLES</p>
        <p>{isLoading}</p>
        <ul className="articles-list">
          {articles.map((item, index) => {
            return (
              <li
                key={item.article_id}
                className={`each-article${index === 0 ? " first-article" : ""}`}
              >
                <Link to={`/articles/${item.article_id}`}>
                  <div
                    className={`grid-container${
                      index === 0 ? " first-grid-container" : ""
                    }`}
                  >
                    <img
                      src={item.article_img_url}
                      className={`images${index === 0 ? " first-image" : ""}`}
                      alt="I am an alt."
                      loading="lazy"
                      id="images-id"
                    />
                    <p
                      className={`article-title${
                        index === 0 ? " first-article-title" : ""
                      }`}
                      id={`article-title${
                        index === 0 ? " first-article-title" : ""
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>
                </Link>
                {/* <p>Author: {item.author}</p>
                <p>
                  {new Date(item.created_at).toLocaleString().split(",")[0]}
                </p>
                <p>
                  {item.topic.charAt(0).toUpperCase() + item.topic.slice(1)}
                </p> */}
              </li>
            );
          })}
          {/* <li className="each-article empty-article-dummy">
            
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Home;
