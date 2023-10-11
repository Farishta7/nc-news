import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";

const AllFootballArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articlesData) => {
      const onlyFootballArticles = articlesData.filter((item) => {
        return item.topic === "football";
      });

      setArticles(onlyFootballArticles);
    });
  }, []);

  return (
    <div className="main-body">
      <div className="body-content">
        <p className="page-sub-heading">FOOTBALL</p>
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
                    {/* <p>
                    {item.topic.charAt(0).toUpperCase() + item.topic.slice(1)}
                  </p> */}
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
                  Date posted:{" "}
                  {new Date(item.created_at).toLocaleString().split(",")[0]}
                </p> */}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AllFootballArticles;
