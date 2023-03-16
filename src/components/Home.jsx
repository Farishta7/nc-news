import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

const Home = () => {
    const [isLoading, setIsloading] = useState(true);
    const [articles, setArticles] = useState([]);
 
    useEffect(() => {
        setIsloading(true);

        getArticles()
        .then((articlesData)=> {
            setArticles(articlesData)
            setIsloading(false);
        })
    }, [])

    if (isLoading) return <p>Hang in there! Loading...</p>

    return (
    <div>
        <h2 className="home-page-header">Here are all articles about football, coding and cooking:</h2>
        <p>{isLoading}</p>
        <ul className="articles-list">
        {articles.map((item) => {
          return (
            <li key={item.article_id} className="each-article" >
              <Link to={`/articles/${item.article_id}` }>
              <img src={item.article_img_url} className="images" alt="I am an alt."/>
              <p>{item.topic.charAt(0).toUpperCase() + item.topic.slice(1)}</p>
              <p className="article-title">{item.title}</p>
              </Link>
              <p>Author: {item.author}</p>
              <p>Date posted: {new Date(item.created_at).toLocaleString().split(',')[0]}</p>
            </li>
          );
        })}
      </ul>
    </div>
    )
  };
  
export default Home;